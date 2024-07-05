<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="video-bg">
        <video width="320" height="240"   muted>
            <source src="/src/assets/bg_video.mp4" type="video/mp4">
        </video>
    </div>
    <div class="app">

        <header>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/experience">Experience</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </nav>
        </header>
        <RouterView />
    </div>

</template>
