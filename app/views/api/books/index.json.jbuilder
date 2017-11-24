@books.each do |book|
	json.set! book.title do
		json.partial 'api/books/book', book: book
	end
end

# json = ActiveSupport::JSON.decode(File.read('db/data/books.json'))

# json.set_raw! :book, (File.read('db/data/books.json'))

# JSON.parse(File.read('db/data/books.json')).each do |book|
# 	json.set! book[title], :author, :img_url, :summary, :title, :ISBN
# end