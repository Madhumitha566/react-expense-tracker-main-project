//expenses item from entry data

  const CATEGORY_COLORS = {
  Food: 'bg-red-300',
  Travel: 'bg-blue-300',
  Bills: 'bg-green-300',
  Entertainment: 'bg-yellow-300',
  Others: 'bg-gray-300',
};

 export default function ExpenseItem({expense,onDelete}){
  
      const{id,date,category,note,amount}=expense
      const colorClass = CATEGORY_COLORS[category] || CATEGORY_COLORS.Others;
      
    return(
        <div className="flex  border-b-2 border-gray-200 m-3 flex-col mt-7 md:flex-row justify-between">
            <div className="flex flex-col ">
                <span className={`${colorClass} p-2 rounded-lg px-6 `}>{category}</span>
                <span className="text-gray-500 px-6 my-2">{note||"-No Notes"}</span>
            </div>
            <div className="flex gap-10 sm:justify-around mt-3 md:gap-30 mr-10 items-center">
               <div className="flex gap-10 sm:gap-20 ">
                   <span className="text-gray-600 text-xs sm:text-sm md:text-[18px]">{date}</span>
                  <span className="text-red-500 font-bold text-sm sm:text-md md:text-xl">${amount.toFixed(2)}</span>
               </div>
                 <button onClick={()=>onDelete(id)} className=" hover:shadox-lg"> 🗑️</button>
            </div>
        </div>
        
    )
}