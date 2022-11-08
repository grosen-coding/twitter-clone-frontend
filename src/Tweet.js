import React from "react";

function Tweet({ tweets }) {
  return (
    <div>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tweet;
