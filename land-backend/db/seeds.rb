# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Favorite.destroy_all
Listing.destroy_all
User.destroy_all


User.create(name: "testing", username: "test", password:"test", userImg: "test", phone: "test", location: "test")
Listing.create(img1: "https://photos.harstatic.com/155930960/hr/img-2.jpeg?ts=2019-01-07T14:09:42.790", img2: "https://photos.zillowstatic.com/fp/a6a5789afc14555dc9f65770fb197871-cc_ft_960.jpg", img3: "https://ap.rdcpix.com/727944931/21fdca4c67bae7bd85faeae1508a2d0fl-m0xd-w640_h480_q80.jpg", price: 60000, acres: 12, location:"somewhere", description:"something", user_id: 44)
Listing.create(img1: "https://photos.harstatic.com/155930960/hr/img-2.jpeg?ts=2019-01-07T14:09:42.790", img2: "https://photos.zillowstatic.com/fp/a6a5789afc14555dc9f65770fb197871-cc_ft_960.jpg", img3: "https://ap.rdcpix.com/727944931/21fdca4c67bae7bd85faeae1508a2d0fl-m0xd-w640_h480_q80.jpg", price: 60000, acres: 12, location:"somewhere", description:"something", user_id: 2)


