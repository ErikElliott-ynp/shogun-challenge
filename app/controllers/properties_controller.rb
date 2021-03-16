class PropertiesController < ApplicationController
    def search
        # need to make a search here later
        @property = Property.first
        render :search
    end
end
