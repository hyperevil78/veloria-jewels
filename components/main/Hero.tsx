import Image from "next/image";
import Link from "next/link"

const Hero = () => {
  return (
      <div className="relative h-[70vh] w-full bg-gray-900 text-white md:h-[80vh]">
           {/* Background Image Placeholder */}
           <Image width={5000}
           height={5000}
             src="/images/hero2.webp"
             alt="Elegant jewellery display"
             className="absolute inset-0 h-full w-full object-cover opacity-55"
           />
           
           {/* Content */}
           <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
             <h1 className="mb-4 font-serif font-bold text-4xl tracking-tight md:text-6xl lg:text-7xl text-amber-300">
               VELORIA
             </h1>
             <p className="mb-8 max-w-lg text-lg font-light text-white md:text-xl">
               Discover exquisite jewellery, crafted to perfection for your unforgettable moments.
             </p>
             <a
               href="#"
               className="bg-white px-8 py-3 font-semibold text-black transition-all duration-300 hover:bg-amber-500 hover:text-white rounded-md"
             >
               Shop The Collection
             </a>
           </div>
         </div>
  )
}

export default Hero
