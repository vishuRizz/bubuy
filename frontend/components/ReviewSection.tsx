const ReviewSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-[100px]">
        {/* Tabs Section */}
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="text-2xl font-semibold">Description</h2>
          <h2 className="text-2xl font-semibold text-gray-400">|</h2>
          <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {/* Review 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-300 rounded-full h-12 w-12"></div>
                <div>
                  <p className="text-lg font-semibold">Mike Johnson</p>
                  <p className="text-gray-500">5m</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-lg">★★★★★</span>
              </div>
            </div>
            <p className="text-gray-700">
              I've been using the Mi Band 3 for a couple of weeks now, and I'm
              thoroughly impressed. The device offers a sleek design and a
              comfortable fit, making it easy to wear all day. Its OLED touch
              display is bright and responsive, allowing me to view
              notifications, track my steps, and monitor my heart rate
              effortlessly.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Reply</button>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-300 rounded-full h-12 w-12"></div>
                <div>
                  <p className="text-lg font-semibold">Mike Johnson</p>
                  <p className="text-gray-500">5m</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-lg">★★★★★</span>
              </div>
            </div>
            <p className="text-gray-700">
              The battery life is exceptional; I only need to charge it once
              every 20 days or so. For its price point, the Mi Band 3 delivers
              outstanding value with reliable performance and useful fitness
              tracking features. Highly recommended for anyone looking for an
              affordable yet efficient fitness tracker.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Reply</button>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-gray-700">Your Name:</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-gray-100 rounded-lg p-3 mt-1"
              />
            </div>
            <div>
              <label className="text-gray-700">Your Email:</label>
              <input
                type="email"
                placeholder="person@gmail.com"
                className="w-full bg-gray-100 rounded-lg p-3 mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700">Write your review:</label>
            <textarea
              placeholder="Write your review..."
              className="w-full bg-gray-100 rounded-lg p-3 mt-1 h-32"
            ></textarea>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <label className="text-gray-700">Your Ratings:</label>
            <span className="text-gray-500 text-lg">☆☆☆☆☆</span>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
            Post Review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L9.75 12l7.5 5.25V6.75z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
