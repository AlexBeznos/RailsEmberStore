# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
l = Product.last
f = Product.first
m = Order.create(name: 'AlexBeznos', phone: '0937003321', addres: 'Mih Donca 14V')
m.products << l
m.products << f

p = Order.create(name: 'EgorGavrilenko', phone: 'fuck', addres: 'fucking fuck')
p.products << l
p.products << f