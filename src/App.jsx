import GameHeader from "./components/GameHeader"
import Card from "./components/Card"
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues = ["🥰","👾","🥶","😂","😭","🫣","👀","😘","🥰","👾","🥶","😂","😭","🫣","👀","😘"]
function App() {

  const {cards, moves, score, isGameComplete, newGame, handleCardClick} = useGameLogic(cardValues);

  return (
    <div className="app">
      <div className="atmosphere" aria-hidden="true">
        <span className="moon" />
        <span className="star star-one" />
        <span className="star star-two" />
        <span className="star star-three" />
        <span className="wisteria wisteria-left" />
        <span className="wisteria wisteria-right" />
      </div>
      <GameHeader score = {score} moves = {moves} resetGame={newGame}/>

      {isGameComplete && <WinMessage score = {score} moves = {moves} />}

      <main className="game-board">
        <div className="board-heading">
          <p className="eyebrow">A little moment of focus</p>
          <h2>Find every matching pair</h2>
          <p>Turn over two cards at a time and let your memory lead the way.</p>
        </div>
        <div className="cards-grid" aria-label="Memory cards">
        {cards.map((card) => (
          <Card key={card.id} card = {card} onClick={handleCardClick}/>
        ))}
        </div>
      </main>
      <footer className="game-footer">
        <span className="footer-dot" aria-hidden="true" />
        Take your time · enjoy the quiet
      </footer>
    </div>
  )
}

export default App
