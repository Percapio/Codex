@thumbs do |thumb|
	json.set! thumb.id do
		json.extract! thumb, :book_id, :user_id, :up
	end
end