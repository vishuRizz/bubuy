function SimilarProducts() {
  const products = [
    {
      name: "Oppo F1",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-13%",
      image: "/images/oppo-f1.jpg",
    },
    {
      name: "Huawei Tablet",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-13%",
      image: "/images/huawei-tablet.jpg",
    },
    {
      name: "iWatch Series 5",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-13%",
      image: "/images/iwatch-series-5.jpg",
    },
    {
      name: "Samsung Z Flip",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-13%",
      image: "/images/samsung-z-flip.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-[130px] my-10">
      <h2 className="text-3xl font-bold mb-8">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg p-4 relative flex flex-col items-center"
          >
            <span className="bg-gray-800 text-white text-sm rounded-full px-2 py-1 absolute top-2 left-2">
              {product.discount}
            </span>
            <div className="bg-gray-300 rounded-lg h-54 w-full mb-4">
              <img
                src={product.image} // Use the image from the product object
                alt={product.name}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <h3 className="text-lg font-medium text-center">{product.name}</h3>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <span className="line-through text-gray-500">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-black font-semibold">
                ${product.discountedPrice.toFixed(2)}
              </span>
              <button className="bg-gray-100 text-black p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;