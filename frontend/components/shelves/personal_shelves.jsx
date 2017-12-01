import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ user }) => {
	return(
		<div>
			<div className= "current-reading">
				<h3>Current Reading</h3>
				
				<NavLink to= { `/user/${ user.id }/Currently Reading` } >
					<img 
						src= 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png'
						alt= 'some random book'
						className= 'side-bar-books' />
				</NavLink>
						
				<div className= 'mini-edits'>
					<i className="fa fa-minus-circle" aria-hidden="true"></i>
					<i className="fa fa-plus-circle" aria-hidden="true"></i>
				</div>
			</div>

			<hr />

			<div className= "want-to-read">
				<h3>Want to Read</h3>

				<NavLink to= { `/user/${ user.id }/Want to Read` } >
					<img 
						src= 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png' 
						alt= 'some random book'
						className= 'side-bar-books'
						 />
				</NavLink>

				<div className= 'mini-edits'>
					<i className="fa fa-minus-circle" aria-hidden="true"></i>
					<i className="fa fa-plus-circle" aria-hidden="true"></i>
				</div>
			</div>
		<hr />
		</div>
	)
};