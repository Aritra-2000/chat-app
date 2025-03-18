import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-3 border-b border-base-300 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            {/* Avatar with online indicator */}
            <div className="avatar relative">
                <div className="size-11 rounded-full ring ring-white shadow-sm">
                <img 
                    src={selectedUser.profilePic || "/avatar.png"} 
                    alt={selectedUser.fullName}
                    className="object-cover" 
                />
                </div>
                {onlineUsers.includes(selectedUser._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-white"></span>
                )}
            </div>

            {/* User info */}
            <div>
                <h3 className="font-semibold text-gray-800">{selectedUser.fullName}</h3>
                <p className="text-xs flex items-center gap-1 text-gray-600">
                {onlineUsers.includes(selectedUser._id) ? (
                    <>
                    <span className="inline-block size-1.5 bg-green-500 rounded-full"></span>
                    Online
                    </>
                ) : (
                    <>
                    <span className="inline-block size-1.5 bg-gray-400 rounded-full"></span>
                    Offline
                    </>
                )}
                </p>
            </div>
            </div>

            {/* Close button */}
            <button 
                onClick={() => setSelectedUser(null)}
                className="rounded-full p-1.5 text-gray-500 hover:bg-gray-200 transition-colors"
                aria-label="Close conversation"
            >
            <X className="size-5" />
            </button>
        </div>
    </div>
  );
};
export default ChatHeader;