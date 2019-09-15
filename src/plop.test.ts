import { Biome } from './tet';

describe('hello', () => {
  it('should load', () => {
    const a = Biome['BEACH'];
    expect(a).toBe(1);
  });
});
