<script>
export default {
    props: {
        dataMovie: Object,
    }
}
</script>
<template>
    <div class="movie">
        <div class="img"><img :src="'http://image.tmdb.org/t/p/w342/' + dataMovie.poster_path" alt=""></div>
        <div class="text">
            <div class="title">{{ dataMovie.title }}</div>
            <div class="original">{{ dataMovie.original_title }}</div>
            <div class="language">{{ dataMovie.original_language }}</div>
            <div class="vote">{{ dataMovie.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    display: flex;
}
</style>