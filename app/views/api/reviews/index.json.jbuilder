@reviews.each do |review|
	json.set! review.id do
		json.extract! review, :title, :description, :book_id, :bookshelf_id
	end
end