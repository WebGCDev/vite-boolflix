<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        emitSearchBar() {
            this.$emit('performSearch');
        }
    }
};
</script>

<template>
    <div class="header">
        <h1>BOOLFLIX</h1>
        <div class="search">
            <input type="text" v-model="store.searchBar" @keyup.enter="emitSearchBar">
            <button @click="emitSearchBar">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>