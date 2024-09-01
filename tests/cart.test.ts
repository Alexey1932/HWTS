import Cart from '../src/cart';
import Book from '../src/book';
import Movie from '../src/movie';

describe('Cart', () => {
	let cart: Cart;

	beforeEach(() => {
		cart = new Cart();
	});

	it('should add items to the cart', () => {
		const book = new Book(101, 'War and Peace', 'Leo Tolstoy', 1000, 1225);
		const movie = new Movie(
			102,
			'The Avengers',
			1500,
			2012,
			'USA',
			'Avengers Assemble!',
			['sci-fi', 'action', 'fantasy', 'adventure'],
			137
		);

		cart.add(book);
		cart.add(movie);

		expect(cart.items.length).toBe(2);
		expect(cart.items).toContain(book);
		expect(cart.items).toContain(movie);
	});

	it('should calculate the total cost without discount', () => {
		const book = new Book(101, 'War and Peace', 'Leo Tolstoy', 1000, 1225);
		const movie = new Movie(
			102,
			'The Avengers',
			1500,
			2012,
			'USA',
			'Avengers Assemble!',
			['sci-fi', 'action', 'fantasy', 'adventure'],
			137
		);

		cart.add(book);
		cart.add(movie);

		expect(cart.totalCost()).toBe(2500);
	});

	it('should calculate the total cost with discount', () => {
		const book = new Book(101, 'War and Peace', 'Leo Tolstoy', 1000, 1225);
		const movie = new Movie(
			102,
			'The Avengers',
			1500,
			2012,
			'USA',
			'Avengers Assemble!',
			['sci-fi', 'action', 'fantasy', 'adventure'],
			137
		);

		cart.add(book);
		cart.add(movie);

		expect(cart.totalCostWithDiscount(10)).toBe(2250);
	});

	it('should remove item from the cart by id', () => {
		const book = new Book(101, 'War and Peace', 'Leo Tolstoy', 1000, 1225);
		const movie = new Movie(
			102,
			'The Avengers',
			1500,
			2012,
			'USA',
			'Avengers Assemble!',
			['sci-fi', 'action', 'fantasy', 'adventure'],
			137
		);

		cart.add(book);
		cart.add(movie);

		cart.removeItem(101);

		expect(cart.items.length).toBe(1);
		expect(cart.items).not.toContain(book);
		expect(cart.items).toContain(movie);
	});

	it('should handle removing an item that does not exist', () => {
		const book = new Book(101, 'War and Peace', 'Leo Tolstoy', 1000, 1225);
		cart.add(book);

		cart.removeItem(999);

		expect(cart.items.length).toBe(1);
		expect(cart.items).toContain(book);
	});
});