'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, FormEvent, memo } from 'react';

const SearchInput = memo(() => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState('');

  // Sync input with URL query parameter
  useEffect(() => {
    const nameParam = searchParams.get('name');
    if (nameParam) {
      setSearchValue(nameParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/?name=${encodeURIComponent(searchValue.trim().toLowerCase())}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a Pokémon (e.g., Pikachu, Charizard)..."
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-500"
          aria-label="Search Pokémon"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!searchValue.trim()}
        >
          Search
        </button>
      </form>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
