import Articles from "@/components/pages/blog/Articles";
import blogStyles from "@/app/(blog)/blog.module.scss";
import ClientArticles from "@/components/pages/blog/ClientArticles";
import SideBar from "@/components/pages/blog/SideBar";

export default function Home() {
 return (
  <main className={blogStyles.wrap}>
   <div className={blogStyles.left}>
    <Articles linkType="articles" />
    <ClientArticles linkType="articles" />
   </div>
   <div className={blogStyles.right}>
    <SideBar />
   </div>
  </main>
 );
}
