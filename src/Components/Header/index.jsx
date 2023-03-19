import React, { useState } from 'react'

function index() {
    const [isMenu, setIsMenu] = useState(false);

    const handleToggleMenu = () => {
        setIsMenu(!isMenu);
    }

    return (
        <div className='w-full flex items-center justify-center absolute container-padding'>
            <div className='max-w-[1200px] w-full flex justify-between h-68 items-center'>
                <div className='text-white font-alata text-36 font-bold'>
                    <img src="./logo.svg" alt="Logo" />
                </div>

                <nav className='block md:hidden'>
                    <button onClick={handleToggleMenu}>
                        <img src="./icon-hamburger.svg" alt="Abrir Menu" />
                        {isMenu && (
                            <div className='text-white transition-all z-10 fixed bg-black w-[100vw] h-full top-0 left-0 container-padding'>
                                <div className='flex w-full items-center justify-between h-68'>
                                    <img src="./logo.svg" alt="Logo" />

                                    <button onClick={handleToggleMenu}>
                                        <img className='w-[24px] h-[24px] fill-white' src="./icon-close.svg" alt="Fechar menu" />
                                    </button>
                                </div>


                                <div className='flex flex-col justify-center h-[80%]'>
                                    <ul className={'flex items-start flex-col gap-2'}>
                                        <li>
                                            <a className='header-a group' href="#">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a className='header-a group' href="#">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a className='header-a group' href="#">
                                                Events
                                            </a>
                                        </li>
                                        <li>
                                            <a className='header-a group' href="#">
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a className='header-a group' href="#">
                                                Support
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </button>
                </nav>

                <nav className='hidden md:block'>
                    <ul className='text-white flex items-center gap-9'>
                        <li>
                            <a className='header-a group' href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className='header-a group' href="#">
                                Careers
                            </a>
                        </li>

                        <li>
                            <a className='header-a group' href="#">
                                Events
                            </a>
                        </li>
                        <li>
                            <a className='header-a group' href="#">
                                Products
                            </a>
                        </li>
                        <li>
                            <a className='header-a group' href="#">
                                Support
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default index;