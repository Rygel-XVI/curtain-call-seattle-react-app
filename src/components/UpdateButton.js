import React from 'react';
import {Button} from 'react-bootstrap';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import "react-awesome-button/dist/styles.css";

const UpdateButton = ({theater}) => {
  return (
    <button className="theater-button">Update {theater.name}</button>
  );
};

export default UpdateButton;
