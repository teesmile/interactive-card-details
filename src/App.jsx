import { useState } from "react";
import "./App.css";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";

function App() {
  const [cardData, setCardData] = useState({});

  return (
    <main className="flex flex-col min-h-screen justify-center items-center p-45 bg-gray-100">
      <div className="bg-white w-full h-4/5 shadow-lg overflow-hidden">
        <div className="flex w-3/3  ">
          {/* left side */}
          <CardPreview cardData={cardData} />
          {/* right side */}
         <CardForm setCardData={setCardData}/>
        </div>
      </div>
    </main>
  );
}

export default App;
