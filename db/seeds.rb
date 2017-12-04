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
books = JSON.parse(File.read('db/data/books.json'))
books.each do |book|
	Book.create(book)
end

Book.create(title: "Ender's Game", author: "Orson Scott Card", img_url: "https://images-na.ssl-images-amazon.com/images/I/610KU5avW4L.jpg" , summary: "Andrew 'Ender' Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life.", ISBN: 1234 )


#Demo User
@user = User.create(username: 'Guest', password: 'Password', email: 'aa@school.com')
	Bookshelf.create(
	  title: 'Currently Reading', 
	  description: 'Basic bookshelf to hold "Currently Reading"',
	  img_url: 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png',
	  owner_id: @user.id
	)

	Bookshelf.create(
	  title: 'Want to Read', 
	  description: 'Basic bookshelf to hold "Want to Read"',
	  img_url: 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png',
	  owner_id: @user.id
	)

@bookshelf1 =Bookshelf.create(
							title: 'Favorites',
							description: 'Books I love to read',
							owner_id: @user.id 
						)


Shelf.create(book_id: 10, bookshelf_id: @bookshelf1.id)
Shelf.create(book_id: 8, bookshelf_id: @bookshelf1.id)
Shelf.create(book_id: 6, bookshelf_id: @bookshelf1.id)
Shelf.create(book_id: 13, bookshelf_id: @bookshelf1.id)
Shelf.create(book_id: 2, bookshelf_id: @bookshelf1.id)
Shelf.create(book_id: 7, bookshelf_id: @bookshelf1.id)


#User seeds
@user2 = User.create(username: Faker::Dune.character, password: 'password1234', email: 'larry@school.com')
@user3 = User.create(username: Faker::Dune.character, password: 'password1234', email: 'curly@school.com')
@user4 = User.create(username: Faker::Dune.character, password: 'password1234', email: 'moe@school.com')
@user5 = User.create(username: Faker::Dune.character, password: 'password1234', email: 'homer@school.com')
@user6 = User.create(username: Faker::Dune.character, password: 'password1234', email: 'bob@school.com')


#Reviews Seed
(1..15).each do |bookId|
	4.times do |num|
		userId = (rand() * 5).ceil
		Review.create(author_id: userId, book_id: bookId, description: Faker::Dune.quote, title: Faker::Dune.saying)
	end
end

















#end