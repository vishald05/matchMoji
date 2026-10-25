function Card({card, onClick}){
    return (
        <button
            className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
            onClick={() => onClick(card)}
            aria-label={card.isFlipped || card.isMatched ? `Card showing ${card.values}` : "Hidden memory card"}
            aria-pressed={card.isFlipped || card.isMatched}
            disabled={card.isMatched}
        >
            <div className="card-front">
                <span className="card-suit" aria-hidden="true">✦</span>
            </div>
            <div className="card-back">
                {card.values}
            </div>
        </button>
    )
}

export default Card;