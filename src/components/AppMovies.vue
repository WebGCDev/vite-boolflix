<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    data() {
        return {

        }
    },
    methods: {
        convertVote(vote) {
            // Calcolo il voto da 1 a 5 usando la formula Math.ceil arrotondando sempre per eccesso e restituendo il più piccolo numero intero maggiore o uguale a un determinato numero.
            const convertedVote = Math.ceil((vote / 10) * 5);
            return convertedVote;
        },

    },
    props: {
        dataMovie: Object,
    },
    components: {
        CountryFlag,
    }
}
</script>
<template>
    <div class="movie">
        <div class="img"><img :src="'http://image.tmdb.org/t/p/w342/' + dataMovie.poster_path" alt=""></div>
        <div class="text">
            <div class="title">Titolo: {{ dataMovie.title }}</div>
            <div class="original">Titolo originale: {{ dataMovie.original_title }}</div>
            <div class="language">{{ dataMovie.original_language }}</div>
            <div class="vote">Voto: {{ convertVote(dataMovie.vote_average) }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    display: flex;
}
</style>