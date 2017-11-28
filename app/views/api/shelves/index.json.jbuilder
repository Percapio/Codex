@shelves.each do |shelf|
	json.set! shelf.id do 
		json.partial! 'shelves', shelf: shelf
	end
end