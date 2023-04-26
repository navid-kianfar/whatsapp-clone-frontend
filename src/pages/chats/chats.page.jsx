import { useEffect } from "react";
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
import Wrapper from "./chats.style";
import Me from "../../assets/images/me.jpeg";

const ChatsPage = () => {
  const navigate = useNavigate();
  const { loading, user, chat, darkTheme } = useAppContext();

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
