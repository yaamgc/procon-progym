import { addDoc, collection, deleteDoc, doc, getDocs, query, where, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { db } from "./firebase";
import { useUser } from "./UserContext";

const getSafeHttpUrl = (value: unknown): string | null => {
    if (typeof value !== "string" || value.trim() === "") {
        return null;
    }

    try {
        const url = new URL(value.trim());
        return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
    } catch {
        return null;
    }
};

export default function Works() {
    const { id } = useParams();
    const nickname = useUser();
    const [works, setWorks] = useState<DocumentData[]>([]);

    useEffect(() => {
        const getWorks = async () => {
            const q = query(
                collection(db, "works"),
                where("id", "==", id)
            );
            const snapshot = await getDocs(q);
            setWorks(
                snapshot.docs.map(doc => (
                    {
                        docId:doc.id,
                        ...doc.data()
                    }
                ))
            );
        }
        getWorks();
    }, []);

    const [url,setUrl] = useState("");
    const [github,setGithub] = useState("");
    const [detail,setDetail] = useState("");

    const submitWork = async() => {
        const safeUrl = getSafeHttpUrl(url);
        const safeGithub = getSafeHttpUrl(github);
        if ((url.trim() !== "" && !safeUrl) || (github.trim() !== "" && !safeGithub)) {
            alert("URLには http:// または https:// で始まる有効なURLを入力してください。");
            return;
        }

        await addDoc(
            collection(db,"works"),{
                id: id,
                name: nickname,
                url: safeUrl ?? "",
                github: safeGithub ?? "",
                detail :detail
            }
        )
        setUrl("");
        setDetail("");
        alert("送信完了！");
        window.location.reload();
    }

    const deleteWork = async (docID: string) => {
        await deleteDoc(
            doc(db,"works",docID)
        );
        alert("削除完了！");
        window.location.reload();
    }

    //001とか
    return (
        <>
            <title>PROGYM | WORKS</title>
            <div className="prose text-xl markdown-content mt-10 w-max-100 w-[80%] mb-10 p-5 pr-10 pl-10 bg-white rounded-xl m-auto">
                <h2>完成品を共有する</h2>
                <input type="text" onChange={(e)=>setUrl(e.target.value)} value={url} placeholder="作品URL" className="border-2 border-gray-200 p-2 rounded-xl w-[92%] block mx-auto m-3" />
                <input type="text" onChange={(e)=>setGithub(e.target.value)} value={github} placeholder="Githubリンク" className="border-2 border-gray-200 p-2 rounded-xl w-[92%] block mx-auto m-3" />
                <input type="text" onChange={(e)=>setDetail(e.target.value)} value={detail} placeholder="説明（任意）" className="border-2 border-gray-200 p-2 rounded-xl w-[92%] block mx-auto m-3" />
                <button onClick={submitWork} className="bg-red-500  text-white rounded-xl p-1 w-20 ml-7 m-2">共有</button>
            </div>
            <div className="prose text-xl markdown-content mt-10 w-max-100 w-[80%] mb-10 p-5 pr-10 pl-10 bg-white rounded-xl m-auto">
                <h2>完成品を見る</h2>
                {
                    works.map((work) => {
                        const safeUrl = getSafeHttpUrl(work.url);
                        const safeGithub = getSafeHttpUrl(work.github);
                        return (
                            <div className="bg-slate-50 rounded-xl p-2 m-2">
                                <p>作品URL：{safeUrl ? <a href={safeUrl}>{work.url}</a> : work.url}</p>
                                <p>github：{safeGithub ? <a href={safeGithub}>{work.github}</a> : work.github}</p>
                                <p>{work.name} 作</p>
                                <p>説明：{work.detail}</p>
                                {
                                    nickname === work.name && (
                                        <button onClick={()=>deleteWork(work.docId)} className="bg-red-500 text-white w-20 rounded-xl ml-7">削除</button>
                                    )
                                }
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}