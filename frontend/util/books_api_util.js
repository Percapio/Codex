export const getAllBooks = () => (
	$.ajax({
		method: 'GET',
		url: 'http://isbndb.com/api/v2/json/R18RIY5F/books?q=programming'
	})
);

export const getSingleBook = id => (
	$.ajax({
		method: 'GET',
		url: `/api/books/${id}`
	})
);

