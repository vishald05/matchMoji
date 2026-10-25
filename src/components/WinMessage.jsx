function WinMessage({score, moves}){
    return (
        <div className="win-message">
            <span className="win-spark" aria-hidden="true">✦</span>
            <h2>Lovely work!</h2>
            <p>You found every pair in <strong>{moves} moves</strong>.</p>
            <p className="win-score">Final score <strong>{score} pts</strong></p>
        </div>
    );
}

export default WinMessage;