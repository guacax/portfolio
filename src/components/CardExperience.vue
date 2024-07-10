<script setup>

const props = defineProps({
    title: String,
    entreprise: String,
    date: String,
    desc: Text
})

</script>

<template>

    <h2>{{ title }}</h2>
    <h3>{{ entreprise }}</h3>
    <em>{{ date }}</em>
    <p>{{ desc }}</p>
 
</template>
