@bookshelf.each do |shelf|
	json.set! shelf.id do
		json.partial! 'shelf', bookshelf: shelf
	end
end