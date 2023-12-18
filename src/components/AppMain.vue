<script>
import AppMovies from './AppMovies.vue';
import AppTvSeries from './AppTvSeries.vue';
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppMovies,
        AppTvSeries,
    }
}
</script>

<template>
    <div class="contents">
        <h1>Movies</h1>
        <div class="movies">
            <app-movies v-for="movie in store.ArrMovies" :key="movie.id" :dataMovie="movie" />
        </div>
        <h1>Tv-Series</h1>
        <div class="tv-series">
            <app-tv-series v-for="tvserie in store.ArrTvSeries" :key="tvserie.id" :datatv="tvserie" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contents {
    background-color: #7D7B7A;
    text-align: center;

    .movies {
        display: flex;
        overflow: auto;
        max-width: 1000px;
        margin: auto;
    }

    .tv-series {
        display: flex;
        overflow: auto;
        max-width: 1000px;
        margin: auto;
    }
}
</style>