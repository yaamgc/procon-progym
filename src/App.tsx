import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import { auth, db } from "./firebase";
import Login from "./Login";
import HtmlMenu from "./AboutMe";
import Slide from "./slide";
import Top from "./top";
import { doc, getDoc } from "firebase/firestore";
import Works from "./works";
import { UserContext } from "./UserContext";
import AboutMe from "./AboutMe";

export default function App() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        const getNickname = async () => {

            if (!currentUser) return;
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNickname(docSnap.data().nickname);
            }
        }
        getNickname();
    }, [currentUser]);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
    }, [])
    const logout = async () => {
        await signOut(auth);
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!currentUser) {
        return <Login />;
    }
    return (<>
        <UserContext.Provider value={nickname}>

            <div className='bg-red-600 text-center'>
                <Link to='/'><p className='text-4xl text-white pt-3 font-bold mb-2'>PROGYM</p></Link>
                <p className='text-2xl text-white font-bold pb-4'>プロコンゼミ新入生教育用サイト（仮）</p>
                <div className="flex justify-center bg-red-700 text-white font-bold p-1 mb-2">
                    <p>{nickname}ようこそ！</p>
                    <button onClick={logout} className="ml-2 bg-red-800 pl-2 pr-2 rounded-xl">logout</button>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Top />} />
                <Route path='/works/:id' element={<Works />} />
                <Route path='/aboutme' element={<AboutMe />} />
                <Route path='/:course/:id' element={<Slide />} />
            </Routes>
        </UserContext.Provider>
    </>
    )
}