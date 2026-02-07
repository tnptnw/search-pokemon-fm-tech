'use client';

import { Pokemon } from '@/lib/types';
import { memo } from 'react';
import { useRouter } from 'next/navigation';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const TYPE_COLORS: Record<string, string> = {
  Grass: 'bg-pokemon-grass',
  Fire: 'bg-pokemon-fire',
  Water: 'bg-pokemon-water',
  Normal: 'bg-pokemon-normal',
  Electric: 'bg-pokemon-electric',
  Ice: 'bg-pokemon-ice',
  Fighting: 'bg-pokemon-fighting',
  Poison: 'bg-pokemon-poison',
  Ground: 'bg-pokemon-ground',
  Flying: 'bg-pokemon-flying',
  Psychic: 'bg-pokemon-psychic',
  Bug: 'bg-pokemon-bug',
  Rock: 'bg-pokemon-rock',
  Ghost: 'bg-pokemon-ghost',
  Dragon: 'bg-pokemon-dragon',
  Dark: 'bg-pokemon-dark',
  Steel: 'bg-pokemon-steel',
  Fairy: 'bg-pokemon-fairy',
};

const PokemonCard = memo(({ pokemon }: PokemonCardProps) => {
  const router = useRouter();

  const handleEvolutionClick = (evolutionName: string) => {
    // Save current pokemon to localStorage for better UX
    try {
      const recentSearches = JSON.parse(localStorage.getItem('recentPokemon') || '[]');
      const updated = [
        pokemon.name,
        ...recentSearches.filter((name: string) => name !== pokemon.name)
      ].slice(0, 5);
      localStorage.setItem('recentPokemon', JSON.stringify(updated));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }

    router.push(`/?name=${encodeURIComponent(evolutionName.toLowerCase())}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{pokemon.name}</h1>
            <p className="text-xl opacity-90">#{pokemon.number}</p>
            <p className="text-lg opacity-80 mt-1">{pokemon.classification}</p>
          </div>
          <div className="text-right">
            <div className="flex flex-wrap gap-2 justify-end">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className={`${TYPE_COLORS[type] || 'bg-gray-500'} px-3 py-1 rounded-full text-sm font-semibold text-white`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Image Section */}
        <div className="flex justify-center items-start">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Stats Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Physical Stats</h3>
            <div className="space-y-1 text-gray-600">
              <p><span className="font-medium">Height:</span> {pokemon.height.minimum} - {pokemon.height.maximum}</p>
              <p><span className="font-medium">Weight:</span> {pokemon.weight.minimum} - {pokemon.weight.maximum}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Battle Stats</h3>
            <div className="space-y-1 text-gray-600">
              <p><span className="font-medium">Max CP:</span> {pokemon.maxCP}</p>
              <p><span className="font-medium">Max HP:</span> {pokemon.maxHP}</p>
              <p><span className="font-medium">Flee Rate:</span> {pokemon.fleeRate}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Resistances</h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.resistant.map((type) => (
                <span
                  key={type}
                  className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Weaknesses</h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.weaknesses.map((type) => (
                <span
                  key={type}
                  className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Attacks Section */}
      <div className="p-6 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Attacks</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Fast Attacks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Fast Attacks</h3>
            <div className="space-y-2">
              {pokemon.attacks.fast.map((attack, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-800">{attack.name}</span>
                    <span className="text-sm font-semibold text-blue-600">{attack.damage}</span>
                  </div>
                  <span className="text-sm text-gray-600">{attack.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Attacks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Special Attacks</h3>
            <div className="space-y-2">
              {pokemon.attacks.special.map((attack, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-800">{attack.name}</span>
                    <span className="text-sm font-semibold text-purple-600">{attack.damage}</span>
                  </div>
                  <span className="text-sm text-gray-600">{attack.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Evolutions Section */}
      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Evolutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemon.evolutions.map((evolution) => (
              <button
                key={evolution.id}
                onClick={() => handleEvolutionClick(evolution.name)}
                className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
              >
                <img
                  src={evolution.image}
                  alt={evolution.name}
                  className="w-24 h-24 mx-auto object-contain"
                />
                <p className="text-center mt-2 font-semibold text-gray-800">{evolution.name}</p>
                <p className="text-center text-sm text-gray-500">#{evolution.number}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

PokemonCard.displayName = 'PokemonCard';

export default PokemonCard;
