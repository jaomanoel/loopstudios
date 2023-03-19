import React from 'react'

function Footer() {
    return (
        <div className='bg-black container-padding py-[10rem] md:py-16 w-full flex justify-center items-center'>
            <div className='max-w-[1200px] w-full flex flex-col gap-[6rem] md:gap-14 items-center justify-center'>
                <div className='md:w-full flex items-center justify-between'>
                    <img src="./logo.svg" alt="Logo" />

                    <div className='hidden md:flex items-center gap-4'>
                        <a href="#">
                            <img src="./icon-facebook.svg" alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src="./icon-twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#">
                            <img src="./icon-pinterest.svg" alt="Pinterest" />
                        </a>
                        <a href="#">
                            <img src="./icon-instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>

                <div className='md:w-full flex items-start justify-between'>
                    <nav>
                        <ul className='text-white flex flex-col md:flex-row items-center gap-9'>
                            <li>
                                <a className='footer-a' href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className='footer-a' href="#">
                                    Careers
                                </a>
                            </li>

                            <li>
                                <a className='footer-a' href="#">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a className='footer-a' href="#">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a className='footer-a' href="#">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <p className='hidden md:block text-dark-gray text-[1.4rem]'>
                        © 2021 Loopstudios. All rights reserved.
                    </p>
                </div>

                <div className='md:hidden flex items-center justify-center flex-col gap-8'>
                    <div className='flex items-center gap-8'>
                        <a href="#">
                            <img className='w-[3.2rem] h-[3.2rem]' src="./icon-facebook.svg" alt="Facebook" />
                        </a>
                        <a href="#">
                            <img className='w-[3.2rem] h-[3.2rem]' src="./icon-twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#">
                            <img className='w-[3.2rem] h-[3.2rem]' src="./icon-pinterest.svg" alt="Pinterest" />
                        </a>
                        <a href="#">
                            <img className='w-[3.2rem] h-[3.2rem]' src="./icon-instagram.svg" alt="Instagram" />
                        </a>
                    </div>

                    <p className='text-dark-gray text-[2rem]'>
                        © 2021 Loopstudios. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;