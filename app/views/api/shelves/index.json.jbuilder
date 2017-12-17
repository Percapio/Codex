# @books.each do |book|
# 	json.set! book.id do
# 		json.partial! 'api/books/book', book: book
# 	end
# end

@shelves.each do |shelf|
	json.set! shelf.id do
		json.partial! 'shelves', shelf: shelf
	end
end