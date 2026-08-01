<script setup>
import TrackComponent from '@/components/TrackComponent.vue';
import { ref, computed, watch } from 'vue'
import { tracks } from '@/data/tracks'
import TrackCard from '@/components/TrackCard.vue';

const sessions = ref(
    JSON.parse(localStorage.getItem('sessions') || '[]')
)

const sessionMode = ref("All")
const formatMode = ref("All")

const sessionOptions = [
    "All",
    "Lounge",
    "Worldwide"
]

const formatOptions = [
    'All',
    'FFA',
    '2v2',
    '3v3',
    '4v4',
    '6v6',
    '8v8',
    '12v12',
]

const filteredSessions = computed(() => {
    return sessions.value.filter(session => {
        const modeMatches =
            sessionMode.value === "All" ||
            session.mode === sessionMode.value;

        const formatMatches =
            session.mode === "Worldwide" ||
            formatMode.value === "All" ||
            session.format === formatMode.value;

        return modeMatches && formatMatches;
    });
});

function getTrackRaces(trackId) {
    return filteredSessions.value
        .flatMap(session => session.races)
        .filter(race => race.firstTrack === trackId);
}

watch(sessionMode, () => {
    formatMode.value = 'All'
})

function getConnectedTracks(track) {
    return track.connectsTo
        .map(id => tracks.find(t => t.id === id))
        .filter(Boolean)
}

</script>

<template>
    <div class="min-h-screen bg-slate-900 text-white">
        <div class="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 space-y-6">
            <h1 class="text-5xl font-bold">
                View Stats
            </h1>

            <div class="space-y-6">

                <div>
                    <label class="mb-2 block text-lg font-semibold">
                        Select Session type
                    </label>

                    <select v-model="sessionMode" class="w-full rounded-xl bg-slate-700 p-3">
                        <option v-for="option in sessionOptions" :key="option" :value="option">
                            {{ option }}
                        </option>
                    </select>
                </div>

                <div v-if="sessionMode === 'Lounge'">
                    <label class="mb-2 block text-lg font-semibold">
                        Format
                    </label>

                    <select v-model="formatMode" class="w-full rounded-xl bg-slate-700 p-3">
                        <option v-for="option in formatOptions" :key="option" :value="option">
                            {{ option }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="space-y-6">
                <TrackCard v-for="track in tracks" :key="track.id" :track="track" :races=getTrackRaces(track.id)
                    :connectedTracks="getConnectedTracks(track)" class="w-300" />
            </div>

        </div>

    </div>
</template>