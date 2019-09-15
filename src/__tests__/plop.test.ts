import { Biome } from '../types/tet';

describe('hello', () => {
  it('should load', () => {
    const a = Biome['BEACH'];
    expect(a).toBe(1);
  });
});
