require 'net/http'

class PropertiesController < ApplicationController
    def search
        query = params[:query].downcase
        @exact_properties = Property.where("address like ?", "%#{query}%")
        if @exact_properties.length 
            @similar_properties = Property.where(beds: @exact_properties[0].beds).where(postal_code: @exact_properties[0].postal_code)
        else
            @similar_properties = []
        end

        render :search
    end

  
end
