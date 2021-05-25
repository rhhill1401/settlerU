import React, { useState } from "react";
import Card from "./card";
import Mentors from "../Mentors";
import Detail from "./detail";
import JZquotes from "../JZquotes";
import ImageSlider from "./ImageSlider";

const createCard = (cards) => (
  <Card
    key={cards.id}
    name={cards.name}
    imgURL={cards.imgURL}
    quote={cards.quote}
  />
);

function App() {
  const [newQuote, setNewQuote] = useState(
    <Detail detailInfo={JZquotes[0].quote} />
  );

  const testQuote = () => {
    const quoteGen = Math.trunc(Math.random() * 5) + 1;
    console.log(quoteGen);
    setNewQuote(<Detail detailInfo={JZquotes[quoteGen].quote} />);
  };

  setTimeout(testQuote, 6000);

  return (
    <div className="App">
      <header className="heading">Cracking The Code</header>

      <Card imgURL={Mentors[4].imgURL} quote={newQuote} name={"Jay Z"} />

      <button className="nextButton" onClick={testQuote}>
        push
      </button>

      {/* {Mentors.map(createCard)} */}

      <ImageSlider slides={Mentors} />
    </div>
  );
}

export default App;
