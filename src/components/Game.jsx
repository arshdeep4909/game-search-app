import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import gamesReducer from "../reducers/gamesReducer";

const Game = ({ name, id, image }) => {
  return (
    <StyledGame>
      <h3>Game name: {name}</h3>
      <p>Released Date</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Game;
