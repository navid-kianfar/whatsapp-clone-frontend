import React from "react";
import DashboardArt from "../icons/dashboard.icon";

const ChatLanding = ({ dark }) => {
  return (
    <div className="no-chat">
      <div className="content-wrapper">
        <DashboardArt dark={dark} />
        <h3>WhatsApp Web</h3>
        <div className="info-note">
          Send and receive messages without keeping your phone online.
          <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </div>
      </div>
    </div>
  );
};

export default ChatLanding;
