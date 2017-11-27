export const getBookshelves = (user_id) => (
	$.ajax({
		method: 'GET',
		url: `api/users/${user_id}/bookshelves/`
	})
);

export const getBookshelf = (shelf, user_id) => (
	$.ajax({
		method: 'GET',
		url: `api/users/${user_id}/bookshelves/${ shelf }`
	})
);

export const createBookshelf = (shelf, user_id) => (
	$.ajax({
		method: 'POST',
		url: `api/users/${user_id}/bookshelves/`,
		data: { 
			bookshelf: shelf 
		}
	})
);

export const deleteBookshelf = (bookshelf_id, user_id) => (
	$.ajax({
		method: 'DELETE',
		url: `api/users/${user_id}/bookshelves/${bookshelf_id}`
	})
);

export const editBookshelf = (shelf, user_id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/users/${user_id}/bookshelves/${ shelf.id }`,
		data: { 
			bookshelf: shelf 
		}
	})
);

//tester
export const testCreate = (shelf, user_id) => (
	$.ajax({
		method: 'POST',
		url: `api/bookshelves`,
		data: { 
			bookshelf: shelf 
		}
	})
)