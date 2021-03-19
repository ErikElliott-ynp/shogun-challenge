require 'net/http'

class PropertiesController < ApplicationController
    def search
        street_suffixes = {
            "street" => "st",
            "road" => "rd",
            "avenue" => "ave",
            "boulevard" => "blvd",
            "place" => "pl",
            "court" => "ct",
            "terrace" => "ter",
            "drive" => "dr",
            "st." => "st",
            "dr." => "dr",
            "rd." => "rd",
            "ct." => "ct"
        }

        query_array = params[:query].downcase.split
        # trying to anticipate different common street names
        query_array.each_with_index do |address_ele, idx|
            if street_suffixes.has_key?(address_ele)
                query_array[idx] = street_suffixes[address_ele]
            end
        end
        query = query_array.join(" ")
        @exact_properties = Property.where("address LIKE ?", "%#{query}%")
        if @exact_properties.length > 0
            @similar_properties = Property
                                    .where(beds: @exact_properties[0].beds)
                                    .where(postal_code: @exact_properties[0].postal_code)
                                    .where.not(id: @exact_properties.map(&:id)) #exclude exact matches
                                    .limit(5)
        elsif query_array.length > 1
            # try to suggest some properties on the same street if there's a street number
            @similar_properties = Property.where("address LIKE ?", "%#{query_array[1]}%").limit(5)
        else
            @similar_properties = Property.where("address LIKE ?", "%#{query_array[0]}%").limit(5)
        end
        # Make sure there are always suggested properties for the user
        if @similar_properties.length == 0
            @similar_properties = Property.all.sample(5) 
        end

        render :search
    end

  
end
