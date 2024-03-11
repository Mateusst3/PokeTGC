import { PokemonCardInterface } from "./PokemonCardInterface";

export interface PokemonCardsFetchDataInterface{
    count: number;
    data: Array<PokemonCardInterface>;
    page: number
    pageSize: number
    totalCount: number
}