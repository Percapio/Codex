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

export const createShelf = shelf => (
	$.ajax({
		method: 'POST',
		url: 'api/shelves',
		data: { shelf }
	})
);

