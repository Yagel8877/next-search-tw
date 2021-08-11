import { black } from "colorette";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.onscroll = function() {myFunction()};
    function myFunction(){
    console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop > 20){
        let nav = document.getElementById('mynav');
        nav.classList.add('bg-white')
        nav.classList.add('text-black')
        nav.classList.remove('text-white')
      }
      else{
        let nav = document.getElementById('mynav');
        nav.classList.remove('bg-white')
        nav.classList.remove('text-black')
        nav.classList.add('text-white')
        
      }

    }

    
    return () => {
      console.log('working')
    }
  })
  return (
    <div>
    <div className='pt-[60px] grid gap-10 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1'>
      <div className="bg-white border-[1px] border-black text-md p-4 text-black">hh</div>
      <div className="bg-white border-[1px] border-black text-md p-4 text-black">hh</div>
      <div className="bg-white border-[1px] border-black text-md p-4 text-black">hh</div>
      <div className="bg-white border-[1px] border-black text-md p-4 text-black">hh</div>
      <div className="bg-white border-[1px] border-black text-md p-4 text-black">hh</div>
    </div>
    <div className=''> 

    </div>
    </div>
  )
}
