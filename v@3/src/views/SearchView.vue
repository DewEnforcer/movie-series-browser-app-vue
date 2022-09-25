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
import { useToast } from "vue-toastification";


import { queryMovies } from '../services/movieService';
import { querySeries } from '../services/seriesService';

export default {
    components: { Loader, MovieList },
    data() {
        return {
            isLoading: false,
            isSubmitting: false,
            queryResults: [],
            query: "",
            toast: useToast()
        }
    },
    methods: {
        async handleSubmitQuery() {
            if (this.query.trim().length === 0) return this.toast.error(errTexts.SEARCH_QUERY_EMPTY);

            this.isSubmitting = true;
            this.isLoading = true;

            const indexToType = ["movie", "tv"];


            Promise.all([queryMovies(this.query), querySeries(this.query)]).then(values => {
                values.map((v, i) => {
                    v.data.results.forEach(d => d["watchType"] = indexToType[i]);
                    this.queryResults = [...this.queryResults, ...v.data.results];
                })

                //sort by date to show the most relevant ones
                this.queryResults.sort((a, b) => {
                    const aDate = a.release_date ? a.release_date : a.first_air_date;
                    const bDate = b.release_date ? b.release_date : b.first_air_date;

                    return new Date(bDate).valueOf() - new Date(aDate).valueOf();
                })

                this.isSubmitting = false;
                this.isLoading = false;

                this.query = "";
            }).catch((e) => {
                console.error(e);
                this.toast.error(errTexts.SEARCH_RESULT_FETCH_ERROR)
            });

        }
    }
}
</script>

<style>

</style>