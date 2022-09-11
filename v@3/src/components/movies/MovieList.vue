<template>
    <div class="movie-list-box">
        <h2 v-if="displayUI">{{title}}</h2>
        <div class="movie-list-content">
            <movie-display v-for="m in displayedResults" :key="m.id" :imgSrc="m.poster_path"></movie-display>
        </div>
        <button v-if="displayUI" class="movie_list_btn movie_list_goback" :disabled="page === 1" @click="() => handlePageChange(-1)">&#60;</button>
        <button v-if="displayUI" class="movie_list_btn movie_list_goforward" :disabled="onLastPage" @click="() => handlePageChange(1)">&#62;</button>
    </div>
</template>

<script>
import MovieDisplay from './MovieDisplay.vue'
export default {
    components: { MovieDisplay },
    data() {
        return {
            START_PAGE: 1,
            MAX_LIST_RESULTS: 8,
            displayUI: false,
            page: null,
            isOnLastPage: false,
            displayedResults: []
        }
    },
    props: {
        title: String,
        data: Array,
        titleWithoutResults: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        data() {
            this.changeDisplayedResults();
        },
        page() {
            this.changeDisplayedResults();
        }
    },
    created() {
        if (!this.page) this.page = this.START_PAGE;

        this.changeDisplayedResults();
    },
    mounted() {
        this.setIsUIDisplayed();
    },
    methods: {
        setIsUIDisplayed() {
            this.displayUI = this.title && (this.titleWithoutResults || this.data.length > 0);
        },
        onPageChange(pageWay) {
            const newPage = this.page + pageWay;

            if (newPage < this.START_PAGE) return; //prevent going to lower page than 1 (the start page)
            if (pageWay === 1 && this.isOnLastPage) return; //check whether user wants to see next page of results and prevent going further if the app hit the last page
            
            if (this.isOnLastPage) this.isOnLastPage = false; //if the above statement proves to be false, its only logical we arent on last page yet

            this.page = newPage;//set the page to update pagination results above
        },
        changeDisplayedResults() {
            let start = (this.page - 1) * this.MAX_LIST_RESULTS; //calculate the splice start
        
            if (start + this.MAX_LIST_RESULTS > this.data.length) { //check whether the splicing wouldnt overflow the max results, if so, change the start value to display the last 8 (on default) results available.
                start = this.data.length - this.MAX_LIST_RESULTS;
                this.isOnLastPage = true; //it is obvious we are on the "last page" of the results if we would overflow, set it to true
            } else this.isOnLastPage = false; //prevents component from being stuck on last page when data array is empty(waiting for http request data)

            const items = [...this.data].splice(start, this.MAX_LIST_RESULTS); //now create new array, we dont want to manipulate the passed prop and splice it to display the wanted paginated results
            this.displayedResults = items;//now set the items to be displayed in the component
        }
    }
}
</script>

<style>

</style>