import React, { useEffect } from 'react'
import { useState } from 'react'
import Dropdowncurrency from './Dropdowncurrency'

const CurrencyConvertor = () => {
    const[amount,setamount]=useState(1)
const[currencies,setcurrencies]=useState([])
const[fromcurrency,setfromcurrency]=useState("USD")
const[tocurrency,settocurrency]=useState("INR")
const[convertedamount,setconvertedamount]=useState(null)
   // https://api.frankfurter.app/currencies
   // https://api.frankfurter.app/latest?amount=1&from=USD&toINR
   const convertcurrency = async()=>{
    try{
        const res=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromcurrency}&to${tocurrency}`)
        const data=await res.json();
        setconvertedamount(data.rates[tocurrency]+" "+tocurrency);
    }catch(error){
        console.error("Error Fetching",error)
    }
   }
   const fetchcurrencies=async()=>{
    try{
        const res=await fetch("https://api.frankfurter.app/currencies")
        const data=await res.json();
        setcurrencies(Object.keys(data));
    }catch(error){
        console.error("Error Fetching",error)
    }
   }
   useEffect(()=>{fetchcurrencies()},[])
   console.log(currencies);
//    const convertcurrency=()=>{}


  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-gray-200 rounded-lg shadow-md'>
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>Currency Convertor</h2>
        <div  >
         <Dropdowncurrency title="From" currency={fromcurrency} setcurrency={setfromcurrency} currencies={currencies}/>
         {/* swap */}
         <div><button onClick={()=>{setfromcurrency(tocurrency)
            settocurrency(fromcurrency)
         }} className=' bg-indigo-600 hover:bg-indigo-700 mt-2 text-white rounded-lg p-2'>SWAP</button></div>
         <Dropdowncurrency title="To" currency={tocurrency}  setcurrency={settocurrency} currencies={currencies}/>
        </div>
        <div className='mt-4'>
            <label htmlFor="amount" className='block text-sm decoration-2 font-medium text-gray-700'>Amount</label>
            <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)}  className='w-full p-2 border border-gray-300 mt-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500' />
        </div>
        <div className='flex justify-end mt-6'>
            <button onClick={convertcurrency} className='px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rinf-offset-2'>Convert</button>
        </div>
        <div className='mt-4 text-lg font-medium text-right text-green-600 '>
            Converted Amount:{convertedamount}
        </div>
    </div>
  )
}

export default CurrencyConvertor