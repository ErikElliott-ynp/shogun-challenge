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
            "drive" => "dr"
        }

        query_array = params[:query].downcase.split

        query_array.each_with_index do |address_ele, idx|
            if street_suffixes.has_key?(address_ele)
                query_array[idx] = street_suffixes[address_ele]
            end
        end
        query = query_array.join(" ")
        @exact_properties = Property.where("address LIKE ?", "%#{query}%")
        if @exact_properties.length > 0
            @similar_properties = Property.where(beds: @exact_properties[0].beds).where(postal_code: @exact_properties[0].postal_code)
        else
            @similar_properties = Property.where("address LIKE ?", "%#{query_array[0]}%")
        end

        render :search
    end

  
end
