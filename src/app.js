/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo f console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["bear", "racoon", "dog", "comedian", "pincone"];
  let action = ["took my", "stole my", "threw my", "yelled at my", "bit my"];
  let possetion = ["homework", "headphones", "shoes", "pants", "car"];
  let where = ["my work", "my driveway", "in subway", "the way"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * action.length);
  let whereIndex = Math.floor(Math.random() * possetion.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
