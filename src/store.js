import { reactive } from "vue";

export const store = reactive({
    ArrMovies: [],
    ArrTvSeries: [],
    searchBar: '',
    inputError: false,
});