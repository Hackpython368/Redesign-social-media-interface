import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function emailEntered (e : React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }

    function passwordEntered (e : React.ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value)
    }

    function formHandler (e : React.SubmitEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(email)
        console.log(password)
    }


  return (
    <>
        <div className='w-full h-full flex flex-col justify-end'>
            <div className='w-full h-[80%] dark:bg-white rounded-t-4xl bg-blue-300'>
                    <div className='flex flex-col justify-end items-center gap-3 h-[15%] pt-30'>
                        <h1 className='text-6xl font-black font-[Open_Sans]'>Login</h1>
                        <p className='dark:text-gray-400 text-white font-bold'>Let's get you in</p>
                    </div>

                    <div className='h-[25%] flex flex-col p-5 items-center gap-5'>
                        <button className='w-[90%] border-2 dark:border-gray-200 border-white h-15 rounded-full flex items-center justify-center gap-5'>
                             <svg className='w-8' viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47"></path><path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4"></path><path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00"></path><polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"></polygon><path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435"></path><polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"></polygon><path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4"></path></g></svg>
                             Login with Google
                             </button>
                        <button className='w-[90%] border-2 dark:border-gray-200 border-white h-15 rounded-full flex items-center justify-center gap-5'>
                            <svg className='w-8' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg> 
                            Login with GitHub
                            </button>
                    </div>

                    <div className='flex justify-evenly items-center px-5'>
                        <div className='w-[40%] dark:bg-gray-200 bg-white h-0.5 rounded-full'></div>
                        <div>
                            <h2 className='dark:text-gray-400  text-white'>OR</h2>
                        </div>
                        <div className='w-[40%] dark:bg-gray-200 bg-white h-0.5 rounded-full'></div>
                    </div>

                    <div className='flex justify-center items-center pt-5'>

                    <form className='w-full flex flex-col items-center gap-5' onSubmit={formHandler}>
                        <input onChange={emailEntered} value={email} type="email" placeholder='Enter email or username....' className='text-2xl p-2 py-4 outline-none dark:text-black dark:placeholder:text-gray-400 placeholder:text-white text-white border dark:border-gray-400 border-white rounded w-[80%]' />
                        <div className='w-[80%]'>

                        <input onChange={passwordEntered} value={password} type="password" placeholder='Enter password...' className='text-2xl p-2 py-4 outline-none dark:text-black text-white dark:placeholder:text-gray-400 placeholder:text-white border dark:border-gray-400 border-white rounded w-full ' />
                        <p className='text-gray-400 hover:text-blue-700 inline'>Forget password?</p>
                        </div>

                        <button className='w-[80%] p-4 rounded dark:bg-blue-600 bg-green-400 text-white border-white border'>Login</button>
                    </form>
                    </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage