import React from 'react'

const Dropdowncurrency = ({
    currencies,currency,setcurrency,favorites,handlefavorites,title=""
}) => {
  return (
    <div>
        <label htmlFor={title}>{title}</label>
        <div>
            <select value={currency} onChange={(e=>setcurrency(e.target.value))} className='w-full p-2 border border-gray-300 rounded-md shadow-sm
             focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                {/* render favorites */}
                {/* <hr /> */}
                {currencies?.map((currency)=>{return(
                    <option value={currency} key={currency}>{currency}</option>
                )
                     
                })}
            </select>
        </div>
    </div>
  )
}

export default Dropdowncurrency