<template>
    <div class="search box">
        <h1>Search</h1>
        <div class="search-bar-wrapper">
            <input class="search-bar-input" type="text" placeholder="Enter name of a Movie/TV show you are looking for...">
            <button :disabled="isSubmitting" type="button">Submit</button>
        </div>
        <loader v-if="isLoading"></loader>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import errTexts from "../texts/errorTexts";

export default {
    components: { Loader },
    data() {
        return {
            isLoading: false,
            isSubmitting: false
        }
    }
}
</script>

<style>

</style>