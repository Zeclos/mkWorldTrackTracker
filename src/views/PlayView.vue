<script setup>
import { computed, ref } from 'vue'
import RaceComponent from '@/components/RaceComponent.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    mode: {
        type: String,
        required: true,
    },
})

const isWorldwide = computed(() => props.mode === 'worldwide')

const races = ref(
    isWorldwide.value ? [{
        firstTrack: null,
        secondTrack: null,
        placement: null,
        startingPosition: null,
        points: 0,
    }]
        : Array.from({ length: 12 }, () => ({
            firstTrack: null,
            secondTrack: null,
            placement: null,
            startingPosition: null,
            points: 0,
        }))
)

function addRace() {
    races.value.push({
        firstTrack: null,
        secondTrack: null,
        placement: null,
        startingPosition: null,
        points: 0,
    })
}

function updateRace(index, race) {
    races.value[index] = race
    if (isWorldwide) {
        races.value[index].points = 0
    }
}

const totalPoints = computed(() =>
    races.value.reduce((sum, race) => sum + race.points, 0)
)

function endSession() {
    localStorage.setItem('race', JSON.stringify(races.value))
    console.log(races)
    router.push({
        name: 'home',
    })
}

</script>

<template>
    <main class="min-h-screen bg-slate-900 text-white">
        <div class="mx-auto flex w-full max-w-6xl flex-col px-6 py-16">
            <div
                class="mb-4 grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_120px_120px_120px] gap-4 text-center text-sm font-medium text-slate-300">
                <div class="flex items-end justify-center">Track</div>
                <div class="w-12"></div>
                <div class="flex items-end justify-center">Connects to Track</div>
                <div class="flex items-end justify-center">Placement</div>
                <div v-if="!isWorldwide" class="flex items-end justify-center">Points</div>
                <div class="flex items-end justify-center">Starting Spot</div>
            </div>
            <div class="flex flex-col gap-4">
                <RaceComponent v-for="(_, index) in races" :key="index" :mode="props.mode"
                    @race-updated="updateRace(index, $event)" />
            </div>

            <div v-if="!isWorldwide"
                class="mt-4 grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_120px_120px_120px] items-center gap-4">
                <div class="min-w-0"></div>
                <div class="flex justify-center"></div>
                <div class="min-w-0"></div>
                <div class="min-w-0"></div>
                <div class="min-w-0">
                    <div class="mb-2 text-center text-sm font-medium text-slate-300">Total</div>
                    <input :value="totalPoints" type="number" readonly
                        class="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none" />
                </div>
                <div class="min-w-0"></div>
            </div>

            <div v-if="isWorldwide" class="mt-10 w-full max-w-lg rounded-xl bg-slate-800 p-6 shadow-lg space-y-6">
                <button @click="addRace"
                    class="w-full rounded-lg bg-blue-600 p-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-600">
                    Add Race
                </button>
            </div>


            <div class="mt-10 w-full max-w-lg rounded-xl bg-slate-800 p-6 shadow-lg space-y-6">
                <button @click="endSession"
                    class="w-full rounded-lg bg-blue-600 p-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-600">
                    End Session
                </button>
            </div>

        </div>
    </main>
</template>