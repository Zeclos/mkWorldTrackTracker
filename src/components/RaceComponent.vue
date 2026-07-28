<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import TrackDropDown from '@/components/TrackDropDown.vue';
import ConnectionImage from '@/assets/track_images/connecting.png'
import { tracks } from "@/data/tracks";

const props = defineProps({
    mode: {
        type: String,
        required: true,
    },
})

const isWorldwide = computed(() => props.mode === 'worldwide')

const emit = defineEmits(['race-updated'])

const startingPosition = ref(null)
const route = useRoute()

const players = Number(route.params.players)

const placement = ref(null)

const noneTrack = {
    id: null,
    name: "None",
    image: null,
    connectsTo: [],
}

const firstTrack = ref(tracks[0])
const secondTrack = ref(noneTrack)

const availableConnections = computed(() => {
    if (!firstTrack.value) return [noneTrack];

    return [noneTrack, ...tracks.filter(track => firstTrack.value.connectsTo.includes(track.id))]
});

const placementPoints12p = {
    1: 15,
    2: 12,
    3: 10,
    4: 9,
    5: 8,
    6: 7,
    7: 6,
    8: 5,
    9: 4,
    10: 3,
    11: 2,
    12: 1
}

const placementPoints24p = {
    1: 15,
    2: 12,
    3: 10,
    4: 9,
    5: 9,
    6: 8,
    7: 8,
    8: 7,
    9: 7,
    10: 6,
    11: 6,
    12: 6,
    13: 5,
    14: 5,
    15: 5,
    16: 4,
    17: 4,
    18: 4,
    19: 3,
    20: 3,
    21: 3,
    22: 2,
    23: 2,
    24: 1,
}

function getPoints(players, placement) {
    return players === 12 ? placementPoints12p[placement] : placementPoints24p[placement]
}

const points = computed(() => {
    if (placement.value == null) return ''
    return getPoints(players, placement.value) ?? ''
})

watch(
    [
        firstTrack,
        secondTrack,
        placement,
        startingPosition,
        points
    ],
    () => {
        emit('race-updated', {
            firstTrack: firstTrack.value.id,
            secondTrack: secondTrack.value.id,
            placement: placement.value,
            startingPosition: startingPosition.value,
            points: points.value === '' ? 0 : Number(points.value),
        })
    },
    { immediate: true }
)

watch(firstTrack, () => {
    secondTrack.value = noneTrack
})

</script>

<template>
    <div class="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_120px_120px_120px] items-center gap-4">
        <div class="min-w-0">
            <TrackDropDown v-model="firstTrack" :tracks="tracks" />
        </div>

        <div class="flex justify-center">
            <img :src="ConnectionImage" alt="Connecting tracks" class="h-12 w-12 object-contain" />
        </div>

        <div class="min-w-0">
            <TrackDropDown v-model="secondTrack" :tracks="availableConnections" />
        </div>

        <div class="min-w-0">
            <input v-model.number="placement" type="number" min="1" :max="players"
                class="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-slate-500" />
        </div>

        <div v-if="!isWorldwide" class="min-w-0">
            <input :value="points" type="number" readonly
                class="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none" />
        </div>

        <div class="min-w-0">
            <input v-model.number="startingPosition" type="number" min="1" :max="players"
                class="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-slate-500" />
        </div>
    </div>
</template>