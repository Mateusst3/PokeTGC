import { CardmarketPricesInterface } from './CardmarketPriceInterface';

export interface PokemonCardInterface {
  abilities: Array<{ name: string; text: string; type: string }>;
  artist: string;
  attacks: Array<{
    convertedEnergyCost: number;
    cost: Array<string>;
    damage: string;
    name: string;
    text: string;
  }>;
  cardmarket: {
    prices: CardmarketPricesInterface;
    updatedAt: string;
    url: string;
  };
  convertedRetreatCost: number;
  evolvesFrom: string;
  flavorText: string;
  hp: string;
  id: string;
  images: {
    large: string;
    small: string;
  };
  legalities: {
    unlimited: string;
  };
  level: string;
  name: string;
  nationalPokedexNumbers: Array<number>;
  number: string;
  rarity: string;
  resistances: Array<{ type: string; value: string }>;
  retreatCost: Array<string>;
  set: {
    id: string;
    images: {
      logo: string;
      symbol: string;
    };
    legalities: {
      unlimited: string;
    };
    name: string;
    printedTotal: number;
    ptcgoCode: string;
    releaseDate: string;
    series: string;
    total: number;
    updatedAt: string;
  };
  subtypes: Array<string>;
  supertype: string;
  tcgplayer: {
    prices: {
      holofoil: {
        directLow: number;
        high: number;
        low: number;
        market: number;
        mid: number;
      };
      reverseHolofoil: {
        directLow: number;
        high: number;
        low: number;
        market: number;
        mid: number;
      };
      updatedAt: string;
      url: string;
    };
  };
  types: Array<string>;
  weaknesses: Array<{ type: string; value: string }>;
}
