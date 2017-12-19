@thumbs.each do |thumb|
	json.partial! 'api/thumbs/thumb', thumb: thumb
end