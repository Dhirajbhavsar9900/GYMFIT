import axios from "axios";
import { useEffect, useState } from "react";

const All = ()=>{

    const [data, setData] = useState([]);
    useEffect(()=>{
       const fetchData = async ()=>{
            const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
            params: {limit: '10'},
            headers: {
                'X-RapidAPI-Key': 'bf277ce926msh9ffd08406955d68p1cfad4jsn8384d08f54c0',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
                } 
                fetchData();
        },[])
        


    return(
        <>
            
            <div className='flex flex-wrap gap-6 justify-center'>
            {
                data.map((post) => {
                    const { id, name, gifUrl } = post;
                    return (
                        
                        <div className=' border w-[400px] ' key={id}>
                           
                            <img  src={gifUrl} alt={name} className=" h-[400px] w-[430px] " />
                            <h2 className=" text-center p-4 font-seri bg-slate-600 text-white font-bold rounded">{name}</h2>
                        </div>
                        
                    );
                })
            }
            </div>
        </>
    )
}

export default All;