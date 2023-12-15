<script>
export default {
    props: {
        dataMovie: Object,
    }
}
</script>
<template>
    <div class="title">{{ dataMovie.title }}</div>
    <div class="original">{{ dataMovie.original_title }}</div>
    <div class="language">{{ dataMovie.original_language }}</div>
    <div class="vote">{{ dataMovie.vote_average }}</div>
</template>

<style lang="scss" scoped></style>