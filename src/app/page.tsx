import TopNav from '@/components/topNav'
import Wrapper from '@/container/Wrapper'

const Home = () => {
  return (
    <div className='wrapper bg-cover overflow-x-hidden max-h-screen h-full  bg-no-repeat bg-center'>
      <TopNav/>
      <Wrapper/>
    </div>
  )
}

export default Home
