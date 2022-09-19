<template>
  <li class="nav-item">
    <router-link :class="parsedClass" :to="path">{{label}}</router-link>
  </li>
</template>

<script>
export default {
    props: ["path", "label", "className"],
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