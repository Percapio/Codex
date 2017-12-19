@thumbs.each do |thumb|
	json.set! thumb.id do
		json.partial! 'api/thumbs/thumb', thumb: thumb
	end
end