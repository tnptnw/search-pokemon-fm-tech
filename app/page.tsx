'use client';

import { Suspense, useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { getClient } from '@/lib/apollo-client';
import SearchInput from '@/components/SearchInput';
import PokemonResult from './PokemonResult';
import Loading from '@/components/Loading';

export default function Home() {
  const [client, setClient] = useState<ReturnType<typeof getClient> | null>(null);

  useEffect(() => {
    setClient(getClient());
  }, []);

  if (!client) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-3">
              Pokémon Search
            </h1>
            <p className="text-gray-600 text-lg">
              Discover detailed information about your favorite Pokémon
            </p>
          </header>
          <Loading />
        </div>
      </main>
    );
  }

  return (
    <ApolloProvider client={client}>
      <main className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-3">
              Pokémon Search
            </h1>
            <p className="text-gray-600 text-lg">
              Discover detailed information about your favorite Pokémon
            </p>
          </header>

          <Suspense fallback={<Loading />}>
            <SearchInput />
          </Suspense>

          <Suspense fallback={<Loading />}>
            <PokemonResult />
          </Suspense>
        </div>
      </main>
    </ApolloProvider>
  );
}
