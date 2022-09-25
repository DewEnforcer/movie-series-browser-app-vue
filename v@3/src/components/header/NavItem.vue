<template>
  <li class="nav-item">
    <router-link class="nav-item-wrapper" :class="parsedClass" :to="{name: name}">
        <i v-if="icon" class="fa" :class="icon"></i>
        {{label}}
    </router-link>
  </li>
</template>

<script>
export default {
    props: ["path", "name", "label", "className", "icon"],
    data() {
        return {
            parsedClass: ""
        }
    },
    created() {
        this.parseElementClass();
    },
    methods: {
        parseElementClass() {
            let cls = "nav-link";
            if (this.className) cls = `${cls}  ${this.className}`;

            this.parsedClass = cls;
        }
    }
}
</script>

<style>

</style>