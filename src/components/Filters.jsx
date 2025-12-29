import { CATEGORIES } from "../hooks/useExpenses"

//handling for selecting the type and changing the option

export default function Filters({filter,setFilter}){
    const handleOnChange=(key,value)=>{
        setFilter(prev=>({...prev,[key]:value}))
    }

      // the section for searching based on the filters
      
    return(
        <div className="mb-10 ">
           <h3 className="text-center text-indigo-500 text-2xl font-semibold">Filtering and Sorting</h3>
            <div className="flex flex-wrap gap-10 mt-5 md:gap-15 mt-10 lg:flex-nowrap">
           <select value={filter.category} 
           onChange={(e)=>handleOnChange('category',e.target.value)} className="border-2 border-[#ccc] rounded-lg w-80 p-2 text-md">
             <option value="">All Categories</option>
             {CATEGORIES.map(cat=>
                (<option key={cat} value={cat}>{cat}</option>))}
           </select>

           <input type="date"
            placeholder="start date" 
            value={filter.startDate}
           onChange={(e)=>handleOnChange('startDate',e.target.value)} className="border-2 border-[#ccc] rounded-lg w-50 p-2 text-md"/>

           <select value={filter.sortBy} onChange={(e)=>handleOnChange('sortBy',e.target.value)} className="border-2 border-[#ccc] rounded-lg w-50 p-2 text-md">
             <option value="recent">Most Recent</option>
             <option value="highest">Highest Amount</option>
           </select>
          </div>
        </div>
    )
}