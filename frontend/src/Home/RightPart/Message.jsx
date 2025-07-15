import React from 'react'

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));

  if (!authUser || !authUser.user?._id) return null;

  const itsMe = message.senderId === authUser.user._id;
  const chatAlign = itsMe ? "chat-end" : "chat-start";
  const bubbleColor = itsMe ? "bg-green-700" : "bg-slate-700";
  const DatePosition = itsMe ? "text-right" : "text-left";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className='p-2'>
      <div className={`chat ${chatAlign}`}>
        <div className={`chat-bubble text-white ${bubbleColor} 
          px-4 py-2 rounded-lg shadow max-w-[75%] break-words`}>
          {message.message}
        </div>
      </div>
      <div className={`text-xs text-gray-400 mt-1 ${DatePosition}`}>
        {formattedTime}
      </div>
    </div>
  );
}

export default Message;
