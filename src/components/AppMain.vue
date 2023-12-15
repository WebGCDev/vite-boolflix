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
        <div class="movies">
            <app-movies v-for="movie in store.ArrMovies" :key="movie.id" :dataMovie="movie" />
        </div>

        <div class="tv-series">
            <app-tv-series v-for="tvserie in store.ArrTvSeries" :key="tvserie.id" :datatv="tvserie" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
