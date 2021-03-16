json.match do
    json.extract! @property, :id, :address, :property_type, :city, :postal_code, :square_feet, :url, :baths, :beds, :price, :state
end 

