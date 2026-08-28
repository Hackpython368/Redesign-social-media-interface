import Themetrigger from './Themetrigger/Themetrigger';
import LoadingAnimation from './LoadingAnimation/LoadingAnimation';

const LoadingPage = () => {

    


    return (
        <>
            <div className='h-full w-full flex flex-col justify-evenly'>
                <div className='w-full h-20 flex justify-end items-center p-5'>
                    <Themetrigger />
                </div>
                <div className='flex flex-col gap-10 items-center justify-center h-full w-full '>
                    <LoadingAnimation />
                </div>

            </div>
        </>
    )
}

export default LoadingPage