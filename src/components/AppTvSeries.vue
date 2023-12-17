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
        <div class="title">{{ datatv.name }}</div>
        <div class="original">{{ datatv.original_name }}</div>
        <div class="language">{{ datatv.original_language }}</div>
        <div class="vote">{{ datatv.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped></style>