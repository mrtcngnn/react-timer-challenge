import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  /*
  function handleNameChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }
  */

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    // playerName.current.value will be evaluated after component's first render.
    // when ref changes component won't be rerendered (different from state)
    playerName.current.value = "";
    //setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
