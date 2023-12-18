<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    methods: {
        convertVote(vote) {
            // Calcolo il voto da 1 a 5 usando la formula Math.ceil arrotondando sempre per eccesso e restituendo il più piccolo numero intero maggiore o uguale a un determinato numero.
            const convertedVote = Math.ceil((vote / 10) * 5);
            return convertedVote;
        },
    },
    components: {
        LangFlag,
    },
    props: {
        dataMovie: Object,
    },
};
</script>
<template>
    <div class="movie">
        <img :src="'http://image.tmdb.org/t/p/w342/' + dataMovie.poster_path" alt="">
        <div class="text">
            <div class="title">Titolo: {{ dataMovie.title }}</div>
            <div class="original" v-show="dataMovie.original_title !== dataMovie.title">Titolo originale: {{
                dataMovie.original_title }}</div>
            <div class="lang">
                <span>Lingua originale: </span>
                <lang-flag :iso='dataMovie.original_language' />
            </div>
            <span>Voto:</span>
            <font-awesome-icon v-for="star in convertVote(dataMovie.vote_average)" :key="star" :icon="['fas', 'star']"
                class="star" />
            <template v-for="star in 5 - convertVote(dataMovie.vote_average)">
                <font-awesome-icon :key="star" :icon="['far', 'star']" v-if="convertVote(dataMovie.vote_average) < 5"
                    class="star" />
            </template>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    border: 1px solid black;
    width: 342px;
    margin: 1rem;

    .star {
        color: red;
    }
}
</style>