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

@book1 = Book.create(id: 1, title: 'dude', author: 'dave', summary: 'cool', ISBN: 12312415255515)
@book2 = Book.create(id: 2, title: 'where', author: 'dan', summary: 'cool', ISBN: 12313124255654)
@book3 = Book.create(id: 3, title: 'is', author: 'dill', summary: 'cool', ISBN: 68482045832424)
@book4 = Book.create(id: 4, title: 'my', author: 'dick', summary: 'cool', ISBN: 12481409180982)
@book5 = Book.create(id: 5, title: 'car', author: 'dane', summary: 'cool', ISBN: 15145345435114)
