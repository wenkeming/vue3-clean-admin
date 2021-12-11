<template>
    <div class="mode-switcher" :class="{dark}" @mouseup="dark = !dark">
        <div class="item light">明亮</div>
        <div class="item dark">暗黑</div>
    </div>
</template>
<script setup>
import {ref, watchEffect} from 'vue';
const dark = ref(false);
watchEffect(() => {
    if (dark.value) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})
</script>
<style lang="less" scoped>
.mode-switcher{
    display: flex;
    height: 30px;
    border-radius: 15px;
    background-color: var(--border);
    user-select: none;
    &:before{
        content: '';
        position: absolute;
        height: 26px;
        left: 2px;
        top: 2px;
        width: calc(50% - 4px);
        background-color: var(--background);
        border-radius: 13px;
        box-shadow: 0 2px 2px var(--shadow);
        transition: 0.8s cubic-bezier(1, 0, 0, 1);
    }
    .item{
        position: relative;
        cursor: default;
        width: 50%;
        text-align: center;
        line-height: 30px;
    }
    .dark{
        color: var(--disabled);
    }
    &.dark{
        &:before{
            left: calc(50% + 2px);
        }
        .dark{
            color: var(--front);
        }
        .light{
            color: var(--disabled);
        }
    }
}
</style>