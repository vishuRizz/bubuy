export default function VendorPage() {
  const vendors = [
    { name: 'Google', image: '/images/google.png', link: '/vendors/google' },
    { name: 'Microsoft', image: '/images/microsoft.png', link: '/vendors/microsoft' },
    { name: 'Frantech', image: '/images/fantech.png', link: '/vendors/fantech' },
    { name: 'Xiaomi', image: '/images/xiaomi.png', link: '/vendors/xiaomi' },
    { name: 'Huawei', image: '/images/huawei.png', link: '/vendors/huawei' },
    { name: 'Samsung', image: '/images/samsung.png', link: '/vendors/samsung' },
    { name: 'Mcdodo', image: '/images/mcdodo.png', link: '/vendors/tesla' },
    { name: 'Apple', image: '/images/apple.png', link: '/vendors/apple' },
    { name: 'HP', image: '/images/hp.png', link: '/vendors/hp' },
    { name: 'Dell', image: '/images/dell.png', link: '/vendors/dell' },
    { name: 'Acer', image: '/images/acer.png', link: '/vendors/acer' },
    { name: 'Kingston', image: '/images/kingston.png', link: '/vendors/kingston' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8">
      {/* Large Image Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <img src="/images/vendortop.png" alt="Vendor Top" className="w-full h-60 object-cover rounded-lg" />
      </div>

      {/* Vendor Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">Vendor</h2>
      </div>

      {/* Vendor Logos Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {vendors.map((vendor, index) => (
          <a href={vendor.link} key={index}>
            <div className="rounded-lg shadow-md bg-white p-4 cursor-pointer hover:shadow-lg text-center">
              <img src={vendor.image} alt={vendor.name} className="w-full h-20 object-contain mb-2" />
              <span className="text-sm font-medium">{vendor.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
