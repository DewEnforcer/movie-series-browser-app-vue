<template>
    <ul>
        <nav-item v-for="item in navItems" :key="item.id" :className="item.className" :path="item.path" :name="item.name" :label="item.label" :icon="item.icon"></nav-item>
    </ul>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
    components: {
        NavItem
    },
    props: ["navItems"]
}
</script>

<style>

</style>