'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '@/lib/queries';
import { Pokemon } from '@/lib/types';
import PokemonCard from '@/components/PokemonCard';
import NotFound from '@/components/NotFound';
import Loading from '@/components/Loading';
import { memo, useEffect } from 'react';

const PokemonResult = memo(() => {
  const searchParams = useSearchParams();
  const pokemonName = searchParams.get('name');

  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(
    GET_POKEMON_BY_NAME,
    {
      variables: { name: pokemonName },
      skip: !pokemonName,
      fetchPolicy: 'cache-and-network',
    }
  );

  // Save successful searches to localStorage
  useEffect(() => {
    if (data?.pokemon && pokemonName) {
      try {
        const recentSearches = JSON.parse(localStorage.getItem('recentPokemon') || '[]');
        const updated = [
          pokemonName,
          ...recentSearches.filter((name: string) => name !== pokemonName)
        ].slice(0, 10);
        localStorage.setItem('recentPokemon', JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save to localStorage:', error);
      }
    }
  }, [data, pokemonName]);

  if (!pokemonName) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to Pokémon Search!
          </h2>
          <p className="text-gray-600">
            Start by searching for a Pokémon using the search bar above.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error || !data?.pokemon) {
    return <NotFound searchTerm={pokemonName} />;
  }

  return <PokemonCard pokemon={data.pokemon} />;
});

PokemonResult.displayName = 'PokemonResult';

export default PokemonResult;
