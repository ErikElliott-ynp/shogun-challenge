# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'csv'


Property.destroy_all

csv_text = File.read(Rails.root.join("redfin_2021-03-15-16-53-22.csv"))
csv = CSV.parse(csv_text, headers: true, encoding: 'ISO-8859-1')
csv.each do |property|
    next if property["ADDRESS"].nil?
    property = property.to_hash
    property.each { |key, value| property[key] = value.downcase unless value.nil?}
    prop = Property.create!(
        property_type: property["PROPERTY TYPE"],
        address: property["ADDRESS"],
        postal_code: property["ZIP OR POSTAL CODE"],
        price: property["PRICE"],
        square_feet: property["SQUARE FEET"],
        beds: property["BEDS"],
        baths: property["BATHS"],
        url: property["URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)"],
        state: property["STATE OR PROVINCE"],
        city: property["CITY"]
    )
end
