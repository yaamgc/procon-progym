import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import "highlight.js/styles/github-dark.css";
import { Link, useParams } from 'react-router';
const markdownFiles = import.meta.glob("./slides/*/*.md",{
  query: "?raw",
  import: "default",
  eager: true,
});

export default function Slide(){
  const { id,course } = useParams();
  const [page,setPage] = useState(1);
  const totalPages = Object.keys(markdownFiles).filter(
    path => path.startsWith(`./slides/${course}/${id}-`) && path.endsWith('.md')
  ).length; //ファイル名の配列
  const markdown = markdownFiles[`./slides/${course}/${id}-${page}.md`];
  if(!markdown){
    return <h1>{}</h1>
  }
  return (
    <div className="prose text-xl markdown-content mt-10 w-max-100 w-[80%] mb-10 p-5 pr-15 bg-white rounded-xl m-auto">
      <title>PROGYM | SLIDES</title>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{markdown}</ReactMarkdown>
      <div className="mt-4 flex justify-center">
        {
          page!==1 ?
            <button className='m-2 bg-green-500 text-white rounded-xl p-2 mb-5' onClick={()=>setPage(page-1)}>前に戻る</button>
          :
            <button className='m-2 bg-gray-400 text-white rounded-xl p-2 mb-5'>前に戻る</button>
        }
        {
          page!==totalPages ?
          <button className='m-2 bg-green-500 text-white rounded-xl p-2 mb-5' onClick={()=>setPage(page+1)}>次に進む</button>
          :
          <Link to={`/${course}`}>
          <button className='m-2 bg-blue-400 text-white rounded-xl p-2 mb-5'>終了する</button>
          </Link>
        }
      </div>
      <p className='text-center'>{page}/{totalPages}</p>      
    </div>
  )
}