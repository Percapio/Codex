export const getAllShelves = (shelfId) => (
	$.ajax({
		method: 'GET',
		url: 'api/shelves',
		data: {
			bookshelf_id: shelfId
		}
	})
);

export const getShelf = shelfId => (
	$.ajax({
		method: 'GET',
		url: `api/shelves/${shelfId}`,
		data: {
			bookshelf_id: shelfId
		}
	})
);

export const createShelf = ({ bookshelfId, bookId }) => (
	$.ajax({
		method: 'POST',
		url: 'api/shelves',
		data: {
			book_id: bookId,
			bookshelf_id: bookshelfId
		}
	})
);

export const deleteShelf = shelfId => (
	$.ajax({
		method: 'DELETE',
		url: `api/shelves/${shelfId}`
	})
);