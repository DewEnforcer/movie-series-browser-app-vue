<template>
  <div class="header">
    <navigation :navItems="navItems"></navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import { useRoute } from 'vue-router';

export default {
  components: { Navigation },
    props: {
        navItems: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            visible: true
        }
    },
    created() {
        this.setRender();
    },
    methods: {
        setRender() {
            if (!useRoute().name) return;
            return (this.visible = !useRoute().name.includes("play"));
        }
    }
}
</script>

<style>

</style>