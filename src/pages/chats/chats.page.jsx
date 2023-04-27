import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/loading/loading";
import DashboardArt from "../../components/icons/dashboard.icon";
import CommunitiesIcon from "../../components/icons/communities.icon";
import StatusIcon from "../../components/icons/status.icon";
import ChatIcon from "../../components/icons/chat.icon";
import MoreIcon from "../../components/icons/more.icon";
import PyramidIcon from "../../components/icons/pyramid.icon";
import SearchChats from "../../components/search-chats/search.chats";
import ChatNotification from "../../components/chat-notification/chat.notification";
import Chatbox from "../../components/chat-box/chat.box";
import ChatItem from "../../components/chat-item/chat.item";
import Wrapper from "./chats.style";
import Me from "../../assets/images/me.jpeg";

const initialState = {
  unreadOnly: false,
  notification: {
    show: false,
    title: "",
    description: "",
    icon: "",
    command: "",
    badgeColor: "",
  },
  filtered: [],
  chats: Array(50)
    .fill(0)
    .map((e, i) => ({
      group: i % 3 === 0,
      id: (i + 1).toString(),
      title: "chat with person " + (i + 1),
      date: new Date(2022, 1, 1),
      unread: i % 5 === 0 ? 3 : 0,
      lastMessage:
        i % 4 === 0
          ? {
              mode: "text",
              text: "last message text",
            }
          : null,
    })),
};

const ChatsPage = () => {
  const navigate = useNavigate();
  const { loading, user, chat, darkTheme, openChat } = useAppContext();
  const [state, setState] = useState(initialState);

  const toggleFilterUnRead = () => {
    const unread = !state.unreadOnly;
    const filtered = unread
      ? state.chats.filter((chat) => chat.unread > 0)
      : [];
    setState({ ...state, unreadOnly: unread, filtered });
  };

  const pickChat = (chat) => {
    // todo: clean if nessasary
    openChat(chat);
  };
  const reactNotification = () => {
    console.log("reactNotification");
  };
  const closeNotification = () => {
    setTimeout(() => {
      setState({
        ...state,
        notification: {
          show: false,
          title: "",
          description: "",
          icon: "",
          command: "",
          badgeColor: "",
        },
      });
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        notification: {
          show: true,
          title: "Get notified of new messages",
          description: "Turn on desktop notifications",
          icon: "bell",
          command: "",
          badgeColor: "",
        },
      });

      // TODO: remove this auto select
      pickChat(state.chats[0]);
    }, 1000);

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
        <header>
          <div className="avatar">
            <img src={Me} alt="avatar" />
          </div>
          <div className="actions">
            <button>
              <CommunitiesIcon />
            </button>
            <button>
              <StatusIcon />
            </button>
            <button>
              <ChatIcon />
            </button>
            <button>
              <MoreIcon />
            </button>
          </div>
        </header>

        <div className="inner-container">
          <div className="search-container">
            <SearchChats />
            <button
              onClick={toggleFilterUnRead}
              className={`filter-btn ${state.unreadOnly ? "active" : ""}`}
            >
              <PyramidIcon />
            </button>
          </div>

          <div
            className={`chats-container ${
              state.notification.show ? "has-notification" : ""
            }`}
          >
            {state.notification.show && (
              <ChatNotification
                onReact={reactNotification}
                onClose={closeNotification}
                notification={state.notification}
              />
            )}
            {state.unreadOnly && (
              <div className="filtered-note">FILTERED BY UNREAD</div>
            )}
            {(state.unreadOnly ? state.filtered : state.chats).map((chat) => (
              <ChatItem
                key={chat.id}
                chat={chat}
                onPick={() => pickChat(chat)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="content">
        {!chat && (
          <div className="no-chat">
            <div className="content-wrapper">
              <DashboardArt dark={darkTheme} />
              <h3>WhatsApp Web</h3>
              <div className="info-note">
                Send and receive messages without keeping your phone online.
                <br />
                Use WhatsApp on up to 4 linked devices and 1 phone at the same
                time.
              </div>
            </div>
          </div>
        )}
        {chat && <Chatbox chat={chat} />}
      </div>
    </Wrapper>
  );
};

export default ChatsPage;
