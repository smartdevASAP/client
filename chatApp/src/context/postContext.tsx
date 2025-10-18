import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";

// Define the Post type
type Post = {
  id: number;
  caption: string;
  image?: string;
  time: string;
};

// Define what the context provides
type AppContextType = {
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePost: () => void;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // post-related states
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  // ---- (1) Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  // ---- (2) Handle posting
  const handlePost = () => {
    if (!caption.trim() && !image) return;

    const newPost: Post = {
      id: Date.now(),
      caption,
      image: image || undefined,
      time: "Just now",
    };

    setPosts((prev) => [newPost, ...prev]); // ✅ safer state update
    setCaption("");
    setImage(null);
  };

  // ---- (3) Initialize state (optional)
  useEffect(() => {
    setCaption("");
    setImage(null);
    setPosts([]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        caption,
        setCaption,
        image,
        setImage,
        posts,
        setPosts,
        handleImageUpload,
        handlePost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
