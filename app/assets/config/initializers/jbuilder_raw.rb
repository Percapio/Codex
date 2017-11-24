require 'jbuilder'

class Jbuilder
	def set_raw!(attr_name, json_string)
		set! attr_name, JSON.generate(json_string)
	end
end