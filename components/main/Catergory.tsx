"use client"

import { GlowingEffect } from "../ui/Glowing-effect";

const Category = () => {
  const categories = [
    { name: 'Rings', path: '/rings', image: '/category/rings/r1.webp' },
    { name: 'Necklaces', path: '/necklace', image: '/category/necklaces/n1.webp' },
    { name: 'Earrings', path: '/earrings', image: '/category/earrings/e1.webp' },
    { name: 'Bracelets', path: '/bracelets', image: '/category/bracelets/b1.webp' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 ">
      <div className="container mx-auto max-w-7xl px-6 ">
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-black md:text-4xl">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {categories.map((category) => (
            <GlowingEffect
              key={category.name}
              blur={0}
              borderWidth={5}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              className="rounded-lg"
            >
              <div className="relative z-10">
                <a 
                  href={category.path} 
                  className="
                    group 
                    block 
                    backdrop-blur-md 
                    rounded-lg 
                    border 
                    border-white/40 
                    bg-white/30 
                    shadow-sm 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    hover:bg-white/40 
                    hover:border-white/60
                  "
                >
                  {/* Image */}
                  <div className="aspect-square w-full overflow-hidden ">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-black">
                      {category.name}
                    </h3>
                  </div>
                </a>
              </div>
            </GlowingEffect>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Category;
