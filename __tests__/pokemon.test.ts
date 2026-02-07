import { BULBASAUR_MOCK, CHARMANDER_MOCK, SQUIRTLE_MOCK } from './mocks';

describe('Pokemon Type Tests', () => {
  describe('Bulbasaur', () => {
    it('should have Grass type', () => {
      expect(BULBASAUR_MOCK.types).toContain('Grass');
    });

    it('should have correct primary type', () => {
      expect(BULBASAUR_MOCK.types[0]).toBe('Grass');
    });

    it('should have both Grass and Poison types', () => {
      expect(BULBASAUR_MOCK.types).toEqual(['Grass', 'Poison']);
    });
  });

  describe('Charmander', () => {
    it('should have Fire type', () => {
      expect(CHARMANDER_MOCK.types).toContain('Fire');
    });

    it('should have correct primary type', () => {
      expect(CHARMANDER_MOCK.types[0]).toBe('Fire');
    });

    it('should only have Fire type', () => {
      expect(CHARMANDER_MOCK.types).toEqual(['Fire']);
      expect(CHARMANDER_MOCK.types).toHaveLength(1);
    });
  });

  describe('Squirtle', () => {
    it('should have Water type', () => {
      expect(SQUIRTLE_MOCK.types).toContain('Water');
    });

    it('should have correct primary type', () => {
      expect(SQUIRTLE_MOCK.types[0]).toBe('Water');
    });

    it('should only have Water type', () => {
      expect(SQUIRTLE_MOCK.types).toEqual(['Water']);
      expect(SQUIRTLE_MOCK.types).toHaveLength(1);
    });
  });

  describe('All Starter Pokemon', () => {
    it('should all have exactly the correct types', () => {
      expect(BULBASAUR_MOCK.types).toContain('Grass');
      expect(CHARMANDER_MOCK.types).toContain('Fire');
      expect(SQUIRTLE_MOCK.types).toContain('Water');
    });

    it('should have valid evolution chains', () => {
      expect(BULBASAUR_MOCK.evolutions).toBeDefined();
      expect(BULBASAUR_MOCK.evolutions?.length).toBeGreaterThan(0);
      
      expect(CHARMANDER_MOCK.evolutions).toBeDefined();
      expect(CHARMANDER_MOCK.evolutions?.length).toBeGreaterThan(0);
      
      expect(SQUIRTLE_MOCK.evolutions).toBeDefined();
      expect(SQUIRTLE_MOCK.evolutions?.length).toBeGreaterThan(0);
    });

    it('should have attacks defined', () => {
      expect(BULBASAUR_MOCK.attacks.fast.length).toBeGreaterThan(0);
      expect(BULBASAUR_MOCK.attacks.special.length).toBeGreaterThan(0);
      
      expect(CHARMANDER_MOCK.attacks.fast.length).toBeGreaterThan(0);
      expect(CHARMANDER_MOCK.attacks.special.length).toBeGreaterThan(0);
      
      expect(SQUIRTLE_MOCK.attacks.fast.length).toBeGreaterThan(0);
      expect(SQUIRTLE_MOCK.attacks.special.length).toBeGreaterThan(0);
    });
  });
});
