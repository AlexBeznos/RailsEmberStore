# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :category do |f|
    f.name "MyString"
    f.alias "MyString"
    f.position 1
    f.menu 1
    f.status false
  end
end
