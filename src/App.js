import Quiz from "./components/Quiz";
import StartPage from "./components/StartPage";
import { useState } from "react";

export default function App() {
  const [showPage, setShowPage] = useState(false)

  function handleClick(){
    setShowPage(show => !show)
  }
  return (
    <div className="App">
      {showPage?
      <Quiz />
      :<StartPage handleClick={handleClick} /> }
    </div>
  );
}

