<template>
    <ul>
        <nav-item v-for="item in navItems" :key="item.id" :className="item.className" :path="item.path" :label="item.label"></nav-item>
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