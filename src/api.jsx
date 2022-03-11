require("dotenv").config();

//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//getting the current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0{day}`;
  } else {
    return day;
  }
};
// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//function to get the current date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Poplular Games
const popular_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-rating&page-size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
