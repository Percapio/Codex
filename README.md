# CODEX

## CODEX
[Live Demo](https://codex-.herokuapp.com/#/)


### Summary
Codex is a re-imagined GoodReads website, presented with a clear design closely tied to today's current trend of single app designs.  It is a simple, yet effective design intended to not detract the readers, but instead help them quickly browse for what they are looking for, discover what was waiting for them, and move on with their busy lives.


### React
The site uses a mixture of the most recent trends of technologies, specifically React, Redux, Rails, JSX, and JBuilder.  Each one of these technologies, is challenging in its own right, but the most difficult challenge was understanding the higher level concept of implementing renders through asynchronous state changes.  To overcome one of these, it was necessary to create a function outside the rendering component to wait for the appropriate trigger element in order to return a component which relied on the state to finish with all of its changes.

```
handleBookShow() {
	if (this.props.book) {
		return <BookShow book= { this.props.book } />
	}
}
```

The asynchronous nature of Life Cycle methods, and the way they seem to trigger in an unpredictable behavior, caused cascading effects of errors where certain actions seem to fire in a random orders, which became increasingly hard to manage as more components interacted with one another.  By developing a simple function that checked for a flag, we are able to circumvent the asynchronous rendering of the webpage, and have the appropriate components render when we want them to.

Another challenge was the passing of data from one component to the next.  Normally, the state of one component is passed onto its children through its props, but we could not do that here as the rendering of the new component was done via NavLink React router.  Luckily, there is always the existing state living in the database to iterate through to find the necessary data objects to use on these components.  Like so...

```
	for (let i=0; i < state.entities.bookshelves.length; i++) {

		if (state.entities.bookshelves[i].title === 'Currently Reading') {
			currentReading = state.entities.bookshelves[i];

		} else if (state.entities.bookshelves[i].title === 'Want to Read') {
			wantToRead = state.entities.bookshelves[i]; 
		} 
	}
```


### Additional Resources
[Proposal Wireframes](https://github.com/Percapio/Codex/wiki/Wireframes)

[Database Schema](https://github.com/Percapio/Codex/wiki/Database-Schema)

[Sample State](https://github.com/Percapio/Codex/wiki/Sample-State)


### Features to be added:
  * User functionality on links shown
  * Search bar and function
  * Tags
  * Improved UI/UX layout
  * User profiles
