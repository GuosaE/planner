# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create(day: "Monday", location: "The Office", name: "Super Important Meeting", importance: "High", category: "Business")
Event.create(day: "Tuesday", location: "Home", name: "Movie Night", importance: "Low", category: "Recreation")
Event.create(day: "Wednesday", location: "Fancy Restaurant", name: "Anniversary Dinner", importance: "High", category: "Recreation")
Event.create(day: "Thursday", location: "Art Studio", name: "Finish New Painting", importance: "Medium", category: "Creative")
Event.create(day: "Friday", location: "Book Club", name: "Book Discussion", importance: "Low", category: "Recreation")
Event.create(day: "Saturday", location: "Local Mountain", name: "Climb Nearest Mountain", importance: "Medium", category: "Recreation")
Event.create(day: "Sunday", location: "Bank", name: "Deposit Money", importance: "High", category: "Business")