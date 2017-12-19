export const getBookshelves = (userId) => (
	$.ajax({
		method: 'GET',
		url: `api/users/${userId}/bookshelves/`
	})
);

export const getBookshelf = (shelf, userId) => (
	$.ajax({
		method: 'GET',
		url: `api/users/${userId}/bookshelves/${ shelf }`
	})
);

export const createBookshelf = (shelf) => (
	$.ajax({
		method: 'POST',
		url: `api/users/${shelf.userId}/bookshelves/`,
		data: { 
			bookshelf: shelf 
		}
	})
);

export const deleteBookshelf = (shelfId, userId) => (
	$.ajax({
		method: 'DELETE',
		url: `api/users/${userId}/bookshelves/${ shelfId }`,
		data: {
			id: shelfId
		}
	})
);

export const editBookshelf = (shelf, userId) => (
	$.ajax({
		method: 'PATCH',
		url: `api/users/${userId}/bookshelves/${ shelf }`,
		data: { 
			id: shelfId 
		}
	})
);
