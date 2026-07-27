<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    tracks: {
        type: Array,
        required: true,
    },
    modelValue: Object,
});

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const dropdownRef = ref(null);

function selectTrack(track) {
    emit("update:modelValue", track);
    open.value = false;
}

function handleClickOutside(event) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        open.value = false;
    }
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
    <div ref="dropdownRef" class="relative w-72">
        <button @click.stop="open = !open"
            class="flex w-full items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-3">
            <div class="flex items-center gap-3">
                <img v-if="modelValue?.image" :src="modelValue.image" :alt="modelValue.name"
                    class="h-10 w-15 rounded object-cover" />
                <span>
                    {{ modelValue?.name ?? "None" }}
                </span>
            </div>

            <span>▼</span>
        </button>

        <div v-if="open"
            class="absolute z-50 mt-2 max-h-72 w-full overflow-y-auto rounded-lg border border-slate-700 bg-slate-800">
            <button v-for="track in tracks" :key="track.id" @click="selectTrack(track)"
                class="flex w-full items-center gap-3 p-3 hover:bg-slate-700">
                <img v-if="track.image" :src="track.image" :alt="track.name" class="h-10 w-15 rounded object-cover" />
                {{ track.name }}
            </button>
        </div>
    </div>
</template>