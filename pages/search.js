import axios from "axios";
import { useState, useEffect} from "react";

const Search = () => {
    const [APIdata, setAPIdata] = useState([])
    const [SearchInput, setSearchInput] = useState(0)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => { setAPIdata(res.data)})
        
    }, [])

    const showDiv = (arg) =>{
        const div = document.getElementById(`${arg}`)
            if(div.classList.contains('hidden')){
                div.classList.add('block')
                div.classList.remove('hidden')
            
            }else{
                div.classList.add('hidden')
                div.classList.remove('block')
            
            }

            
            
    }

    const searchItems = (SearchValue) => {
        setSearchInput(SearchValue)
        
    }

       const FilteredData =  APIdata.filter((item) => { 
            // return  Object.values(item).join().includes(SearchInput.toLowerCase())})
            // console.log(Object.values(item)[1])})
            // return  Object.values(item)[1].toString() === SearchInput.toString()})
            return JSON.stringify(item.id) === SearchInput.toString() })
            
    
    
    if(SearchInput === 0 || SearchInput === '') return (
        <div className='mt-5 '>
            <input onChange={(e)=> searchItems(e.target.value)} placeholder='Enter an ID'></input>
                <div className=' grid  gap-2'>
                {APIdata.map((item) => {
                    return(
                        <div key={item.id} className='mt-5 border-2 border-black'>
                        <div>{item.id}</div>
                        <p><b>{item.title.substr(0, 20)}...</b></p>
                        <div>
                        <button onClick={() => showDiv(item.id)} className='text-sm' id='btn-show'>click here</button>
                                <div id={item.id} className='text-sm hidden'> 
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        </div>
                        
                    ) } ) }
                    </div> 
                    </div>

        )
    
        return ( <div className='mt-5 '>
            <input onChange={(e)=> searchItems(e.target.value)} placeholder='Enter an ID'></input>
                <div className=' grid  gap-2'>
                {FilteredData.map((item) => {
                    return(
                        <div key={item.id} className='mt-5 border-2 border-black'>
                        <div>{item.id}</div>
                        <p><b>{item.title.substr(0, 20)}...</b></p>
                        <div>
                        <button onClick={() => showDiv(item.id)} className='text-sm' id='btn-show'>click here</button>
                                <div id={item.id} className='text-sm hidden'> 
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        </div>
                        
                    ) } ) }
                    </div> 
                    </div>
        )
}
                
            
 
export default Search;