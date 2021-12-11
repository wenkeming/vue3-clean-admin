<template>
    <div class="aside-menu">
        <div class="item" v-for="item in menu">
            <div class="title" @click="clickHandle(item)" :class="{current: currentName === item.name}">
                <component v-if="item.meta.icon" :is="item.meta.icon" class="icon" size="20" />
                <span>{{item.meta.title}}</span>
                <icon-down v-if="item.children" size="20" class="arrow" />
            </div>
            <template v-if="item.children">
                <k-aside-menu :menu="item.children"></k-aside-menu>
            </template>
        </div>
    </div>
</template>
<script setup>
import {ref, reactive} from 'vue';
import {useRouter, useRoute} from 'vue-router';
const router = useRouter(),
    route = useRoute();
import {Down as iconDown} from '@icon-park/vue-next';
defineProps(['menu']);
const currentName = ref(route.name);
console.log(currentName.value);
function clickHandle({name, path, children = []}) {
    if (!children.length) {
        // console.log(path);
        router.push(path);
    }
    currentName.value = name === currentName.value ? '' : name;
}
</script>
<style lang="less" scoped>
.aside-menu{
    & .aside-menu{
        height: 0;
        overflow: hidden;
        .item{
            padding-left: 40px;
        }
        .title{
            &.current{
                background: none;
                box-shadow: none;
            }
        }
    }
}
.item{
    margin-bottom: 10px;
}
.title{
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: var(--radius);
    position: relative;
    cursor: pointer;
    &.current{
        background-color: var(--hover-background);
        box-shadow: 0 2px 0 2px var(--shadow);
        & + .aside-menu{
            height: auto;
            padding-top: 10px;
        }
        .arrow{
            transform: rotate(180deg);
        }
    }
    &:hover{
        color: var(--primary);
    }
}
.icon{
    margin: 0 10px;
    height: 20px;
    color: var(--disabled);
}
.arrow{
    position: absolute;
    top: 50%;
    right: 8px;
    height: 20px;
    margin-top: -10px;
    color: var(--disabled);
    transition: transform 0.5s;
}
</style>