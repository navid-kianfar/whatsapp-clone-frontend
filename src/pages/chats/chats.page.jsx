import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/loading/loading";
import DashboardArt from "../../components/icons/dashboard.icon";
import GroupsIcon from "../../components/icons/groups.icon";
import StatusIcon from "../../components/icons/status.icon";
import ChatIcon from "../../components/icons/chat.icon";
import MoreIcon from "../../components/icons/more.icon";
import PyramidIcon from "../../components/icons/pyramid.icon";
import SearchChats from "../../components/search-chats/search.chats";
import ChatNotification from "../../components/chat-notification/chat.notification";
import ChatItem from "../../components/chat-item/chat.item";
import Wrapper from "./chats.style";
import Me from "../../assets/images/me.jpeg";

const initialState = {
  notification: {
    show: false,
    title: "",
    description: "",
    icon: "",
    command: "",
    badgeColor: "",
  },
  chats: Array(50)
    .fill(0)
    .map((e, i) => ({
      group: i % 3 === 0,
      id: (i + 1).toString(),
      title: "chat with person " + (i + 1),
      date: new Date(2022, 1, 1),
      unread: 0,
      lastMessage: {
        mode: "text",
        text: "last message text",
      },
    })),
};

const ChatsPage = () => {
  const navigate = useNavigate();
  const { loading, user, chat, darkTheme } = useAppContext();
  const [state, setState] = useState(initialState);

  const pickChat = (chat) => {
    console.log("pickChat", chat);
  };
  const reactNotification = () => {
    console.log("reactNotification");
  };
  const closeNotification = () => {
    console.log("closeNotification");
    // setTimeout(() => {
    //   setState({
    //     ...state,
    //     notification: {
    //       show: false,
    //       title: "",
    //       description: "",
    //       icon: "",
    //       command: "",
    //       badgeColor: "",
    //     },
    //   });
    // }, 1000);
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
              <GroupsIcon />
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
            <button className="filter-btn">
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
            {state.chats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} onPick={pickChat} />
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
      </div>
    </Wrapper>
  );
};

export default ChatsPage;
