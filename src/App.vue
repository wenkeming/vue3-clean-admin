<template>
    <Header />
    <section id="main">
        <router-view />
    </section>
    <Aside />
</template>
<script setup>
import Header from '@/components/frame/header.vue'
import Aside from '@/components/frame/aside.vue'
</script>