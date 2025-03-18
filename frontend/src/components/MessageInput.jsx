import { useReducer, useRef, useState } from "react"
import { useChatStore } from "../store/useChatStore.js";
import { Image, Search, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {

    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const {sendMessage} = useChatStore();

    const handleImageChange = (e) =>{
        const file = e.target.files[0];

        if(!file.type.startsWith("image/")){
            toast.error("please select an image file");
            return;
        }

        const reader = new FileReader();
        reader.onload = () =>{
            setImagePreview(reader.result);
        }

        reader.readAsDataURL(file);
    };

    const removeImage = () =>{
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSendMessage = async(e)=>{
        e.preventDefault();
        if (!text.trim() && !imagePreview) return;
    
        try {
          await sendMessage({
            text: text.trim(),
            image: imagePreview,
          });
    
          // Clear form
          setText("");
          setImagePreview(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
          console.error("Failed to send message:", error);
        }
    }

  return (
    <div className="p-4 w-full bg-white border-t border-gray-100 shadow-sm">
        {imagePreview && (
            <div className="mb-3 flex items-center gap-2">
            <div className="relative group">
                <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:brightness-90"
                />
                <button
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-gray-200 shadow-md
                    flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    type="button"
                    aria-label="Remove image"
                >
                <X className="size-3.5" />
                </button>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center">
                <Search className="size-5 text-white" />
                </div>
            </div>
            <div className="text-xs text-gray-500 flex flex-col">
                <span>Image attached</span>
                <button 
                    className="text-blue-500 hover:underline text-left" 
                    onClick={removeImage}
                >
                  Change
                </button>
            </div>
            </div>
        )}

        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <div className="flex-1 flex gap-2 relative">
                <input
                    type="text"
                    className="w-full input input-bordered rounded-full py-3 pl-4 pr-10 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all duration-200"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                />

                <button
                    type="button"
                    className={`absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center h-8 w-8 rounded-full 
                    ${imagePreview ? "text-emerald-500 bg-emerald-50" : "text-gray-400 hover:bg-gray-100"} 
                    transition-colors duration-200`} 
                    onClick={() => fileInputRef.current?.click()}
                    aria-label="Attach image"
                >
                    <Image size={18} />
                </button>
            </div>
                <button
                type="submit"
                className={`btn btn-circle shadow-md ${!text.trim() && !imagePreview ? 
                    "bg-gray-200 text-gray-400" : 
                    "bg-blue-500 hover:bg-blue-600 text-white"}`}
                disabled={!text.trim() && !imagePreview}
                aria-label="Send message"
                >
                <Send size={20} />
            </button>
        </form>
    </div>
  );
}

export default MessageInput