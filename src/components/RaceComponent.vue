<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import TrackDropDown from '@/components/TrackDropDown.vue';
import ConnectionImage from '@/assets/track_images/connecting.png'
import { tracks } from "@/data/tracks";
import TrackComponent from '@/components/TrackComponent.vue'

const props = defineProps({
    mode: {
        type: String,
        required: true,
    },
})

const isWorldwide = computed(() => props.mode === 'Worldwide')

const emit = defineEmits(['race-updated'])

const startingPosition = ref(null)

const playerCount = ref(null)

const route = useRoute()

const players = Number(route.params.players)

const placement = ref(null)

const maxPlayers = computed(() => {
    return isWorldwide.value ? playerCount.value : players
})

const noneTrack = {
    id: null,
    name: "None",
    image: null,
    connectsTo: [],
}

const firstTrack = ref(tracks[0])
const secondTrack = ref(noneTrack)

const placementPoints12p = {
    1: 15, 2: 12, 3: 10, 4: 9, 5: 8, 6: 7,
    7: 6, 8: 5, 9: 4, 10: 3, 11: 2, 12: 1
}

const placementPoints24p = {
    1: 15, 2: 12, 3: 10, 4: 9, 5: 9, 6: 8,
    7: 8, 8: 7, 9: 7, 10: 6, 11: 6, 12: 6,
    13: 5, 14: 5, 15: 5, 16: 4, 17: 4, 18: 4,
    19: 3, 20: 3, 21: 3, 22: 2, 23: 2, 24: 1,
}

function getPoints(players, placement) {
    return players === 12 ? placementPoints12p[placement] : placementPoints24p[placement]
}

const points = computed(() => {
    if (placement.value == null) {
        return ''
    }
    return getPoints(players, placement.value) ?? ''
})

watch(
    [
        firstTrack,
        secondTrack,
        placement,
        startingPosition,
        points,
        playerCount
    ],
    () => {
        emit('race-updated', {
            firstTrack: firstTrack.value?.id,
            secondTrack: secondTrack.value?.id,
            placement: placement.value,
            startingPosition: startingPosition.value,
            points: points.value === '' ? 0 : Number(points.value),
            playerCount: playerCount.value
        })
    },
    { immediate: true }
)

watch(firstTrack, () => {
    secondTrack.value = noneTrack
})

function clamp(value, min, max) {
    if (value == null || value === '') return null
    return Math.min(Math.max(Number(value), min), max)
}

watch(placement, (value) => {
    placement.value = clamp(value, 1, maxPlayers.value || 24)
})

watch(startingPosition, (value) => {
    startingPosition.value = clamp(value, 1, maxPlayers.value || 24)
})

watch(playerCount, (value) => {
    playerCount.value = clamp(value, 1, 24)
})

function onTracksUpdated(data) {
    firstTrack.value = data.firstTrack
    secondTrack.value = data.secondTrack
}

</script>

<template>
    <div class="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_120px_120px_120px] items-center gap-4">
        <TrackComponent @update="onTracksUpdated" class="col-span-3" />

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

        <div v-if="isWorldwide" class="min-w-0">
            <input v-model.number="playerCount" type="number" min="1" :max="24"
                class="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-slate-500" />
        </div>
    </div>
</template>