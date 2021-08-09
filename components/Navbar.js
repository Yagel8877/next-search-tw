import Link from 'next/link';

const navbar = () => {
    return ( 
        <nav id="mynav" className="top-0 inset-x-0 fixed pb-4 border-solid text-white">
            <ul className="flex gap-3 text-xl">
                <li className='border-2 border-black rounded-md p-1'><Link href='/' ><a>Home</a></Link></li>
                <li className='border-2 border-black rounded-md p-1'><Link href='/page2' ><a>page2</a></Link></li>
                <li className='border-2 border-black rounded-md p-1'><Link href='/page3' ><a>page3</a></Link></li>
            </ul>
        </nav>


     );
}
 
export default navbar;