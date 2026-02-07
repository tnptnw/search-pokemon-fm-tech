'use client';

import { memo } from 'react';

interface NotFoundProps {
  searchTerm: string;
}

const NotFound = memo(({ searchTerm }: NotFoundProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Pokémon Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          No Pokémon found with the name <span className="font-semibold">&ldquo;{searchTerm}&rdquo;</span>
        </p>
        <p className="text-sm text-gray-500">
          Try searching for another Pokémon. Make sure the spelling is correct!
        </p>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Popular searches:</span> Pikachu, Charizard, Mewtwo, Bulbasaur, Squirtle
          </p>
        </div>
      </div>
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
