<template>
    <aside id="aside">
        <div class="aside-wrapper">
            <k-mode-switcher></k-mode-switcher>
        </div>
    </aside>
</template>
<script setup>

</script>
<style lang="less">
#aside{
    background-color: var(--background);
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
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