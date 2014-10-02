# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140918191158) do

  create_table "categories", force: true do |t|
    t.string   "name"
    t.string   "alias"
    t.integer  "position"
    t.integer  "menu"
    t.boolean  "status",             default: true
    t.integer  "parent_category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories_products", force: true do |t|
    t.integer "product_id"
    t.integer "category_id"
  end

  create_table "images", force: true do |t|
    t.string   "path"
    t.boolean  "main",       default: false
    t.integer  "product_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "orders", force: true do |t|
    t.string   "phone"
    t.string   "addres"
    t.string   "name"
    t.decimal  "sum"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "orders_products", force: true do |t|
    t.integer "product_id"
    t.integer "order_id"
  end

  create_table "products", force: true do |t|
    t.string   "name"
    t.decimal  "price"
    t.string   "alias"
    t.boolean  "active_on_storage", default: true
    t.integer  "on_storage"
    t.boolean  "active",            default: true
    t.integer  "position"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
