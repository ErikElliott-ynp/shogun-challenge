# README

## About
I implemented this real estate search application using Ruby on Rails, PostgreSQL, CSS/SASS for styling, and React Hooks. I decided against any frontend state management libraries,
like Redux, due to the relatively small nature of the task. The data was from a CSV file downloaded from Redfin.com. I decided to parse the file and input the
data into the DB. This gave me the ability to use ActiveRecord as my ORM which provided a clean interface for querying. On the frontend, I decided to use
React Hooks to keep things clean and lightweight. I was interested in paginating the larger responses, and made the decision to do this in the React component
instead of in the Controller. Mainly due to my understanding of this position as Fullstack but React based, and a desire to attempt frontend pagination. 

A live version is hosted on Heroku [here](https://shogun-challenge.herokuapp.com/)

### Please have 
+ Rails 5.2.3
+ PostgreSQL
+ Node

### To setup please run
+ `bundle install`
+ `npm i`
+ `bundle exec rails db:setup`

### To test in browser run
+ `bundle exec rails s` in terminal at the project root
+ `npm start` in a separate terminal tab at the project root
+ open localhost in your favorite browser

