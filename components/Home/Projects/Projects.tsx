import React from 'react'
import Image from 'next/image';

const Projects = () => {
    return (
        <div id="projects" className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                A small selection of my recent <br />
                <span className='text-cyan-300'>projects </span>
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                {/* Project 1: E-commerce */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <Image src='/images/p1.jpg' alt='E-commerce Shop' width={800} height={650} className='rounded-lg' />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                        E-commerce Shop
                    </h1>
                    <p className="pt-2 font-medium text-white/80">Apps, UI/UX</p>
                    <p className="pt-2 font-medium text-white/80">
                        If you want to see it , {' '}
                        <a
                            href="https://bisakolshop.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 underline hover:text-cyan-200"
                        >
                            Click Here
                        </a>
                    </p>
                </div>

                {/* Project 2: CPU Scheduling (New) */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    {/* Make sure to add your screenshot here, e.g., p2.jpg */}
                    <Image src='/images/cpu-sched.jpg' alt='SJF Scheduling' width={800} height={650} className='rounded-lg' />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                        SJF Non-Preemptive Scheduling
                    </h1>
                    <p className="pt-2 font-medium text-white/80">Web App, Algorithms</p>
                    <p className="pt-2 font-medium text-white/80">
                        If you want to see it , {' '}
                        <a
                            href="https://sjf-np.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 underline hover:text-cyan-200"
                        >
                            Click Here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects