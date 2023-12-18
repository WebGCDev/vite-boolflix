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
        <img src="../assets/logoboolflix.png" alt="">
        <div class="search">
            <input type="text" v-model="store.searchBar" @keyup.enter="emitSearchBar">
            <button @click="emitSearchBar">Cerca</button>
            <div>
                <small v-show="store.inputError" style="color: red;">Digita un titolo per avviare la ricerca</small>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    background-color: black;
    height: 6rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 15%;
    }

    .search {
        button {
            padding: .3rem;
            color: black;
            background-color: #DC1A28;
            margin-left: 1rem;
        }
    }
}
</style>