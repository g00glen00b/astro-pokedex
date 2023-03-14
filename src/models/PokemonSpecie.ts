export interface PokemonSpecie {
  id?: number;
  pokemon_v2_pokemonspeciesnames?: [PokemonSpeciesNameLocale];
  pokemon_v2_pokemons?: [Pokemon];
}

export interface PokemonSpecie {
  id?: number;
  pokemon_v2_pokemonspeciesnames?: [PokemonSpeciesNameLocale];
  pokemon_v2_pokemons?: [Pokemon];
}

export interface PokemonSpeciesNameLocale {
  name?: string;
}

export interface Pokemon {
  id?: number;
  pokemon_v2_pokemontypes?: PokemonTypeWrapper[];
  pokemon_v2_pokemonforms?: PokemonForm[];
  pokemon_v2_pokemonstats?: PokemonStatValue[];
}

export interface PokemonTypeWrapper {
  pokemon_v2_type?: PokemonType;
}

export interface PokemonType {
  name?: string;
  pokemon_v2_typenames?: PokemonTypeLocale[];
}

export interface PokemonTypeLocale {
  name?: string;
}

export interface PokemonForm {
  name?: string;
  pokemon_v2_pokemonformnames?: PokemonFormLocale[];
}

export interface PokemonFormLocale {
  name?: string;
}

export interface PokemonStatValue {
  base_stat?: number;
  pokemon_v2_stat?: PokemonStat;
}

export interface PokemonStat {
  name?: string;
  pokemon_v2_statnames?: PokemonStatLocale[];
}

export interface PokemonStatLocale {
  name?: string;
}

export interface PokemonSpecieAggregate {
  aggregate: Aggregate;
}

export interface Aggregate {
  count?: number;
}

export interface PokemonSpecieQueryResult {
  pokemon_v2_pokemonspecies?: PokemonSpecie[];
  pokemon_v2_pokemonspecies_aggregate?: PokemonSpecieAggregate;
}