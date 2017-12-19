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
