<script setup>
import ConnectionImage from '@/assets/track_images/connecting.png'
import { computed } from 'vue'

const props = defineProps({
    firstTrack: Object,
    secondTrack: Object,
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
    <div class="rounded-lg bg-slate-900">
        <div class="p-4 flex items-center rounded-lg gap-3">
            <img v-if="firstTrack?.image" :src="firstTrack.image" :alt="firstTrack.name"
                class="h-20 w-30 rounded object-cover" />
            <span>{{ firstTrack.name }}</span>

            <div v-if="secondTrack !== null" class="flex justify-center">
                <img :src="ConnectionImage" alt="Connecting track" class="h-24 w-24 object-contain" />
            </div>

            <img v-if="secondTrack !== null" :src="secondTrack.image" :alt="secondTrack.name"
                class="h-20 w-30 rounded object-cover" />
            <span v-if="secondTrack !== null">{{ secondTrack.name }}</span>
            <div class="ml-auto text-right">
                <p>races: {{ props.races.length }}</p>
                <p>Average placement: {{ averagePlacement }}</p>
                <p>Average points: {{ averagePoints }}</p>
            </div>
        </div>
    </div>
</template>
