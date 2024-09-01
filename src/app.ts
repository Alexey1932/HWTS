import Cart from "./cart";
import Movie from "./movie";
import Book from "./book";

const cart = new Cart();

const movie = new Movie(
	101,
	"The Avengers",
	1500,
	2012,
	"USA",
	"Avengers Assemble!",
	["sci-fi", "action", "fantasy", "adventure"],
	137
);

const book = new Book(102, "Test Book", "Author Name", 500, 300);

cart.add(movie);
cart.add(book);

console.log(cart.items);