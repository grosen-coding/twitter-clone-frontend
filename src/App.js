import "./App.css";
import Tweet from "./Tweet";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get("https://coursera-twitter-api.herokuapp.com/tweets")
      .then((res) => {
        const tweetData = res.data;

        console.log(tweetData);
        setTweets(tweetData);
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
      <Tweet tweets={tweets} />
    </div>
  );
}

export default App;
