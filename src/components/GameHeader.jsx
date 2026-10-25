function GameHeader({score, moves, resetGame}){
    return(
        <div className="game-header">
            <div className="brand-mark" aria-hidden="true">✦</div>
            <div className="title-group">
                <p className="kicker">MatchMoji</p>
                <h1>Memory garden</h1>
            </div>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label"> Score </span>
                    <span className="stat-value">{score}<small> pts</small></span>
                </div>
                <div className="stat-item">
                    <span className="stat-label"> Moves </span>
                    <span className="stat-value">{moves}<small> turns</small></span>
                </div>
            </div>
            <button className="reset-btn" onClick={resetGame}>New game <span aria-hidden="true">↗</span></button>
        </div>
    )
}

export default GameHeader;