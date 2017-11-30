export const getAllShelves = () => (
	$.ajax({
		method: 'GET',
		url: 'api/shelves'
	})
);

export const getSingleShelf = shelfId => (
	$.ajax({
		method: 'GET',
		url: `api/shelves/${shelfId}`
	})
);

export const createShelf = ({ bookshelfId, bookId })=> {
	return (
			$.ajax({
			method: 'POST',
			url: 'api/shelves',
			data: {
				book_id: bookId,
				bookshelf_id: bookshelfId
			}
		})
	)
};

