<template>
    <aside id="aside">
        <div class="aside-wrapper">
            <div class="logo"></div>
            <k-aside-menu :menu="menu"></k-aside-menu>
            <k-mode-switcher></k-mode-switcher>
        </div>
    </aside>
</template>
<script setup>
import {useRouter, useRoute} from 'vue-router';
const router = useRouter(),
    route = useRoute();
const menu = router.options.routes.filter(item => (item.meta.menu))
</script>
<style lang="less">
#aside{
    background-color: var(--background);
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    .logo{
        width: 60px;
        height: 60px;
        margin: 0;
    }
    .aside-wrapper{
        padding: 18px;
        box-sizing: border-box;
        position: relative;
        height: 100%;
    }
    .mode-switcher{
        position: absolute;
        bottom: 18px;
        left: 18px;
        right: 18px;
    }
}
</style>