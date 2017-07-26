class ChatsController < ApplicationController

  def index
    chats = Chat.all
    render :json => chats
  end

  def show
    chat = Chat.find(params[:id])
    render :json => chat
  end

  def create
    chat = Chat.create(chat_params)
    render :json => chat
  end

  private
  def chat_params
    params.require(:chat).permit([:title])
  end 



end