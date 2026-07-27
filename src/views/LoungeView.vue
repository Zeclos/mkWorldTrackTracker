<script setup>
import { RouterLink } from 'vue-router'
import LoungeSelectForm from '@/components/LoungeSelectForm.vue';
</script>

<template>
    <main class="min-h-screen bg-slate-900 text-white">
        <div class="mx-auto flex max-w-5xl flex-col items-center px-6 py-16">
            <h1 class="text-5xl font-bold">
                Select what kind of lounge
            </h1>
            <LoungeSelectForm />

        </div>
    </main>
</template>