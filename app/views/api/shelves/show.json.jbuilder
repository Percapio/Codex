# json.partial! 'api/shelves/shelves', shelves: @shelves

# if @shelf[0]
#   json.extract! @shelf.first, :read_status

#   shelves = @shelf.map do |shelf|
#     json.set! shelf.bookshelf.id, shelf.bookshelf.shelf_name
#   end

#   json.set! :inShelves, shelves

# else
#   json.inShelves ""
#   json.read_status ""
# end

# json.extract! shelves, :status
# json.extract! shelves.book, :title, :img_url, :id, :author

# json.partial! 'api/books/book', book: @book

@books.each do |book|
	json.set! book.id do
		json.partial! 'api/books/book', book: book
	end
end
