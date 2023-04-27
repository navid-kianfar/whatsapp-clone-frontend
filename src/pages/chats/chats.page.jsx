import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/loading/loading";
import ChatSidebar from "../../components/chat-sidebar/chat.sidebar";
import Chatbox from "../../components/chat-box/chat.box";
import ChatSearch from "../../components/chat-search/chat.search";
import ChatInfo from "../../components/chat-info/chat.info";
import ChatLanding from "../../components/chat-landing/chat.landing";
import Wrapper from "./chats.style";
import CrossIcon from "../../components/icons/cross.icon";

const ChatsPage = () => {
  const navigate = useNavigate();
  const {
    loading,
    user,
    chat,
    darkTheme,
    searchPlate,
    infoPlate,
    hideExtended,
  } = useAppContext();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="sidebar">
        <ChatSidebar />
      </div>
      <div className="content">
        {chat ? <Chatbox /> : <ChatLanding dark={darkTheme} />}
      </div>
      {(searchPlate || infoPlate) && (
        <div className="extended">
          <div className="header">
            <div className="action">
              <button onClick={hideExtended}>
                <CrossIcon />
              </button>
            </div>
            <div className="title">
              {searchPlate ? "Search Messages" : "Contact info"}
            </div>
          </div>
          <div className="inner">
            {searchPlate ? (
              <ChatSearch chat={chat} />
            ) : (
              <ChatInfo chat={chat} />
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default ChatsPage;
