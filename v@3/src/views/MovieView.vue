<template>
  <div class="movie-detail-box">
    <button type="button" @click="navigateBack" class="btn-exit-details"> <i class="fa fa-arrow-left"></i> Go back</button>
    <div class="movie-detail-text">
        <h1>{{data.name ? data.name : data.title}}</h1>
        <p>{{data.overview}}</p>
        <div class="movie-detail-metadata-box">
            <span v-if="data.release_date">Release date: {{data.release_date}}</span>
            <span v-if="data.first_air_date">First aired on: {{data.first_air_date}}</span>
            <span>Vote average: {{data.vote_average}}</span>
            <span>Vote count: {{data.vote_count}}</span>
        </div>
    </div>
    <div class="movie-detail-img" :style="`background-image: url('http://image.tmdb.org/t/p/w342${data.poster_path}')`">
    </div>
  </div>
</template>

<script>
import { searchMovieById } from '../services/movieService';
import { searchSeriesById } from '../services/seriesService';
export default {
    props: ["id"],
    data() {
        return {
            data: null,
        }
    },
    methods: {
        navigateBack() {
            this.$router.back();
        },
        async getData() {
            const [watchType, id] = this.id.split("_");

            const {data} = watchType === "movie" ? await searchMovieById(id) : await searchSeriesById(id);

            this.data = data;
        }
    },
    created() {
        if (!this.id) return this.$router.push({name: "Home"});
        this.getData();
    }
}
</script>

<style>

</style>