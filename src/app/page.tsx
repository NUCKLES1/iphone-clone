import Displaysection from "@/components/Displaysection.";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Soundsection from "@/components/Soundsection";
import WebgiViewer from "@/components/WebgiViewer";


export default function Home() {
  return (
    <main className="w-full block max-md:w-[100%]">
     <Nav />
     <Hero />
     <Soundsection />
     <Displaysection />
     <WebgiViewer />
    </main>
  );
}
