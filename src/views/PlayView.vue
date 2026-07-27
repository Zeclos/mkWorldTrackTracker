<script setup>
import RaceComponent from '@/components/RaceComponent.vue';
import PlayComponent from '@/components/PlayComponent.vue'



</script>

<template>
    <main class="min-h-screen bg-slate-900 text-white">
        <div class="mx-auto flex max-w-5xl flex-col items-center px-6 py-16">
            <div class="mb-2 flex justify-center gap-4 text-sm font-medium text-slate-300">
                <div class="w-72">Track</div>
                <div class="w-12"></div>
                <div class="w-72">Connects to Track</div>
                <div class="w-24">Placement</div>
                <div class="w-24">Points</div>
                <div class="w-24">Starting Spot</div>
            </div>
            <RaceComponent v-for="n in 12" :key="n" />
            <PlayComponent />
        </div>
    </main>
</template>