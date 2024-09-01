import Movie from '../src/movie';

describe('Movie', () => {
	it('should create a movie object with given parameters', () => {
		const movie = new Movie(
			101,
			'The Avengers',
			1500,
			2012,
			'USA',
			'Avengers Assemble!',
			['sci-fi', 'action', 'fantasy', 'adventure'],
			137
		);

		expect(movie.id).toBe(101);
		expect(movie.name).toBe('The Avengers');
		expect(movie.price).toBe(1500);
		expect(movie.year).toBe(2012);
		expect(movie.country).toBe('USA');
		expect(movie.slogan).toBe('Avengers Assemble!');
		expect(movie.genre).toEqual(['sci-fi', 'action', 'fantasy', 'adventure']);
		expect(movie.duration).toBe(137);
	});
});