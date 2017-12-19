# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# @user1 = User.create(id: 1, username: 'bboy', password: 'password', password_digest: 'abcdefgh', email: 'abc@yahoo.com')
# @user1 = User.create(id: 2, username: 'rock', password: 'password', password_digest: 'abcdefgh', email: 'abc@yahoo.com')
# @user1 = User.create(id: 3, username: 'steady', password: 'password', password_digest: 'abcdefgh', email: 'abc@yahoo.com')
# @user1 = User.create(id: 4, username: 'bamm', password: 'password', password_digest: 'abcdefgh', email: 'abc@yahoo.com')

# @book1 = Book.create(id: 1, title: 'dude', author: 'dave', summary: 'cool', ISBN: 123, img_url: 'app/assets/images/book_one.jpg')
# @book2 = Book.create(id: 2, title: 'where', author: 'dan', summary: 'cool', ISBN: 234, img_url: 'app/assets/images/book_one.jpg')
# @book3 = Book.create(id: 3, title: 'is', author: 'dill', summary: 'cool', ISBN: 345, img_url: 'app/assets/images/book_one.jpg')
# @book4 = Book.create(id: 4, title: 'my', author: 'dick', summary: 'cool', ISBN: 456, img_url: 'app/assets/images/book_one.jpg')
# @book5 = Book.create(id: 5, title: 'car', author: 'dane', summary: 'cool', ISBN: 567, img_url: 'app/assets/images/book_one.jpg')


##INITIAL SEED DATA
# books = JSON.parse(File.read('db/data/books.json'))
# books.each do |book|
# 	Book.create(book)
# end

# Book.create(title: "Ender's Game", author: "Orson Scott Card", img_url: "https://images-na.ssl-images-amazon.com/images/I/610KU5avW4L.jpg" , summary: "Andrew 'Ender' Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life.", ISBN: 1234 )


# GoodReads 
# key: n5WG5yVYDeWcA5udKbMA
# require 'goodreads'

client = Goodreads::Client.new(api_key: "n5WG5yVYDeWcA5udKbMA")

(1..10).each do |num|
	shelf = client.shelf(61942927, 'read', { page: num })

	shelf.books.each do |id|
		author = id.book.authors.author.name
		id.book.description.gsub!('<i>An alternative cover edition for this ISBN can be found <a href="https://www.goodreads.com/book/show/32147746-invitation-to-a-beheading" rel="nofollow">here</a></i>', '')
		id.book.description.gsub!('This book was mistakenly published under <a href="https://www.goodreads.com/book/show/2184419.Masculino_Que_Ninguno" rel="nofollow">ISBN13: 9780965017763</a>', '')
		id.book.description.gsub!('Alternate covers can be found <a href="https://www.goodreads.com/book/show/13418380-a-feast-for-crows" rel="nofollow">here</a>', '')
		id.book.description.gsub!('<i>There is an alternate cover edition <a href="https://www.goodreads.com/book/show/32334208-blood-of-the-fold" rel="nofollow">here</a>.</i>', '')
		id.book.description.gsub!('<i>There is an alternate cover edition <a href="https://www.goodreads.com/book/show/32492176-faith-of-the-fallen" rel="nofollow">here</a>.</i>', '')
		id.book.description.gsub!('<i>Librarian note: an alternate cover for this edition can be found <a href="https://www.goodreads.com/book/show/25550470-the-black-company" rel="nofollow">here</a>.</i>', '')
		id.book.description.gsub!('An alternate cover edition of this ISBN can be found <a href="https://www.goodreads.com/book/show/7935521-magician" rel="nofollow">here</a>.', '')
		id.book.description.gsub!('Alternate cover edition can be found <a href="https://www.goodreads.com/book/show/6041689-a-clash-of-kings" rel="nofollow">here</a>. ', '')
		description = id.book.description.gsub('<br />', '')
		description.gsub!('<p>', '')
		description.gsub!('</p>', '')
		description.gsub!('<i>', '')
		description.gsub!('</i>', '')
		description.gsub!('<em>', '')
		description.gsub!('</em>', '')
		description.gsub!('</b>', '')
		description.gsub!('<b>', '')

		make_book = { ISBN: id.book.isbn, 
									title: id.book.title, 
									summary: description,
									img_url: id.book.image_url,
									author: author }

		Book.create(make_book) if make_book.values.all? { |el| !el.nil? }
	end
end

#Demo User
@user = User.create(username: 'Guest', password: 'Password', email: 'aa@school.com')
				Bookshelf.create(
				  title: 'Currently Reading', 
				  description: 'Basic bookshelf to hold "Currently Reading"',
				  img_url: 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png',
				  owner_id: @user.id
				)

@bookshelf1 =	Bookshelf.create(
							  title: 'Want to Read', 
							  description: 'Basic bookshelf to hold "Want to Read"',
							  img_url: 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png',
							  owner_id: @user.id
							)

@bookshelf2 = Bookshelf.create(
							title: 'Favorites',
							description: 'Books I love to read',
							owner_id: @user.id 
						)

Book.all[160..-1].each do |book|
	Shelf.create(book_id: book.id, bookshelf_id: @bookshelf1.id + 1)
end

Book.all[145..159].each do |book|
	Shelf.create(book_id: book.id, bookshelf_id: @bookshelf2.id + 1)
end

#User seeds
up = ['true', 'false']

200.times do |num|
	user = User.create(username: Faker::Name.unique.name, password: 'password', email: '#{num}@school.com')
	Book.all.each do |book|
		Review.create(author_id: user.id, book_id: book.id, description: Faker::StarWars.quote, title: Faker::StarWars.wookie_sentence, author_name: user.username)
		Thumb.create(user_id: user.id, book_id: book.id, up: up.sample)
	end
end











#end