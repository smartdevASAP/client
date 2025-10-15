function Feed() {
  return (
    <div>
      <p className="text-2xl font-bold text-gray-600">Feed</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="h-[200px] w-full rounded-md bg-gray-200" />
          ))}
      </div>
    </div>
  );
}

export default Feed;
