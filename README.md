# Install and run
npm install
npm run dev

# Open http://localhost:3000
```

### Run Tests
```bash
npm test
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Configuration Files
- TypeScript config
- Tailwind CSS config
- Next.js config
- Jest config
- ESLint config
- PostCSS config

### Testing
- Jest framework configured
- Bulbasaur mock (Grass type)
- Charmander mock (Fire type)
- Squirtle mock (Water type)
- Type assertion tests implemented

## 📁 File Structure

```
search-pokemon-fm-tech/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   ├── PokemonResult.tsx    # Query logic
│   └── globals.css          # Global styles
├── components/               # React components
│   ├── SearchInput.tsx      # Search with URL sync
│   ├── PokemonCard.tsx      # Pokemon display
│   ├── NotFound.tsx         # Error state
│   └── Loading.tsx          # Loading skeleton
├── lib/                     # Utilities
│   ├── apollo-client.ts     # GraphQL client
│   ├── queries.ts           # GraphQL queries
│   └── types.ts             # TypeScript types
├── __tests__/               # Testing
│   ├── mocks.ts             # Test data
│   └── pokemon.test.ts      # Type tests
└── [Documentation & Config files]
```
