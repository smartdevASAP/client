import { useApp } from "../context/postContext";
import { Share2, Edit3 } from "lucide-react";

function Home() {
  const { imagesAdded, posts, totalLikes, friends } = useApp();
  const username = localStorage.getItem("username");
  return (
    <>
      {/* --- Profile Info Section --- */}
      <div className="flex flex-col items-center text-center p-6 space-y-8">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
            className="w-20 h-20 rounded-full mx-auto object-cover"
            alt=""
          />
        </div>
        <p className="text-sm text-gray-500 ">{username}</p>

        <section className="flex justify-center items-center gap-8 md:gap-16">
          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">
              {posts.length}
            </p>
            <h1 className="text-sm text-gray-500">Posts</h1>
          </div>
          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">
              {totalLikes}
            </p>
            <h1 className="text-sm text-gray-500">likes</h1>
          </div>
          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">
              {friends.length}
            </p>
            <h1 className="text-sm text-gray-500">Friends</h1>
          </div>
        </section>

        <div className="max-w-[400px]">
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            natus beatae dolorum necessitatibus
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          {/* Share Profile Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-sm hover:bg-blue-700 active:scale-95 transition-all">
            <Share2 size={18} />
            <span className="text-sm font-medium">Share Profile</span>
          </button>

          {/* Edit Profile Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
            <Edit3 size={18} className="text-gray-600" />
            <span className="text-sm font-medium">Edit Profile</span>
          </button>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="h-[2px] bg-gray-200 w-full" />

      {/* --- Posts Grid --- */}
      <div className="mt-4">
        <h1 className="text-2xl text-gray-600 font-bold mb-3">Posts</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {imagesAdded.length === 0 ? (
            <p className="text-gray-400 text-sm col-span-full text-center">
              No images yet
            </p>
          ) : (
            imagesAdded.map((img, i) => (
              <img
                key={i}
                src={URL.createObjectURL(img)}
                alt=""
                className="rounded-lg object-cover w-full h-40"
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
