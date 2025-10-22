import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";

// ---- (1) Define the Post type
type Post = {
  id: number;
  caption: string;
  image?: string;
  time: string;
  liked?: boolean;
  likes?: number; // track likes per post
};

// ---- (2) Define Friend type
type Friend = {
  id: number;
  name: string;
  profilePic?: string;
};

// ---- (3) Define what data/functions the context provides
type AppContextType = {
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePost: () => void;
  imagesAdded: File[];
  setImagesAdded: React.Dispatch<React.SetStateAction<File[]>>;
  handleLikes: (postId: number) => void;
  totalLikes: number;
  friends: Friend[];
  addFriend: (friend: Friend) => void;
};

// ---- (4) Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // ---- (5) States
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [imagesAdded, setImagesAdded] = useState<File[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]); //  friend list state

  // ---- (6) Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);

    setImagesAdded((prev) => [...prev, file]);
  };

  // ---- (7) Handle new post creation
  const handlePost = () => {
    if (!caption.trim() && !image) return;

    const newPost: Post = {
      id: Date.now(),
      caption,
      image: image || undefined,
      time: "Just now",
      liked: false,
      likes: 0,
    };

    setPosts((prev) => [newPost, ...prev]);
    setCaption("");
    setImage(null);
  };

  // ---- (8) Handle likes for a specific post
  const handleLikes = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const isLiked = post.liked ?? false;
          const updatedLikes = isLiked
            ? (post.likes ?? 0) - 1
            : (post.likes ?? 0) + 1;
          return { ...post, liked: !isLiked, likes: updatedLikes };
        }
        return post;
      })
    );
  };

  // ---- (9) Calculate total likes across all posts
  const totalLikes = posts.reduce((sum, post) => sum + (post.likes || 0), 0);

  // ---- (10) Add friend function
  const addFriend = (friend: Friend) => {
    setFriends((prev) => {
      // prevent duplicates
      if (prev.some((f) => f.id === friend.id)) return prev;
      return [...prev, friend];
    });
  };

  // ---- (11) Reset on mount
  useEffect(() => {
    setCaption("");
    setImage(null);
    setPosts([]);
    setImagesAdded([]);
    setFriends([]); // clear friend list
  }, []);

  // ---- (12) Provide values
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
        imagesAdded,
        setImagesAdded,
        handleLikes,
        totalLikes,
        friends,
        addFriend,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ---- (13) Custom hook to use the context
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
