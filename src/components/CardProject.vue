<script setup>

const props = defineProps({
    img: String,
    name: String,
    desc: Text
})

</script>

<template>

    <div class="cardProject">
        <img :src="img" :alt="name">
        <h2>{{ name }}</h2>
        <p>{{ desc }}</p>
    </div>

</template>
