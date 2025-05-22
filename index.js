import Head from 'next/head'

export default function Home() {
  const products = [
    {
      name: "iPhone X",
      price: "K3,500",
      description: "Apple iPhone X - 64GB, Face ID, Super Retina Display.",
      image: "/images/iphone-x.jpg"
    },
    {
      name: "Samsung Galaxy A32",
      price: "K3,900",
      description: "Samsung A32 - 128GB, Quad Camera, Long Battery Life.",
      image: "/images/samsung-a32.jpg"
    },
  ];

  return (
    <div>
      <Head>
        <title>Mobi-Lite Zambia</title>
      </Head>
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-4">Mobi-Lite Zambia</h1>
        <p className="mb-8">Phones & Accessories at Affordable Prices</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-green-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
        <footer className="mt-12 border-t pt-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mobi-Lite Zambia. All rights reserved.</p>
          <p>Email: info@mobi-litezm.com | Phone: +260 779 837 079</p>
        </footer>
      </main>
    </div>
  );
}
