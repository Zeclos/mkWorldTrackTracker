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

const playerCountOptions = [
    "All",
    12,
    24
]

const playerCount = ref("All")

const filteredSessions = computed(() => {
    return sessions.value.filter(session => {
        let playerCountMatches = true;

        const modeMatches =
            sessionMode.value === "All" ||
            session.mode === sessionMode.value;

        const formatMatches =
            session.mode === "Worldwide" ||
            formatMode.value === "All" ||
            session.format === formatMode.value;

        if (sessionMode.value === "Lounge" && session.mode === "Lounge") {
            playerCountMatches = session.races[0].playerCount === playerCount.value || playerCount.value === "All"
        }
        return modeMatches && formatMatches && playerCountMatches;
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

const filteredRaces = computed(() => {
    return filteredSessions.value.flatMap(session => session.races)
})

const averagePlacement = computed(() => {
    if (!filteredRaces.value.length) {
        return 0;
    }

    const total = filteredRaces.value.reduce((sum, race) => sum + race.placement, 0)
    return (total / filteredRaces.value.length).toFixed(2)
})

const averagePoints = computed(() => {
    if (!filteredRaces.value.length) {
        return 0;
    }

    const total = filteredRaces.value.reduce((sum, race) => sum + race.points, 0)
    return (total / filteredRaces.value.length).toFixed(2)
})

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
                    <div class="space-y-6">
                        <label class="mb-2 block text-lg font-semibold">
                            Format
                        </label>

                        <select v-model="formatMode" class="w-full rounded-xl bg-slate-700 p-3">
                            <option v-for="option in formatOptions" :key="option" :value="option">
                                {{ option }}
                            </option>
                        </select>
                        <label class="mb-2 block text-lg font-semibold">
                            Player Count
                        </label>

                        <select v-model="playerCount" class="w-full rounded-xl bg-slate-700 p-3">
                            <option v-for="option in playerCountOptions" :key="option" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Total races: {{ filteredRaces.length }}</p>
                    <p>Average placement: {{ averagePlacement }}</p>
                    <p>Average points: {{ averagePoints }}</p>
                </div>
            </div>
            <h1 v-if="sessionMode === 'Lounge'" class="text-5xl font-bold">
                Total Stats:

            </h1>


            <div class="space-y-6">
                <TrackCard v-for="track in tracks" :key="track.id" :track="track" :races=getTrackRaces(track.id)
                    :connectedTracks="getConnectedTracks(track)" class="w-300" />
            </div>

        </div>

    </div>
</template>