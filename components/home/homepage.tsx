import Navbar from "../headers/Navbar"
function Homepage() {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center h-screen dark:bg-black bg-gray-50'>
        <h1 className="font-bold text-2xl text-pink-200">Homepage</h1>
        </div>
    </div>
  )
}

export default Homepage

