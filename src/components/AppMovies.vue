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
        <div class="image_container">
            <img v-if="dataMovie.poster_path" :src="'http://image.tmdb.org/t/p/w342/' + dataMovie.poster_path"
                :alt="dataMovie.poster_path">
            <img class="not_av" v-else
                src="https://www.prolococisanobg.it/wp-content/uploads/2017/10/Non-disponibile-_04.jpg"
                alt="Img Non Disponibile">
        </div>
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
            <img :src="'http://image.tmdb.org/t/p/w342/' + dataMovie.backdrop_path" alt="">
            <div class="overview">Overview: {{ dataMovie.overview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    position: relative;
    width: 345px;
    margin: 1rem;
    height: 520px;

    .image_container {
        border-radius: 2rem;
        border: 1px solid red;

        img {
            width: 345px;
            height: 520px;
            border-radius: 2rem;
        }
    }

    .text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: rgba(255, 255, 255, 0.9);
        transition: opacity 2.0s ease;
        overflow-y: auto;
        border-radius: 2rem;

        .star {
            color: red;
        }
    }
}

.movie:hover .text {
    opacity: 1;
}

.movie .image_container {
    position: relative;
}

.movie .image_container img {
    transition: opacity 2.0s ease;
}

.movie:hover .image_container img {
    opacity: 0;
}
</style>