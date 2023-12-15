<script>
export default {
    props: {
        datatv: Object,
    }
}
</script>

<template>
    <div class="title">{{ datatv.name }}</div>
    <div class="original">{{ datatv.original_name }}</div>
    <div class="language">{{ datatv.original_language }}</div>
    <div class="vote">{{ datatv.vote_average }}</div>
</template>

<style lang="scss" scoped></style>