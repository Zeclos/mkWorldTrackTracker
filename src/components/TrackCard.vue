<script setup>
import { computed } from 'vue'


const props = defineProps({
    track: Object,
    races: Object
})


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

</script>

<template>
    <div class="rounded-xl bg-slate-800 p-4 flex gap-4">

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
</template>