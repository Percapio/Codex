export const getBookByAuthor = author => (
	$.ajax({
		method: 'GET',
		url: 'api/books_searches/books_by_author',
		data: {
			search: { author: author }
		}
	});
)

export const getBookByISBN = ISBN => (
	$.ajax({
		method: 'GET',
		url: 'api/books_searches/books_by_isbn',
		data: {
			search: { ISBN: ISBN }
		}
	});
)

export const getRandomBook = () => (
	$.ajax({
		method: 'GET',
		url: 'api/books_searches/random_book'
	});
)

export const searchBooksDatabase = query => (
	$.ajax({
		method: 'GET',
		url: 'api/books_searches',
		data: {
			search: { query }
		}
	});
)

export const getBooks = () => (
	$.ajax({
		method: 'GET',
		url: 'api/books'
	});
)