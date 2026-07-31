<script setup>
import { ref, computed, watch } from 'vue'
import TrackDropDown from '@/components/TrackDropDown.vue'
import ConnectionImage from '@/assets/track_images/connecting.png'
import { tracks } from '@/data/tracks'

const emit = defineEmits(['update'])

const noneTrack = {
    id: null,
    name: 'None',
    image: null,
    connectsTo: [],
}

const firstTrack = ref(tracks[0])
const secondTrack = ref(noneTrack)

const availableConnections = computed(() => {
    if (!firstTrack.value) return [noneTrack]

    return [
        noneTrack,
        ...tracks.filter(track =>
            firstTrack.value.connectsTo.includes(track.id)
        ),
    ]
})

watch(firstTrack, () => {
    secondTrack.value = noneTrack
})

watch(
    [firstTrack, secondTrack],
    () => {
        emit('update', {
            firstTrack: firstTrack.value,
            secondTrack: secondTrack.value,
        })
    },
    { immediate: true }
)
</script>

<template>
    <div class="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
        <div class="min-w-0">
            <TrackDropDown v-model="firstTrack" :tracks="tracks" />
        </div>

        <div class="flex justify-center">
            <img :src="ConnectionImage" alt="Connecting track" class="h-12 w-12 object-contain" />
        </div>

        <div class="min-w-0">
            <TrackDropDown v-model="secondTrack" :tracks="availableConnections" />
        </div>
    </div>
</template>