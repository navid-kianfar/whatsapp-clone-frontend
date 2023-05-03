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
import MuteChatDialog from "../../components/dialogs/mute-chat-dialog/mute.chat.dialog";
import BlockChatDialog from "../../components/dialogs/block-chat-dialog/block.chat.dialog";
import ReportChatDialog from "../../components/dialogs/report-chat-dialog/report.chat.dialog";
import DeleteChatDialog from "../../components/dialogs/delete-chat-dialog/delete.chat.dialog";
import ChearChatDialog from "../../components/dialogs/clear-chat-dialog/clear.chat.dialog";
import { fetchChats } from "../../services/api.service";

const ChatsPage = () => {
  const navigate = useNavigate();
  const {
    loading,
    loadingPercent,
    user,
    chat,
    darkTheme,
    searchPlate,
    infoPlate,
    hideExtended,
    operations,
    resetChatOperations,
    chatsLoaded,
  } = useAppContext();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    fetchChats().then((res) => {
      chatsLoaded({ chats: res.data });
    });
  }, [user, navigate]);

  if (loading) {
    return <Loading percent={loadingPercent} />;
  }
  return (
    <>
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

      {operations.chatForMute && (
        <MuteChatDialog chat={chat} handleClose={resetChatOperations} />
      )}

      {operations.chatForBlock && (
        <BlockChatDialog chat={chat} handleClose={resetChatOperations} />
      )}

      {operations.chatForReport && (
        <ReportChatDialog chat={chat} handleClose={resetChatOperations} />
      )}

      {operations.chatForClear && (
        <ChearChatDialog chat={chat} handleClose={resetChatOperations} />
      )}

      {operations.chatForDelete && (
        <DeleteChatDialog chat={chat} handleClose={resetChatOperations} />
      )}
    </>
  );
};

export default ChatsPage;
