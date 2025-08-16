

export default function ThankYou() {
  return (
    <div className="w-2/3 flex flex-col justify-center items-center p-10">
      <h1 className="text-2xl font-bold mb-4 text-purple-950 -top-5 ">Thank You!</h1>
        <img src="/images/icon-complete.svg" alt="Thank You Icon" className="mb-4" />
      <p className="text-lg">We've added your card details</p>
      <a href="/" className="bg-purple-950 hover:bg-purple-900 text-white text-center rounded-md py-2 w-1/3 transition">Continue</a>
    </div>
  );
}