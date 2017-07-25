class UserChatsController < ApplicationController

  def index

    if params[:user_id]
      user = User.find(params[:user_id])
      all_users = user.all_users
      render :json => all_users.as_json(include: :chat)
    end

    if params[:chat_id]
      chat = Chat.find(params[:chat_id])
      all_chats = user.all_chats
      render :json => all_chats.as_json(include: :user)
    end
  end
end