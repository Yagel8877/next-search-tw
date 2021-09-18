import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { useEffect } from 'react';

const navbar = () => {
    useEffect(() => {
        window.onscroll = function() {myFunction()};
        function myFunction(){
        console.log(document.documentElement.scrollTop)
          if(document.documentElement.scrollTop > 20){
            let nav = document.getElementById('mynav');
            nav.classList.add('bg-white')
            nav.classList.add('text-black')
            nav.classList.remove('text-white')
            console.log('should work')
          }
          else{
            let nav = document.getElementById('mynav');
            nav.classList.remove('bg-white')
            nav.classList.remove('text-black')
            nav.classList.add('text-white')
            
          }
    
        }
      })
    return ( 
        <nav id="mynav" className="top-0 w-[100%] fixed pb-4 border-solid text-white">
            <ul className="flex items-center gap-3 text-lg ">
                <Link href='/'><a className='select-none ml-1'><li className='border-2 border-black rounded-md p-1 flex gap-1 '><p className='hidden md:block'>Home</p><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></li></a></Link>
                <li className='border-2 border-black rounded-md p-1'><Link href='/page2' ><a>page2</a></Link></li>
                <li className='border-2 border-black rounded-md p-1'><Link href='/page3' ><a>page3</a></Link></li>
                <li className='border-2 border-black rounded-md p-1'><Link href='/search' ><a>Search</a></Link></li>
                
                <Menu as='div' className='relative mr-4 ml-auto p-2 text-black rounded-md border-black mt-1 shadow-md'>
                    <Menu.Button as='button' className=''>
                        <span>click me!</span>  
                    </Menu.Button>
                    <Menu.Items as='ul' className='absolute  border-2 mt-4 border-black '>
                        <Menu.Item as='li'>
                            {({active}) => (
                                <a className={`${active ? 'li-item-active' : 'li-item'}`} >hey</a>
                            )}
                            
                        </Menu.Item>
                        <Menu.Item as='li'>
                        {({active}) => (
                                <a className={`${active ? 'li-item-active' : 'li-item'}`} >he3y</a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </ul>
        </nav>


     );
}
 
export default navbar;