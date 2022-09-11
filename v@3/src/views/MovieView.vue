<template>
  <div class="movie-detail-box">
    <button type="button" @click="navigateBack" class="btn-exit-details">Go back</button>
    <div class="movie-detail-text">
        <h1>{{title}}</h1>
        <p>{{overview}}</p>
        <div class="movie-detail-metadata-box">
            <span>Release date: {{release_date}}</span>
            <span>Vote average: {{vote_average}}</span>
            <span>Vote count: {{vote_count}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        navigateBack() {
            this.$router.back();
        }
    }
}
</script>

<style>

</style>