import {
  Link,
} from "react-router";


export default function AboutMe() {
  return (
    <div className="w-[85%] max-w-180 m-auto bg-white p-2 rounded-xl shadow-xs mb-10">
      <title>PROGYM | 自己紹介サイトを作ろう</title>

        <div className="bg-yellow-400 rounded-xl p-2 m-2 shadow-xs text-center">
          <h1 className="text-3xl font-bold text-white m-2">自己紹介サイトを作ろう</h1>
        </div>
        <div className="flex">
          <h1 className="bg-yellow-100 ml-8 m-5 w-20 rounded-xl pb-1 text-center text-yellow-500 font-bold text-2xl">Day1</h1>
          <h1 className="mt-6 text-xl">HTMLとCSSで自己紹介サイトをつくる</h1>
        </div>
        <Link to='/aboutme/1'>
        <div className="border-yellow-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-yellow-500">1.はじめに</h1>
          <p className="ml-5 m-1">講座概要とHTML,CSS,VSCodeについて軽く説明します。</p>
        </div>
        </Link >
        <Link to='/aboutme/2'>
        <div className="border-yellow-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-yellow-500">2.VSCodeの導入</h1>
          <p className="ml-5 m-1">VSCodeを導入して開発環境を整えます。</p>
        </div>
        </Link>
        <Link to='/aboutme/3'>
        <div className="border-yellow-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-yellow-500">3.HTMLで基盤作成！</h1>
          <p className="ml-5 m-1">HTMLで自己紹介サイトの基盤を作成します。</p>
        </div>
        </Link>
        <Link to='/aboutme/4'>
        <div className="border-yellow-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-yellow-500">4.CSSでデザイン作成！</h1>
          <p className="ml-5 m-1">CSSでデザインを整えます。</p>
        </div>
        </Link>
        <Link to='/works/001'>
        <div className="bg-yellow-400 rounded-xl p-2 m-2 shadow-xs w-[40%] m-auto mb-5">
          <h1 className="font-bold mt-1 text-white text-[25px] text-center">完成品を共有＆見る</h1>
        </div>
</Link>
    </div>
  )
}