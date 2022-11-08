import React from "react";

function Quote({ quotes }) {
  return (
    <div>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quote;
