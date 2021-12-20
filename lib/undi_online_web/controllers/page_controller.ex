defmodule UndiOnlineWeb.PageController do
  use UndiOnlineWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
