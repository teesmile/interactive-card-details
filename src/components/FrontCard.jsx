

export default function FrontCard({cardNumber, cardHolderName, expMonth, expYear}){

    return(
         <div
        className="absolute right-[-120px]  w-100 h-55 rounded-lg text-white p-5 z-20 flex flex-col shadow-2xl justify-between"
        style={{ background: "linear-gradient(135deg, #8739F9, #FF5ACD)" }}
      >
        <div className="flex justify-items-start items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="w-4 h-4 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <p className="text-3xl tracking-widest">{cardNumber || "0000 0000 0000 0000"}</p>
          <div className="flex justify-between uppercase mt-2 text-sm">
            <span>{cardHolderName || "JANE APPLESEED"}</span>
            <span>{`${expMonth || "00"} /${expYear || "00"}`}</span>
          </div>
        </div>
      </div>
    )
}
