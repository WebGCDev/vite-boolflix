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
    background-color: black;

    h1 {
        color: #DC1A28;
        text-align: center;
        font-size: 3rem;
        font-family: 'Noto Sans', sans-serif;
    }

    img {
        width: 100%;
    }

    .movies {
        display: flex;
        overflow: auto;
        max-width: 1000px;
        margin: auto;

        &::-webkit-scrollbar {
            background: black;
            height: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: #DC1A28;
            border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: red;
        }
    }

    .tv-series {
        display: flex;
        overflow: auto;
        max-width: 1000px;
        margin: auto;

        &::-webkit-scrollbar {
            background: black;
            height: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: #DC1A28;
            border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: red;
        }
    }
}
</style>