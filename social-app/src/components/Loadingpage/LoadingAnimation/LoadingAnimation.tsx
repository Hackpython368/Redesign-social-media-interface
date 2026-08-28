import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'

const LoadingLogo = () => {
    
    const loadingRef = useRef(null);
    const loadingImg = useRef(null);
    const loadingBar = useRef(null);

    
    

    useGSAP(() => {
        let t1 = gsap.timeline()

        t1.from(loadingImg.current, {
            scale: 0,
            opacity: 0,
            ease: 'bounce.out',
            delay: 1
        })

        t1.from(loadingBar.current, {
            opacity: 0,
            scale: 0,
            delay: 1
        })

        t1.to(loadingRef.current, {
            x: '100%',
            duration: 5,
            delay: 1,
            ease: 'power4.out'
        })
    })

    return (
        <>
            <img src="/DevConnectLogo-removebg-preview.png" alt="" className='w-[30%]' ref={loadingImg} />
            <div ref={loadingBar} className='h-2 w-[80%] bg-blue-800 rounded-full overflow-hidden'>
                <div ref={loadingRef} className='h-3 w-full bg-yellow-300'></div>
            </div>
        </>
    )
}

export default LoadingLogo