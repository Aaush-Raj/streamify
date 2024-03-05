const ChatMessage = ({ name, message ,id}) => {
    return (
      <div className={`flex items-center shadow-sm p-2 ${id == 'currentUser'? 'bg-yellow-200': '' } `}>
        <img
          className="h-4"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className="font-semibold text-xs px-2">{name}</span>
        <span className=" text-sm">{message}</span>
      </div>
    );
  };
  export default ChatMessage;