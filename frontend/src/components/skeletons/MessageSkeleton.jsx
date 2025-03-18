const MessageSkeleton = () => {
    // Create an array of messages with varying properties
    const skeletonMessages = Array(6).fill(null).map((_, i) => ({
      width: Math.floor(Math.random() * 100) + 120, // Random width between 120-220px
      height: Math.floor(Math.random() * 30) + 32, // Random height between 32-62px
      hasReaction: Math.random() > 0.6, // 40% chance of having reactions
      hasAttachment: Math.random() > 0.7, // 30% chance of having attachment
      isTyping: i === 5 && Math.random() > 0.5, // Last message might be typing indicator
    }));
    
    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-b from-transparent to-gray-50/30">
        {skeletonMessages.map((message, idx) => (
          <div 
            key={idx} 
            className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"} animate-pulse`}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full overflow-hidden shadow-sm">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full" />
              </div>
            </div>
    
            <div className="chat-header mb-1.5 opacity-70 flex items-center gap-2">
              <div className="h-3 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md" />
              {idx % 3 === 0 && (
                <div className="h-2 w-2 rounded-full bg-blue-200" />
              )}
            </div>
    
            <div className={`chat-bubble bg-transparent p-0 ${message.isTyping ? 'w-24' : ''}`}>
              {message.isTyping ? (
                <div className="flex gap-1 p-2 bg-gray-100 rounded-xl">
                  <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '200ms' }} />
                  <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '400ms' }} />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {message.hasAttachment && (
                    <div className="h-24 w-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-1 overflow-hidden flex items-center justify-center">
                      <div className="h-8 w-8 bg-gray-300 rounded-full opacity-50" />
                    </div>
                  )}
                  <div 
                    className={`${idx % 2 === 0 
                      ? "bg-gradient-to-r from-gray-200 to-gray-300" 
                      : "bg-gradient-to-l from-blue-100 to-indigo-100"} 
                      h-${message.height < 40 ? "10" : "16"} w-[${message.width}px] rounded-2xl opacity-80`}
                  />
                </div>
              )}
            </div>
            
            <div className="chat-footer opacity-60 mt-1 flex items-center gap-2">
              <div className="h-2 w-12 bg-gray-200 rounded-md ml-2" />
              
              {message.hasReaction && (
                <div className="flex bg-gray-100 rounded-full px-2 py-1 items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-gray-300" />
                  <div className="h-2 w-4 bg-gray-200 rounded-sm" />
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Date separator */}
        <div className="flex justify-center my-4">
          <div className="px-4 py-1 bg-gray-100 rounded-full w-24 h-6 flex items-center justify-center">
            <div className="h-2 w-16 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    );
  };
  
  export default MessageSkeleton;