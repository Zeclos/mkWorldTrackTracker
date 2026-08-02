<script setup>
import { computed, ref } from 'vue'
import RaceComponent from '@/components/RaceComponent.vue';
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()

const router = useRouter()

const players = Number(route.params.players)

const props = defineProps({
    mode: {
        type: String,
        required: true,
    },
    format: {
        type: String,
        default: '',
    }
})

const isWorldwide = computed(() => props.mode === 'Worldwide')

const races = ref(
    isWorldwide.value ? [{
        mode: props.mode,
        playerCount: null,
        firstTrack: null,
        secondTrack: null,
        placement: null,
        startingPosition: null,
        points: 0,
    }]
        : Array.from({ length: 12 }, () => ({
            mode: props.mode,
            playerCount: null,
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
        playerCount: null,
    })
}

function updateRace(index, race) {
    races.value[index] = race
    if (isWorldwide.value) {
        races.value[index].points = 0
    } else {
        races.value[index].playerCount = players
    }
}

const totalPoints = computed(() =>
    races.value.reduce((sum, race) => sum + race.points, 0)
)

function endSession() {
    const oldSessions = JSON.parse(
        localStorage.getItem('sessions') || '[]'
    )

    const format = isWorldwide.value ? 'FFA' : props.format

    oldSessions.push({
        date: new Date().toISOString(),
        mode: props.mode,
        format: format,
        races: races.value
    })

    localStorage.setItem(
        'sessions',
        JSON.stringify(oldSessions)
    )

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
                <div v-if="isWorldwide" class="flex items-end justify-center">Player count</div>

            </div>
            <div class="flex flex-col gap-4">
                <RaceComponent v-for="(_, index) in races" :key="index" :mode="props.mode"
                    :initial-starting-position="index > 0 ? races[index - 1]?.placement ?? null : null"
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