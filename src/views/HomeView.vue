<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="min-h-screen bg-slate-900 text-white">
    <div class="mx-auto flex max-w-5xl flex-col items-center px-6 py-16">

      <h1 class="text-5xl font-bold">
        Mario Kart World Track Tracker
      </h1>

      <p class="mt-4 text-center text-slate-400">
        Track race sessions and view stats.
        all Data is currently stored in local storage.
      </p>

      <div class="mt-12 grid w-full gap-6 md:grid-cols-3">
        <RouterLink to="/lounge" class="rounded-xl bg-red-600 p-6 transition hover:bg-red-700">
          <h2 class="text-2xl font-semibold">
            Lounge Session
          </h2>

          <p class="mt-2">
            Start a Lounge Session
          </p>
        </RouterLink>

        <RouterLink to="/worldwide/play" class="rounded-xl bg-blue-600 p-6 transition hover:bg-blue-700">
          <h2 class="text-2xl font-semibold">
            WorldWide Session
          </h2>

          <p class="mt-2">
            Start a WorldWide Session
          </p>

        </RouterLink>

        <RouterLink to="/statistics" class="rounded-xl bg-green-600 p-6 transition hover:bg-green-700">
          <h2 class="text-2xl font-semibold">
            Statistics
          </h2>

          <p class="mt-2">
            View your stats and.
          </p>
        </RouterLink>
      </div>

    </div>
  </main>
</template>