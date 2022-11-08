import "./App.css";
import Quote from "./Quote";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://joeroganapi.herokuapp.com/api/quotes/")
      .then((res) => {
        setQuotes(res.data);
        console.log(res);
        console.log("The data was retrieved");
      })
      .catch((err) => {
        console.log(err);
        console.log("Error Message is working");
      });
  }, []);

  return (
    <div>
      <h1>Joe Rogan Quotes You Should Probably Ignore</h1>

      <Quote quotes={quotes} />
    </div>
  );
}

export default App;
