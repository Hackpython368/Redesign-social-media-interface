import LoadingPage from './components/Loadingpage/LoadingPage';
import LoginPage from './components/Loginpage/LoginPage';

const App = () => {


  return (
    <>
    <div className='w-screen h-screen bg-white dark:bg-gray-600 overflow-hidden'>
      <LoadingPage />
      <LoginPage />
    </div>
    </>
  )
}

export default App