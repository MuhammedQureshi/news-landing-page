import Navbar from "@/app/components/Navbar";
import MainArticle from "@/app/components/MainArticle";
import SideArticles from "@/app/components/SideArticles";
import BottomArticles from "@/app/components/BottomArticles";

export default function Home() {
  return (
    <main className="lg:pt-26 mx-auto flex max-w-[calc(1110rem/16)] flex-col gap-8 px-4 pb-12 pt-6 sm:pt-20 lg:gap-12">
      <Navbar />
      <div className="md:flex md:flex-row">
      <MainArticle />
      <SideArticles />
      </div>
      <BottomArticles />
    </main>
  );
}