import { PokemonCardInterface } from "./PokemonCardInterface"

export interface DeckInterface{
    name: string
    cardsList: Array<PokemonCardInterface>
}