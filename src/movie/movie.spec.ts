import { MovieEntity } from './movie.entity';

describe('Movie', () => {
  it('should be defined', () => {
    expect(new MovieEntity()).toBeDefined();
  });
});
