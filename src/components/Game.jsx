import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import gamesReducer from "../reducers/gamesReducer";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/deatilAction";
//react-router-DOM
import { Link } from "react-router-dom";

const Game = ({ name, id, image }) => {
  //LOAD DETAILS
  const dispatch = useDispatch();
  //Event Handlers
  // we have to pass down our id from our home component where we exported the id
  //from our API call when we were dispatching our game
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>Game name: {name}</h3>
        <p>Released Date</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Game;
