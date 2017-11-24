export const getAllBooks = books => (
	$.ajax({
		method: 'GET',

		url: 'api/books',
		books

	})
);

export const getSingleBook = id => (
	$.ajax({
		method: 'GET',
		url: `api/books/${id}`
	})
);

