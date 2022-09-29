/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let buton = document.getElementById("btnsend");
buton.addEventListener("click", function sumbit(event) {
  event.preventDefault();

  let alerttext = "Este campo requiere";
  let alertmessage = document.getElementById("alerta");

  // Obteniendo elementos del formulario
  let inputvalue = document.getElementById("card");
  let inputCvc = document.getElementById("Inputcvc");
  let amount = document.getElementById("amount");
  let firstname = document.getElementById("firstname");
  let inputCity = document.getElementById("inputCity");
  let Lastname = document.getElementById("Lastname");
  let inputState = document.getElementById("inputState");
  let inputZip = document.getElementById("inputZip");
  let message = document.getElementById("Message");
  let checkbox = document.querySelector("input[type='checkbox']:checked");

  if (!inputvalue.value) {
    inputvalue.required = true;
    inputvalue.placeholder = alerttext;
    alertmessage.style.display = "block";
  }

  if (!inputCvc.value) {
    inputCvc.required = true;
    inputCvc.placeholder = alerttext;
    alertmessage.style.display = "block";
  }

  if (!amount.value) {
    amount.required = true;
    amount.placeholder = alerttext;
    alertmessage.style.display = "block";
  }
  if (!firstname.value) {
    firstname.required = true;
    firstname.placeholder = alerttext;
    alertmessage.style.display = "block";
  }

  if (!Lastname.value) {
    Lastname.required = true;
    Lastname.placeholder = alerttext;
    alertmessage.style.display = "block";
  }

  if (!inputCity.value) {
    inputCity.required = true;
    alertmessage.style.display = "block";
  }

  if (inputState.value == "Escoge un departamento...") {
    inputState.className = "form-control is-invalid";
    alertmessage.style.display = "block";
  }

  if (!inputZip.value) {
    inputZip.required = true;
    alertmessage.style.display = "block";
  }

  if (!message.value) {
    message.required = true;
    alertmessage.style.display = "block";
  }
  if (!checkbox) {
    document.getElementById("validationServer04Feedback").style.display =
      "block";
    alertmessage.style.display = "block";
  }
});
