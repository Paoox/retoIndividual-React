//import { useState} from "react";

export  default function SearchBar(text, setText){
    /* const handleInputChange = ({target}) => {
      setText(target.value)
    }
   
   const handleSubmit = (e) => {
    e.preventDeault()
    
   } */
   console.log(text)
   return(
    <div className="hidden md:block py-2">
    <form
      //onSubmit={handleSubmit}
      className=" border rounded-lg w-80 max-w-xs h-9 pb-1 pl-1 hover:border-gray-400 flex justify-between"
    >
      <input
        type="text"
        //value={text}
        placeholder="Search..."
        //onChange={handleInputChange}
        className=" placeholder:text-gray-700  outline-none"
      />
      <button className="material-symbols-outlined text-black font-light text-2xl hover:bg-slate-100 hover:text-blue-800 cursor-pointer pl-1 pr-6 w-6 h-[26px] hover:ring[1px] hover:rounded-md">
        search
      </button>
    </form>
  </div>
   )
  }