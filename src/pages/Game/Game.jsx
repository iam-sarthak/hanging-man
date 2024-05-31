import React, { useEffect, useState } from "react";
import Popup from "../../comp/Popup/Popup";
import { assets } from "../../assets/assets";
import "./Game.css";
import { data } from "../../data";
const Game = () => {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const animals = [
    "Giraffe",
    "Snake",
    "Lion",
    "Tiger",
    "Gorilla",
    "Fox",
    "Kangaroo",
    "Squirrel",
    "Elephant",
    "Crocodile",
  ];

  const [crt, setCrt] = useState({});
  const [correct, setCorrect] = useState([]);
  const [fail, setFail] = useState([]);
  const [status, setStatus] = useState("");
  const[treePhoto, setTreePhoto] = useState(assets.tree);
  const getRandomWord = () => {
    const randomWordObj = data[Math.floor(Math.random() * data.length)];
    setCrt({
      ...randomWordObj,
      word: randomWordObj.word.toUpperCase(),
    });

    // setCorrect(initialCrt());
  };
  const onGuess = (letter) => {
    if (crt.word.includes(letter)) {
      setCorrect([...correct, letter]);
    } else {
      setFail([...fail, letter]);
    }
  };
  const maskword = crt.word
  ? crt.word
      .split("")
      .map((letter) => (correct.includes(letter) ? letter : "_"))
      .join("")
  : "";

  // const initialCrt = () =>{
  //   const initialCorrect = [];
  //   if (crt.word) {
  //     console.log(crt.word)
  //     const showwordCount = (crt.word.length % 3) + 1;
  //     for (let index = 0; index < showwordCount; index++) {
  //       const randomIndex = Math.floor(Math.random() * crt.word.length);
  //       initialCorrect.push(crt.word[randomIndex]);
  //     }
  //   }
    
  //   return initialCorrect;
  // }

  const reset = () => {
    getRandomWord();
    setCorrect([]);
    setFail([]);
    setTreePhoto(assets.tree);
    setStatus("");
  };

  useEffect(() => {
    if (
      correct.length &&
      crt.word.split("").every((letter) => correct.includes(letter))
    ) {
      setStatus("Won");
    }
  }, [correct]);

  useEffect(() => {
    if (fail.length===1) {
      setTreePhoto(assets.tree1)
    }
    if (fail.length===2) {
      setTreePhoto(assets.tree2)
    }
    if (fail.length===3) {
      setTreePhoto(assets.tree3)
    }
    if (fail.length===4) {
      setTreePhoto(assets.tree4)
    }
    if (fail.length===5) {
      setTreePhoto(assets.tree5)
    }
    if (fail.length === 6) {
      setTreePhoto(assets.tree6)
      setStatus("Lose");
    }
  });
  useEffect(reset, []);

  return (
    <>
      <div className="game">
        <div className="left-side">
          <div className="tree">
            <img src={treePhoto} alt="" />
            <div className="hangman">
            </div>
          </div>
          <div className="incorrect-guess"></div>
        </div>
        <div className="right-side">
          <div className="title">
            <img src={assets.title} alt="" />
          </div>
          <div className="game-content">
            <div className="hint">{crt.hint}</div>
            <div className="answer">{maskword}</div>
            <div className="alphabets">
              {alphabets.map((alapha, index) => (
                <button
                  disabled={correct.includes(alapha) || fail.includes(alapha)}
                  onClick={() => onGuess(alapha)}
                  key={index}
                >
                  {alapha}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Popup status={status} word={crt.word} reset={reset} />
    </>
  );
};

export default Game;
