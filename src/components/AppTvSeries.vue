<script>
import LangFlag from 'vue-lang-code-flags'
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
        datatv: Object,
    },
};
</script>

<template>
    <div class="serie">
        <div class="image_container">
            <img v-if="datatv.poster_path" :src="'http://image.tmdb.org/t/p/w342/' + datatv.poster_path"
                :alt="datatv.poster_path">
            <img class="not_av" v-else
                src="https://www.prolococisanobg.it/wp-content/uploads/2017/10/Non-disponibile-_04.jpg"
                alt="Img Non Disponibile">
        </div>
        <div class="text">
            <div class="title">Titolo: {{ datatv.name }}</div>
            <div class="original" v-show="datatv.original_title !== datatv.title">Titolo originale: {{ datatv.original_name
            }}</div>
            <div class="lang">
                <span>Lingua originale: </span>
                <lang-flag :iso='datatv.original_language' />
            </div>
            <span>Voto: </span>
            <font-awesome-icon v-for="star in convertVote(datatv.vote_average)" :key="star" :icon="['fas', 'star']"
                class="star" />
            <template v-for="star in 5 - convertVote(datatv.vote_average)">
                <font-awesome-icon :key="star" :icon="['far', 'star']" v-if="convertVote(datatv.vote_average) < 5"
                    class="star" />
            </template>
            <div class="overview">Overview: {{ datatv.overview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.serie {
    position: relative;
    width: 345px;
    height: 520px;
    margin: 1rem;

    .image_container {
        img {
            width: 345px;
            height: 520px;
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

        .star {
            color: rgb(252, 0, 0);
        }
    }
}

.serie:hover .text {
    opacity: 1;
}

.serie .image_container {
    position: relative;
}

.serie .image_container img {
    transition: opacity 2.0s ease;
}

.serie:hover .image_container img {
    opacity: 0;
}
</style>