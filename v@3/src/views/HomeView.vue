<template>
  <div class="landing-page-box">
    <h1>{{config.app_name}}</h1>
    <loader v-if="isLoading"></loader>
    <movie-list v-for="mData in movieData" :key="mData.id" :title="mData.title" :data="mData.data"></movie-list>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import MovieList from '../components/movies/MovieList.vue';

import { getMovieByGenreId, getPopularMovies } from '../services/movieService';
import { getPopularSeries } from '../services/seriesService';

import config from "../config/default"
import errTexts from "../texts/errorTexts";
import { useToast } from 'vue-toastification';

export default {
  components: { MovieList, Loader },
  data() {
    return {
      movieData: {
        popularMovies: {id: 1, title: "Popular Movies", data: []},
        popularSeries: {id: 2, title: "Popular Shows", data: []},
        family: {id: 3, title: "Family", data: []},
        documentary: {id: 4, title: "Documentary", data: []},
      },
      isLoading: false,
      config: config,
      toast: useToast()
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const {family, documentary} = this.config.genre_ids;
      const indexToKey = ["popularMovies", "popularSeries", "family", "documentary"];
      const indexToType = ["movie", "tv", "movie", "movie"];


      Promise.all([getPopularMovies(), getPopularSeries(), getMovieByGenreId(family), getMovieByGenreId(documentary)]).then(values => { 
        values.forEach((val, i) => {
          this.movieData[indexToKey[i]].data = [...val.data.results];
          this.movieData[indexToKey[i]].data.forEach(d => d["watchType"] = indexToType[i]);
        })
      }).catch(err => {
          console.error(err);
          this.toast.error(errTexts.LANDING_PAGE_FETCH_ERR);
      })
    }
  }
}
</script>


<style>

</style>