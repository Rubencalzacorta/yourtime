import { get } from "lodash"

export const isSearchLoading = state => get(state, "search.isLoading")
//dentro del json de la respuesta hay que seleccionar donde esta informacion que buscan(search.movieResults.Search)
export const movieResults = state => get(state, "search.movieResults.Search")

export const movieResult = state => get(state, "search.movieResult")