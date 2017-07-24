# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Message.delete_all
UserChat.delete_all
User.delete_all
Chat.delete_all


user1 = User.create( { username: "Ally" } )
user2 = User.create( { username: "Dan" } )
user3 = User.create( { username: "Johnny" } )

chat1 = Chat.create( { title: "Project" } )
chat2 = Chat.create( { title: "Weekend" } )

user_chat1 = UserChat.create( { user: user1, chat: chat1 } )
user_chat2 = UserChat.create( { user: user1, chat: chat2 } )
user_chat3 = UserChat.create( { user: user2, chat: chat1 } )
user_chat4 = UserChat.create( { user: user3, chat: chat2 } )

message1 = Message.create( { text: "How much code have you written so far?", user: user1, chat: chat1 } )
message1 = Message.create( { text: "All the back-end, its the best!", user: user2, chat: chat1 } )
message1 = Message.create( { text: "Hi, what kind of cryptocurrency are you buying today?", user: user1, chat: chat2 } )
message1 = Message.create( { text: "All of them", user: user3, chat: chat2 } )