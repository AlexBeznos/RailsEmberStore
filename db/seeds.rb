# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Admin.create(email: ENV['Mail'], password: ENV['Password'])

Category.create(name: 'Sneakers', alias: 'sneakers')
Category.create(name: 'T-Shirts', alias: 't-shirts')
Category.create(name: 'Hoodies', alias: 'hoodies')
Category.create(name: 'Coats', alias: 'coats')