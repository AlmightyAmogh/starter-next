'use client'

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn , signOut , useSession , getProviders} from 'next-auth/react'

const Navbar = () => {
    const {data : session} = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
      const setUserProviders = async() =>{
        const response  = await getProviders();
        setProviders(response);
      }
      setUserProviders();
    }, [])
    
  return (
    <nav className="flex-between w-full mb-15 pt-3">
        <Link href='/' className="flex flex-center gap-2">
            <span className="logo_text">AnimeList</span>
        </Link>
        {/* Desktop Nav */}
        <div className="sm:flex hidden">
            {
                session?.user ? (<div className="flex gap-2 md:gap-5 flex-center">
                    <Link href='/animes' className="">Anime</Link>
                    <Link href='/mangas' className="">Manga</Link>
                    <button type="button" onClick={signOut} className=" flex items-center justify-center text-center">Sign Out</button>
                    <Link href='/profile'>
                        <Image src={session?.user.image}height={35} width={35} className="rounded-full flex-center" alt='profile'/>
                    </Link>
                </div>) : (<>{providers && Object.values(providers).map((provider)=>(
                    <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="black_btn">Sign In</button>
                )

                )} </>)
            }
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden flex relative">
            {session?.user ? (<div className="flex" >
            <Image src={session?.user.image} height={35} width={35} className="rounded-full flex-center" alt='profile'
            onClick={()=>setToggleDropdown((prev)=>!prev)}
            />
            {toggleDropdown && (
                <div className="dropdown">
                    <Link href= '/profile' className="dropdown_link" onClick={()=>setToggleDropdown(false)}>My Profile</Link>
                    <Link href= '/animes' className="dropdown_link" onClick={()=>setToggleDropdown(false)}>Animes</Link>
                    <Link href= '/mangas' className="dropdown_link" onClick={()=>setToggleDropdown(false)}>Mangas</Link>
                    <button type="button" className="black_btn mt-5 w-full" onClick={()=> {setToggleDropdown(false); signOut();}}>Sign Out</button>
                </div>
            )}
            </div>) :
             (<>{providers && Object.values(providers).map((provider)=>(
                <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="">Sign In</button>
            )

            )}</>)}
        </div>
    </nav>
  )
}

export default Navbar