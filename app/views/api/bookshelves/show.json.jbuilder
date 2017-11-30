@bookshelf.each do |shelf|
	json.set! shelf.title do
		json.partial! 'api/bookshelves/bookshelf', bookshelf: @bookshelf
	end
end