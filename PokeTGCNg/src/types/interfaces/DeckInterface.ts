import { PokemonCardInterface } from "./PokemonCardInterface"

export interface DeckInterface{
    name: string
    id: number
    cardsList: Array<PokemonCardInterface>
}