import React, { useEffect, useState } from 'react'

function Create() {
    const [images, setImages] = useState([
        {
            title: "DEEP EARTH",
            mobile: "./mobile/image-deep-earth.jpg",
            desktop: "./desktop/image-deep-earth.jpg"
        },
        {
            title: "NIGHT ARCADE",
            mobile: "./mobile/image-night-arcade.jpg",
            desktop: "./desktop/image-night-arcade.jpg"
        },
        {
            title: "SOCCER TEAM VR",
            mobile: "./mobile/image-soccer-team.jpg",
            desktop: "./desktop/image-soccer-team.jpg"
        },
        {
            title: 'THE ㅤ GRID',            
            mobile: "./mobile/image-grid.jpg",
            desktop: "./desktop/image-grid.jpg"
        },
        {
            title: "FROM UP ABOVE VR",
            mobile: "./mobile/image-from-above.jpg",
            desktop: "./desktop/image-from-above.jpg"
        },
        {
            title: "POCKET BOREALIS",
            mobile: "./mobile/image-pocket-borealis.jpg",
            desktop: "./desktop/image-pocket-borealis.jpg"
        },
        {
            title: "THE CURIOSITY",
            mobile: "./mobile/image-curiosity.jpg",
            desktop: "./desktop/image-curiosity.jpg"
        },
        {
            title: "MAKE IT FISHEYE",
            mobile: "./mobile/image-fisheye.jpg",
            desktop: "./desktop/image-fisheye.jpg"
        },
    ])

    return (
        <div className='w-full flex items-center justify-center container-padding'>
            <div className='max-w-[1200px] w-full flex justify-cente md:justify-between flex-col'>
                <div className='flex items-center w-full justify-center md:justify-between pb-24'>

                    <h2 className='text-[5.4rem] font-thin smd:pb-0'>OUR CREATIONS</h2>

                    <a className='hidden md:block px-12 py-4 border-solid border-black border-2 font-bold text-16 font-josefin tracking-widest
                    hover:bg-black hover:text-white transition-all' href="#">
                        SEE ALL
                    </a>
                </div>

                <div className={`grid grid-rows-[${images.length}] grid-cols-1 md:grid-rows-2 md:grid-cols-4 gap-14 md:gap-[3.8rem place-items-center`}>
                    {images.map((item) => (
                        <a key={item.title} className="w-full md:w-[27rem] hover:bg-[#d9d9d9]" href="#">

                            <div className='w-full h-[18rem] relative md:hidden bg-no-repeat bg-center bg-cover' 
                            style={{ backgroundImage: `url(${item.mobile})` }}>

                                <div className='w-full h-full absolute top-0 left-0 opacity-60 bg-gradient-to-r from-[#101010] to-[transparent] '>
                                </div>

                                <h3 className='absolute top-1/3 left-12 text-white text-[4rem] w-[180px] font-thin leading-none'>
                                    {item.title}<br/>
                                </h3>
                            </div>

                            <div className='w-full h-[45rem] relative hidden md:block bg-no-repeat bg-center bg-cover' 
                            style={{ backgroundImage: `url(${item.desktop})` }}>

                                <div className='w-full h-full absolute top-0 left-0 opacity-60 bg-gradient-to-t from-[#101010] to-[transparent] '>
                                </div>

                                <h3 className='absolute top-3/4 left-12 text-white text-[4rem] w-[180px] font-thin leading-none'>
                                    {item.title}<br/>
                                </h3>

                            </div>
                        </a>
                    ))}
                </div>

                <div className='flex items-center justify-center pt-14 pb-36 md:hidden'>
                    <a href="#" className='px-16 py-6 border-solid border-black border-2 font-bold text-16 font-josefin tracking-widest
                    hover:bg-black hover:text-white transition-all'>SEE ALL</a>
                </div>
            </div>
        </div>
    )
}

export default Create;