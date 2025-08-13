import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { cardSchema } from "../schema/cardSchema";

export default function CardForm({setCardData}) {
const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: zodResolver(cardSchema)
});

const onSubmit = (data) => {
  console.log("Form submitted successfully:", data);
  setCardData(data); // Update parent state with form data
 
}

    return (
         <section className="w-2/3 flex flex-col items-center p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-5">
          {/*card holder name  */}
          <div>
            <label className="block text-xs font-semibold mb-1 uppercase tracking-wide ">Cardholder name</label>
            <input {...register("cardHolderName")} placeholder="e.g Jane Applessed" className="border rounded-md px-3 py-2 w-full" />
            {errors.cardHolderName && <p className="text-red-500 text-xs">{errors.cardHolderName.message}</p>}
          </div>
          </form>
        </section>
)}