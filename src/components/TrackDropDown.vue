<script setup>
import { ref, onMounted, computed, onBeforeUnmount, nextTick } from "vue";


const props = defineProps({
    tracks: {
        type: Array,
        required: true,
    },
    modelValue: Object,
});

const search = ref("");

const inputRef = ref(null);

async function openDropdown() {
    open.value = true;
    await nextTick();
    inputRef.value?.focus();
}

const filteredTracks = computed(() => {
    if (!search.value) return props.tracks;

    return props.tracks.filter(track =>
        track.name.toLowerCase().includes(search.value.toLowerCase())
    );
});



const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const dropdownRef = ref(null);

function selectTrack(track) {
    emit("update:modelValue", track);
    search.value = "";

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
    <div ref="dropdownRef" class="relative w-full min-w-0">
        <button v-if="!open" @click.stop="openDropdown"
            class="flex w-full items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-3">
            <div class="flex items-center gap-3">
                <img v-if="modelValue?.image" :src="modelValue.image" :alt="modelValue.name"
                    class="h-10 w-15 rounded object-cover" />
                <span>{{ modelValue?.name ?? "None" }}</span>
            </div>

            <span>▼</span>
        </button>

        <input ref="inputRef" v-else v-model="search" autofocus placeholder="Search tracks..."
            class="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none" />

        <div v-if="open"
            class="absolute z-50 mt-2 max-h-50 w-full overflow-y-auto rounded-lg border border-slate-700 bg-slate-800">
            <button v-for="track in filteredTracks" :key="track.id" @click="selectTrack(track)"
                class="flex w-full items-center gap-3 p-3 hover:bg-slate-700">
                <img v-if="track.image" :src="track.image" :alt="track.name" class="h-10 w-15 rounded object-cover" />
                {{ track.name }}
            </button>

            <div v-if="filteredTracks.length === 0" class="p-3 text-slate-400">
                No tracks found.
            </div>
        </div>
    </div>
</template>