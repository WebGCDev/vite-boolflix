<script>
import AppHeader from "./components/AppHeader.vue"
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue';
import AppMovies from './components/AppMovies.vue';
import AppTvSeries from './components/AppTvSeries.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppMovies,
        AppTvSeries,
    },
    methods: {
        requestMoviesFromApi() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '8e0b7d9df7b8cce9833d9b0e472dfe7e',
                    query: this.store.searchBar,
                }
            })
                .then((response) => (this.store.ArrMovies = response.data.results));
            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: '8e0b7d9df7b8cce9833d9b0e472dfe7e',
                    query: this.store.searchBar,
                }
            })
                .then((response) => (this.store.ArrTvSeries = response.data.results));
        },
    },
    created() {
        axios.get('https://api.themoviedb.org/3/movie/top_rated', {
            params: {
                api_key: '8f859e941622d4303bfe33f13f9df12c',
            }
        })
            .then((response) => (this.store.ArrMovies = response.data.results));
        axios.get('https://api.themoviedb.org/3/tv/top_rated', {
            params: {
                api_key: '8f859e941622d4303bfe33f13f9df12c',
            }
        })
            .then((response) => (this.store.ArrTvSeries = response.data.results));
    }
}
</script>

<template>
    <app-header @performSearch="requestMoviesFromApi" />
    <app-main />
</template>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
