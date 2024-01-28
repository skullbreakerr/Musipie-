'use client';
import './components.css'
export default function Nav({width}){
  
  return(
    <>
    <div className='z-1'>
      <div className='flex navbar bg-gray-900 pl-1 items-center justify-around'>
        <div className='flex  w-full pl-1 items-center'>
        <img src="https://firebasestorage.googleapis.com/v0/b/skull-candy-48fae.appspot.com/o/logo.png?alt=media&token=e28cd3c6-39e4-4f4d-b07f-8b8824d173df" className='logo'/>
        <h1 className='title text-white text-bold text-[24px] sm:text-[34px] md:text-[44px] lg:text-[54px] xl:text-[64px] pt-3 '>Musipie</h1>
        </div>
        {( width )?<></>:<> <LaptopUI /> </>}
      </div> 
    </div>
    </>
  )
}
const LaptopUI=()=>{
  return(
    <>
    <div className=" flex  w-fit items-center rounded-[9px] bg-black border border-gray-800  searchbar">
      
      <input className="searchInput rounded-[9px] text-white  bg-gray-800 " placeholder=" eg- Ordinary person, faded, Taaj etc." onChange={(e)=>{ }}></input><span className="material-symbols-outlined right-0 text-purple-700 p-1 right-0">search</span></div>
    </>
  )
}
export const MobileUI = ({clickEvent})=>{
 
  return(
    <>
    <div className='fixed bottom-0 '>
    <div className='flex items-center justify-around  border border-gray-700 border-b-0 border-x-0 border-t-1 rounded-lg h-[50px] w-screen'>
    
      <button className='mobileNav' onClick={(e)=>clickEvent('home')}>
      <span className=" material-symbols-outlined ">home</span>Home</button>  
      <button className='mobileNav' onClick={(e)=>clickEvent('search')}>
       <span className="material-symbols-outlined">manage_search</span>Search</button>  
      <button className='mobileNav' onClick={(e)=>clickEvent('library')} >
      <span className="material-symbols-outlined">library_music</span>Library</button>  
    
    </div>
    </div>
    </>
  )
}