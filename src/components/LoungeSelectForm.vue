<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const playerCount = ref('12')
const format = ref('FFA')
const sq = ref('No')
const formats = [
    'FFA',
    '2v2',
    '3v3',
    '4v4',
    '6v6',
    '8v8',
    '12v12',
]

const SquadQueueOptions = [
    "Yes",
    "No"
]

function continueToLounge() {
    if (!playerCount.value || !format.value) {
        return
    }

    router.push({
        name: 'lounge_play',
        params: {
            players: playerCount.value,
            format: format.value,
            sq: sq.value === 'Yes' ? 1 : 0,
        },
    })
}
</script>

<template>
    <div class="mt-10 w-full max-w-lg rounded-xl bg-slate-800 p-6 shadow-lg">

        <div class="space-y-6">

            <div>
                <label class="mb-2 block text-lg font-semibold">
                    Number of players
                </label>

                <select v-model="playerCount" class="w-full rounded-xl bg-slate-700 p-3">
                    <option value="12">12 Players</option>
                    <option value="24">24 Players</option>
                </select>
            </div>

            <div>
                <label class="mb-2 block text-lg font-semibold">
                    Lounge format
                </label>

                <select v-model="format" class="w-full rounded-lg bg-slate-700 p-3">
                    <option v-for="option in formats" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>

            </div>
            <div>
                <label class="mb-2 block text-lg font-semibold">
                    Squad Queue?
                </label>

                <select v-model="sq" class="w-full rounded-lg bg-slate-700 p-3">
                    <option v-for="option in SquadQueueOptions" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
            </div>

            <button @click="continueToLounge"
                class="w-full rounded-lg bg-blue-600 p-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-600">
                Continue
            </button>

        </div>

    </div>
</template>