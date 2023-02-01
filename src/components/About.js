import React from "react";
import Links from "./Links";

function About(props) {
  console.log(props);
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* make ternary statement to show props.bio in p tag if it has a value*/}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {props.links.github} linkedin = {props.links.linkedin}/>
    </div>
  );
}

export default About;
