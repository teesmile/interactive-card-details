import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col min-h-screen justify-center items-center p-30 bg-gray-100">
      <div className="bg-white w-full h-4/5 shadow-lg overflow-hidden">
        <div className="flex w-3/3 ">
          {/* left side */}
          <CardPreview />
          {/* right side */}
         <CardForm />
        </div>
      </div>
    </main>
  );
}

export default App;
