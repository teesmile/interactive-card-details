

export default function BackCard({cvc}){

    return(
        <div className="absolute top-115  right-[-190px] w-100 h-55 rounded-lg bg-gray-200 shadow-2xl">
        <div className="bg-black h-10 w-full mt-5"></div>
        <div className="left-1/13 absolute flex flex-col justify-between items-end top-21 bg-gray-300 p-2 rounded text-sm tracking-widest w-85 ">
          <span>{cvc || "000"}</span>
        </div>
      </div>
    )
}