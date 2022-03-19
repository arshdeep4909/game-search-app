const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

//ACTION Creator

const fetchGames = () => {
  return {
    type: "FETCH_GAMES",
  };
};

fetchGames({ user: "name" });

export default gamesReducer;
