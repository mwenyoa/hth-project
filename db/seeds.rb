# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Organization.create(name: 'Mwenyo Foundation', logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1628589853/Screen_Shot_2021-08-10_at_11.03.37_PM_ewqjxg.png', mission: 'To help the needy', vision: 'To help the needy')
# User.create(firstname: 'test1', lastname: 'lastname_test', email: 'test@gmail.com',  password_digest:'password123')
fu = User.first
fu.role = 'admin'
fu.save