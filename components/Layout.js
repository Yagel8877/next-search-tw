import Navbar from "./Navbar";


const Layout = ({ children }) => {
    
    return (
        <div className='bg-indigo-300'>
                
                <Navbar />
                <main className='pt-10'>{ children }</main>
            
        </div>
        
        );
}
 
export default Layout;