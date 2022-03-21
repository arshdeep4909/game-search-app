import axios from "axios";
import { popularGamesURL, upcomingGamesURl, newGamesURL } from "../api";

//Action creator
export const loadGames = () => async (dispatch) => {
  //Fetch AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcoming = await axios.get(upcomingGamesURl());
  const newGames = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcoming.data.results,
      newGames: newGames.data.results,
    },
  });
};
