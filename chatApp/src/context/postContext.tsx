import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";

// Define the Post type (structure of each post)
type Post = {
  id: number;
  caption: string;
  image?: string;
  time: string;
};

// Define what data and functions the context will provide
type AppContextType = {
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePost: () => void;
  imagesAdded: File[]; // 👈 store the actual image files
  setImagesAdded: React.Dispatch<React.SetStateAction<File[]>>; // 👈 expose setter if needed
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // ---- (1) Define all states
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [imagesAdded, setImagesAdded] = useState<File[]>([]); // 👈 new persistent array

  // ---- (2) Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert file to a preview image (Base64)
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);

    // Store the actual image file in state
    setImagesAdded((prev) => [...prev, file]); // 👈 append to existing images
    console.log("Images added so far:", imagesAdded);
  };

  // ---- (3) Handle posting logic
  const handlePost = () => {
    if (!caption.trim() && !image) return;

    const newPost: Post = {
      id: Date.now(),
      caption,
      image: image || undefined,
      time: "Just now",
    };

    // Add the new post to the top
    setPosts((prev) => [newPost, ...prev]);

    // Reset input fields
    setCaption("");
    setImage(null);
  };

  // ---- (4) Initialize states on mount (optional)
  useEffect(() => {
    setCaption("");
    setImage(null);
    setPosts([]);
    setImagesAdded([]);
  }, []);

  // ---- (5) Provide values to the entire app
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
        setImagesAdded, // 👈 you can also use this from other components
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ---- (6) Custom hook to use the context
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
