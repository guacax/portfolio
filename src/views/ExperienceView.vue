<script setup>

import CardExperience from '@/components/CardExperience.vue';
import workExps from '../assets/workExp.json';
import schoolExps from '../assets/schoolExp';

</script>

<template>
    <main>
        <h1>Work experiences</h1>
        <div class="exps">
            <div v-for="workExp in workExps" :key="workExp.id">
                <CardExperience :title="workExp.title" :entreprise="workExp.entreprise" :date="workExp.date"
                    :desc="workExp.desc"></CardExperience>
            </div>
        </div>
        <h1>School experiences</h1>
        <div class="exps">
            <div v-for="schoolExp in schoolExps" :key="schoolExp.id">
                <CardExperience :title="schoolExp.title" :entreprise="schoolExp.entreprise" :date="schoolExp.date"
                    :desc="schoolExp.desc"></CardExperience>
            </div>
        </div>
    </main>
</template>