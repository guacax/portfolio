<script setup>

const props = defineProps({
    img: String,
    name: String,
    time: String,
    language: String,
    desc: Text
})

</script>

<template>

    <img :src="img" :alt="img">
    <h2>{{ name }}</h2>
    <em>{{ time }}</em>
    <!-- langugae avec icone -->
    <p>{{ language }}</p>
    <p>{{ desc }}</p>

</template>
