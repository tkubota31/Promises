let baseURL = "http://deckofcardsapi.com/api/deck";

//1
axios.get(`${baseURL}/new/draw/`)
    .then(res => {
        console.log(res.cards.value, res.cards.suit)
    });

//2
let cardOne = null;
axios.get(`${baseURL}/new/draw/`)
    .then(res => {
        cardOne = res.cards[0];
        let deckID = res.deck_id;
        return axios.get(`${baseURL}/${deckID}/draw/`)
    })
    .then(res => {
        cardTwo = res.cards[0]
        console.log(cardOne.value, cardOne.suit, cardTwo.value, cardTwo.suit);
    })
