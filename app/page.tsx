import Image from "next/image";
import Hero from "@/components/main/Hero";
import Category from "@/components/main/Catergory"; 
import Featured from "@/components/main/Featured";



export default function Home() {
  return (
    <div>
      <Hero/>
      <Category/>
      <Featured/>
    </div>


  );
}
