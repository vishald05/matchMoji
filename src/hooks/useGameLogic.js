import { useState } from "react"

const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const createCards = (cardValues) => shuffleArray(cardValues).map((values, index) => ({
    id: index,
    values,
    isFlipped: false,
    isMatched: false
}));

export const useGameLogic = (cardValues) => {

    const [cards, setCards] = useState(() => createCards(cardValues));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [isLocked, setIsLocked] = useState(false);

    const newGame = () => {
        setCards(createCards(cardValues));
        setFlippedCards([]);
        setMatchedCards([]);
        setScore(0);
        setMoves(0);
        setIsLocked(false);
    }

    const handleCardClick = (card) => {
        if(card.isFlipped || card.isMatched || isLocked || flippedCards.length == 2){
        return;
        }
        const newCards = cards.map((c) => {
        if(c.id === card.id)
            return {...c, isFlipped:true};
        else
            return {...c};
        })

        setCards(newCards);

        const newFlippedCards = [...flippedCards, card.id];
        setFlippedCards(newFlippedCards);

        if(flippedCards.length === 1){
        setIsLocked(true);
        const firstCard = cards[flippedCards[0]];
        const secondCard = card;

        
        if(firstCard.values == secondCard.values){
            setTimeout(() => {
            setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
            setScore((prev) => prev + 10);
            const newMatchedCards = newCards.map((c) => {
                if(c.id == firstCard.id || c.id == secondCard.id)
                return {...c, isMatched:true};
                else
                return {...c};
            });
            setCards(newMatchedCards);
            setFlippedCards([]);
            setIsLocked(false);
            }, 500);
        }
        else{ 
            setTimeout(() => {
            const flippedBackCards = newCards.map((c) => {
            if(c.id == firstCard.id || c.id == secondCard.id)
                return {...c, isFlipped:false};
            else
                return {...c}
            })
            setCards(flippedBackCards);
            setFlippedCards([]);
            setIsLocked(false);
            }, 1000);
        }
        setMoves((prev) => prev + 1);
        }
    };

    const isGameComplete = matchedCards.length === cardValues.length;


    return {
        cards, moves, score, isGameComplete, newGame, handleCardClick
    }
}
