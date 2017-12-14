@books.each do |book|
	book.set! book.id do
		json.partial! 'api/books/book', book: book
	end
end