@books.each do |book|
	json.set! book.id do
		json.partial! 'api/booksbook', book: book
	end
end