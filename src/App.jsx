import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);

  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => {
        return currentCookies + cps;
      });
    }, 1000);
    return () => clearInterval(cookieInterval);
  }, [cps]);

  function handleClick() {
    setCookies(cookies + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Cookies: {cookies}</button>
    </>
  );
}

export default App;
