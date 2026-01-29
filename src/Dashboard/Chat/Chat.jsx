import { useSelector } from "react-redux";

import Messages from "./Messages.jsx";
import NewMessageInput from "./NewMessageInput.jsx";

const ChatLogo = () => {
  return (
    <div className="ai_chat_logo_container">
      <p className="ai_chat_logo">AI Chat</p>
    </div>
  );
};

const Chat = () => {
  const selectedConversationId = useSelector(
    (state) => state.dashboard.selectedConversationId
  );

  return (
    <div className="chat_container">
      {!selectedConversationId ? (
        <ChatLogo />
      ) : (
        <div className="chat_selected_container">
          <Messages />
          <NewMessageInput />
        </div>
      )}
    </div>
  );
};

export default Chat;
