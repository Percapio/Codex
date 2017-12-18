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

export const createShelf = (shelf) => (
	$.ajax({
		method: 'POST',
		url: 'api/shelves',
		data: {
			book_id: shelf.book_id,
			bookshelf_id: shelf.bookshelf_id
		}
	})
);

export const deleteShelf = ({ book_id, bookshelf_id}) => (
	$.ajax({
		method: 'DELETE',
		url: `api/shelves/${bookshelf_id}`,
		data: {
			book_id,
			bookshelf_id
		}
	})
);