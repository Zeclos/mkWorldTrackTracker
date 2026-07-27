<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function endSession() {

    router.push({
        name: 'end_session',
    })
}
</script>

<template>
    <div class="mt-10 w-full max-w-lg rounded-xl bg-slate-800 p-6 shadow-lg">

        <div class="space-y-6">

            <button @click="endSession"
                class="w-full rounded-lg bg-blue-600 p-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-600">
                End Session
            </button>

        </div>

    </div>
</template>