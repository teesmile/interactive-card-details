import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cardSchema } from "../schema/cardSchema";
import { useEffect } from "react";

export default function CardForm({ setCardData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(cardSchema),
    mode: "onChange"
  });

  const watchedFields = watch()

  useEffect(() =>{
   const subscription = watch((value)=>{
    setCardData(value)
   });
   return()=> subscription.unsubscribe();
  },[watch, setCardData]);

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    // setCardData(data); // Update parent state with form data
    localStorage.setItem("cardData", JSON.stringify(data));
    setCardData(data);
    reset(); // Reset form fields after submission
  };

  return (
    <section className="w-2/3 flex flex-col justify-center items-center p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-sm space-y-5"
      >
        {/* Cardholder name */}
        <div>
          <label className="block text-xs font-semibold mb-1 uppercase tracking-wide ">
            Cardholder name
          </label>
          <input
            {...register("cardHolderName")}
            placeholder="e.g Jane Applessed"
            className="border rounded-md px-3 py-2 w-full"
          />
          {errors.cardHolderName && (
            <p className="text-red-500 text-xs">
              {errors.cardHolderName.message}
            </p>
          )}
        </div>
        {/* Card number */}
        <div>
          <label className="block text-xs font-semibold mb-1 uppercase tracking-wide">
            Card number
          </label>
          <input
            {...register("cardNumber")}
            placeholder="e.g 1234 5678 9012 3456"
            className="border rounded-md px-3 py-2 w-full"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-xs">
              {errors.cardNumber.message}
            </p>
          )}
        </div>
        {/* Row: Expiry and CVC */}
        <div className="flex space-x-4">
          {/* Expiry (MM/YY) */}
          <div className="flex flex-col flex-1">
            <label className="block text-xs font-semibold mb-1 uppercase tracking-wide">
              Exp. Date (MM/YY)
            </label>
            <div className="flex space-x-2">
              <input
                {...register("expMonth")}
                type="text"
                inputMode="numeric"
                placeholder="MM"
                className="border rounded-md px-3 py-2 w-1/2"
                autoComplete="off"
              />
              <input
                {...register("expYear")}
                type="text"
                inputMode="numeric"
                placeholder="YY"
                className="border rounded-md px-3 py-2 w-1/2"
                autoComplete="off"
              />
            </div>
            <div>
              {errors.expMonth && (
                <p className="text-red-500 text-xs">
                  {errors.expMonth.message}
                </p>
              )}
              {errors.expYear && (
                <p className="text-red-500 text-xs">
                  {errors.expYear.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label className="block text-xs font-semibold mb-1 uppercase tracking-wide">
              CVC
            </label>
            <input
              {...register("cvc")}
              type="text"
              inputMode="numeric"
              placeholder="e.g 123"
              className="border rounded-md px-3 py-2 w-full"
            />
            {errors.cvc && (
              <p className="text-red-500 text-xs">{errors.cvc.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-950 hover:bg-purple-900 text-white rounded-md py-2 w-full transition"
        >
          Confirm
        </button>
      </form>
    </section>
  );
}
