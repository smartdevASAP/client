import { ImagePlus, Send } from "lucide-react";
import { useApp } from "../context/postContext";

export default function Posts() {
  // Destructure all needed context values
  const {
    caption,
    setCaption,
    image,
    setImage,
    posts,
    handleImageUpload,
    handlePost,
    imagesAdded, // 👈 now we consume this from context
  } = useApp();

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Create Post Section */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Create a Post
        </h2>

        {/* Caption input */}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-2 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-200 outline-none text-sm mb-3"
          rows={3}
        />

        {/* Single preview image (if selected) */}
        {image && (
          <div className="mb-3 relative">
            <img
              src={image}
              alt="preview"
              className="w-full h-60 object-cover rounded-lg"
            />
            <button
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-white text-gray-600 rounded-full px-2 py-1 text-xs shadow hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        )}

        {/* ✅ Show all uploaded image files from imagesAdded */}
        {imagesAdded.length > 0 && (
          <div className="mb-3">
            <h3 className="text-sm font-medium text-gray-600 mb-1">
              Uploaded Files:
            </h3>
            <ul className="text-xs text-gray-500 list-disc pl-5">
              {imagesAdded.map((file, index) => (
                <li key={index}>{file.name}</li> // Display file name
              ))}
            </ul>
          </div>
        )}

        {/* Upload + Post buttons */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-blue-600 text-sm">
            <ImagePlus size={18} />
            <span>Add Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          <button
            onClick={handlePost}
            className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition"
          >
            <Send size={15} />
            Post
          </button>
        </div>
      </div>

      {/* Feed Section */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-400">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4"
            >
              <p className="text-gray-700 text-sm mb-3">{post.caption}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-64 object-cover rounded-lg mb-3"
                />
              )}
              <div className="flex gap-5 items-center text-xs">
                <p className="p-2 bg-pink-500 text-white rounded-sm">Like</p>
                <p className="p-2 bg-green-500 text-white rounded-sm">Share</p>
                <p className="p-2 bg-blue-500 text-white rounded-sm">Delete</p>
              </div>
              <div className="text-xs text-gray-400 mt-2">{post.time}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
