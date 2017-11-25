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

User.create(username: 'Name', password: 'Password', email: 'aa@school.com')

books = JSON.parse(File.read('db/data/books.json'))
books.each do |book|
	Book.create(book)
end

Bookshelf.create(title: 'bookshelf1', description: 'example', owner_id: 1)