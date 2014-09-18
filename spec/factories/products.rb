# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :product do |f|
    f.name "MyString"
    f.category_id 23
    f.price "9.99"
    f.alias "MyString"
    f.active_on_storage false
    f.on_storage 1
    f.active false
    f.position 1
  end
end
