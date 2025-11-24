"use client"
// import Link from "next/link"

const Category = () => {
  const categories = [
    { name: 'Rings', path: '/rings', image: '/category/rings/r1.webp' },
    { name: 'Necklaces', path: '/necklace', image: '/category/necklaces/n1.webp' },
    { name: 'Earrings', path: '/earrings', image: '/category/earrings/e1.webp' },
    { name: 'Bracelets', path: '/bracelets', image: '/category/bracelets/b1.webp' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-black md:text-4xl">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a 
              href={category.path} 
              key={category.name} 
              className="group block" // Added block to ensure the whole area is clickable
             
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-center text-lg font-medium text-black">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category