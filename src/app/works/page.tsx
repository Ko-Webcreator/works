import React from "react";
import pageStyles from "./page.module.scss";
import Work from "@/components/pages/works/work";

const page = () => {
 return (
  <div className={pageStyles.wrap}>
   <Work
    title="YOMcoma Web"
    description="短い時間で短いマンガをもっと楽しめる、ショートマンガ専用サービス"
    imgSrc="/yomcoma.png"
    technologyStack="Next.js(Pages router), NestJS, MySQL, GCP(主にAppEngine, CloudStorage),
      外部API(OpenAI, Kyash)"
    tasks="グループチャット機能、作品画像一括アップロード、AIとOCRを使用した作品タイトルと説明の自動生成機能、Kyashによる送金システム"
   />
   <Work
    title="Creator Profile"
    description="かんたんな質問に答えるだけで、あなただけのプロフ帳が無料で作れます。更にファンによるファンアートやコメント投稿、作品展示など可能！"
    imgSrc="/creatorProfile.png"
    technologyStack="Next.js(App router), NextAuth, Vercel Postgres, GCP(CloudStorage), 外部API(OpenAI)"
    tasks="認証、プロフィールに関する入力フォームの実装、OGP画像の自動生成、ダッシュボードの実装、Next.jsのストリーミングを使用したプロフィールページの実装、英語のプロフィールページ自動生成"
   />
  </div>
 );
};

export default page;
