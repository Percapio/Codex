### Thomas Vu

### General
  + lookin good all around

### MVP list
  + two thumbs up

### Component Hierarchy
  + for the routes will probably not want to call them "index" or "show"
  + what is the difference between left, main, and right container. if they're all on the window at the same time then they probably wont need have specific routes just for each component
  + likely need to break up the containers a little bit more to make life easier for yourself
    + a bookshelf will likely need it's own container and then within that a book will likely have it's own container as well

### Wireframes
  + these are lookin supah fresh. lovin the design.

### Schema
  + reviews(joins table) will need some way to keep track of what book it is for
  + tags(joins table) will need some way to keep track of what book it is for
  + bookshelves will need some way to keep track of what books it has and conversely books will need to be able to know what shelf they're on
  + img_url if any of these entries will need a picture associated with it later on, like a book cover image or bookshelf genre image or something

### Sample State
  + a book id shouldn't also be an ISBN
  + may need a bookshelf slice of state
  + don't load so much in your session slice of state, it should only be responsible for session(login/signup/signout) related info

### Routes
  + probably don't need to have nested routes in this situation, a bookshelf will have many books and a book can belong to many bookshelves so it might make more sense to just have the one bookshelf table and set of routes that just handles bookshelves.
