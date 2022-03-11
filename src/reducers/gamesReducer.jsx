const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, ...action.payload };
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
