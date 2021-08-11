import Link from 'next/link';

const navbar = () => {
    return ( 
        <nav id="mynav" className="top-0 inset-x-0 fixed pb-4 border-solid text-white ml-1">
            <ul className="flex gap-3 text-lg ">
                <Link href='/'><a className='select-none'><li className='border-2 border-black rounded-md p-1 flex justify-end gap-1 items-center'><p className='hidden md:block'>Home</p><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></li></a></Link>
                <li className='border-2 border-black rounded-md p-1'><Link href='/page2' ><a>page2</a></Link></li>
                <li className='border-2 border-black rounded-md p-1'><Link href='/page3' ><a>page3</a></Link></li>
            </ul>
        </nav>


     );
}
 
export default navbar;