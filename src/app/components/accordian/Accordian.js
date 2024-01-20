"use client"
import React,{useState} from 'react'
import Accordiandata from './Accordiandata'
import Accordianui from './Accordianui'


const Accordian = () => {
    const [data,setData] = useState(Accordiandata);
  return (
    <>
    <div className=' p-16'>

        <p className=' text-5xl font-bold'>Frequently Asked Questions</p>
        <div className='border-yellow-400 border-4 w-32 mb-10'></div>

    { data.map ((ele)=>{
        return <Accordianui key={ele.id} {...ele} />
    })
}
    </div>
     
    </>
   
  )
}

export default Accordian