<script>
export default {
    props: {
        datatv: Object,
    }
}
</script>

<template>
    <div class="img"><img :src="'http://image.tmdb.org/t/p/w342/' + datatv.poster_path" alt=""></div>
    <div class="text">
        <div class="title">Titolo: {{ datatv.name }}</div>
        <div class="original">Titolo originale: {{ datatv.original_name }}</div>
        <div class="language">Lingua: {{ datatv.original_language }}</div>
        <div class="vote">Voto: {{ datatv.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped></style>