class Chat < ActiveRecord::Base
  has_many :messages
  has_many :users, through: :user_chats
end
