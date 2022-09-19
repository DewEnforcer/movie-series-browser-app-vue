<template>
    <div class="search-box">
        <h1>Search</h1>
        <div class="search-bar-wrapper">
            <form>
                <input v-model="query" class="search-bar-input" type="text" placeholder="Enter name of a Movie/TV show you are looking for...">
                <button @click="handleSubmitQuery" :disabled="isSubmitting" type="button">Submit</button>
            </form>
        </div>
        <loader v-if="isLoading"></loader>
        <movie-list :titleWithoutResults="false" :title="'Search results'" :data="queryResults"></movie-list>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import MovieList from '../components/movies/MovieList.vue';
import errTexts from "../texts/errorTexts";

import { queryMovies } from '../services/movieService';

export default {
    components: { Loader, MovieList },
    data() {
        return {
            isLoading: false,
            isSubmitting: false,
            queryResults: [],
            query: ""
        }
    },
    methods: {
        async handleSubmitQuery() {
            if (this.query.trim().length === 0) return //this.$vToastify.error(errTexts.SEARCH_QUERY_EMPTY);

            this.isSubmitting = true;
            this.isLoading = true;

            const {data: resData, status} = await queryMovies(this.query);

            this.isSubmitting = false;
            this.isLoading = false;

            if (status !== 200) { // without the return, the form would get reset although the user got no results resulting in poor user experience
                console.error("Failed to fetch query results", status, data);
                //this.$vToastify.error(errTexts.SEARCH_RESULT_FETCH_ERROR);
                return;
            }
        
            this.queryResults = resData.results;
            this.query = "";
        }
    }
}
</script>

<style>

</style>