<template>
  <div @click="handleMovieClick" :style="{backgroundImage: `url('http://image.tmdb.org/t/p/w342/${imgSrc}')`}" class="movie-display-box">

  </div>
</template>

<script>
export default {
    props: ["imgSrc", "data"],
    methods: {
        handleMovieClick() {
            this.$router.push({name: "Movie", params: {id: this.data.id}});
        }
    }
}
</script>

<style>

</style>