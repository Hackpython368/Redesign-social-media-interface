import Themetrigger from './Themetrigger/Themetrigger';
import LoadingAnimation from './LoadingAnimation/LoadingAnimation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const LoadingPage = () => {

    const loadingPage = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const page = loadingPage.current

        if (!page) return

        const lastChild = page.lastElementChild ?? page.lastChild

        if (lastChild) {
            gsap.to(lastChild, {
                delay: 7,
                opacity: 0
            })
        }

        gsap.to(page, {
            delay: 8,
            height: 0,
            duration: 2,
            ease: 'power4.out'
        })
    })


    return (
        <>
            <div className='w-full h-20 flex justify-end items-center p-5 fixed top-0'>
                <Themetrigger />
            </div>
            <div ref={loadingPage} className='h-full w-full flex flex-col justify-evenly overflow-hidden'>
                <div className='flex flex-col gap-10 items-center justify-center h-full w-full relative'>
                    <LoadingAnimation />
                </div>

            </div>
        </>
    )
}

export default LoadingPage