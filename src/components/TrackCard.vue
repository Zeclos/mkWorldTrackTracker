<script setup>
import { computed, ref } from 'vue'
import ConnectedTrackRows from './ConnectedTrackRows.vue';

const props = defineProps({
    track: Object,
    races: Object,
    connectedTracks: Object
})

const expanded = ref(false)

const averagePlacement = computed(() => {
    if (!props.races.length) {
        return 0;
    }

    const total = props.races.reduce((sum, race) => sum + race.placement, 0)
    return (total / props.races.length).toFixed(2)
})

const averagePoints = computed(() => {
    if (!props.races.length) {
        return 0;
    }

    const total = props.races.reduce((sum, race) => sum + race.points, 0)
    return (total / props.races.length).toFixed(2)
})

const toggleExpanded = () => {
    expanded.value = !expanded.value
}

const rowStats = {

}

</script>

<template>
    <div class="rounded-lg cursor-pointer hover:bg-slate-800" @click="toggleExpanded">
        <div :class="['bg-slate-800 p-4 flex gap-4', expanded ? 'rounded-t-lg' : 'rounded-lg']">
            <img :src="track.image" :alt="track.name" class="h-24 w-36 rounded-lg object-cover">
            <div>
                <h2 class="text-xl font-bold">
                    {{ track.name }}
                </h2>

                <p>races: {{ props.races.length }}</p>
                <p>Average placement: {{ averagePlacement }}</p>
                <p>Average points: {{ averagePoints }}</p>
            </div>
        </div>

        <div v-if="expanded" class="p-4 bg-slate-800 space-y-1 rounded-b-lg">
            <ConnectedTrackRows v-for="secondTrack in [null, ...connectedTracks]" :firstTrack="track"
                :secondTrack="secondTrack"
                :races="races.filter(race => race.secondTrack === (secondTrack?.id ?? null))" />
        </div>

    </div>
</template>