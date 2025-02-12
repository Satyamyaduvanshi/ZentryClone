import { useEffect, useRef, useState } from "react"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";

const navItems = ['Nexus','Valut','Prologue','About','Contact']

const Navbar = ()=>{
    const [isAudioPlaying,setIsAudioPlaying]=useState(false)
    const [isIndicatorActive,setIsIndicatorActive]=useState(false)

    const navContainer = useRef(null);
    const audioElementRef= useRef(null)

    const toggleAudtioIndicator = ()=>{
        setIsAudioPlaying(prev => !prev);
        setIsIndicatorActive(prev => !prev);
    }

    useEffect(()=>{
        
        if(isAudioPlaying){
            //@ts-ignore
            audioElementRef.current.play();
        }else{
            //@ts-ignore
            audioElementRef.current.pause();
        }

    },[isAudioPlaying])

    return (
        <div ref={navContainer}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all durtaion-700 sm:inset-x-6">
            <header className=" absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
                <div className="flex items-center gap-7">
                    {/* logo image  here*/}
                    <img src="/img/logo.png" alt="logo" className="w-10" />

                    <Button 
                    id="product-button"
                    title = "products"
                    rightIcon={<TiLocationArrow/>}
                    containerClass=" bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />

                </div>

                <div className="flex h-full items-center">
                    <div className="hidden md:block">
                        {navItems.map((item)=>(
                            <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                {item}
                            </a>
                        ))}
                    </div>

                    <button onClick={toggleAudtioIndicator} className="ml-10 flex items-center space-x-0.5">
                        <audio ref={audioElementRef} 
                        src="/audio/loop.mp3"
                        loop
                        className="hidden"
                        />

                         {[1,2,3,4].map((bar)=>(
                            <div key={bar}
                                 className={clsx("indicator-line", {
                                         active: isIndicatorActive,
                                    })}
                                 style={{animation: `${bar*0.1}s`}}
                            />
                        ))}

                    </button>

                </div>
               

            </nav>

            </header>

            
        </div>
    )
}

export default Navbar