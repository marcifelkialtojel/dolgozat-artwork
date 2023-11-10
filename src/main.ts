import './style.css'

import './Artwork.ts'

import { Statue } from './Statue.ts';

function init() {
  const form = document.getElementById('artForm')
  form!.addEventListener('submit', artForm);
  }

let count = 0;
let sum = 0;
const artArray:Artwork[] = [];

const submitButton = document.getElementById("submitBtn");
submitButton?.addEventListener('click', artForm);

function artForm(){

  const artTitle = (document.getElementById('titleInput') as HTMLInputElement).value;
  const artYear = (document.getElementById('yearInput') as HTMLInputElement).value;
  const artPrice = (document.getElementById('priceInput') as HTMLInputElement).value;
  const artHeight = (document.getElementById('heightInput') as HTMLInputElement).value;
  const currentYear = new Date().getFullYear();


  if (artTitle.trim().length === 0) {
    document.getElementById('errorMessage1')!.textContent = "A cím mező nem lehet üres!";
  }
  else {
    document.getElementById('errorMessage1')!.textContent = "";
  }
  if (artYear.trim().length === 0 ) {
    document.getElementById('errorMessage2')!.textContent = "Az év mező nem lehet üres!"; 
  }
  else if (parseInt(artYear) > currentYear) {
    document.getElementById('errorMessage2')!.textContent = "Az év nem lehet nagyobb a jelenleginél!";
  }
  else {
    document.getElementById('errorMessage2')!.textContent = "";
  };
  if (parseInt(artPrice) < 5) {
    document.getElementById('errorMessage3')!.textContent = "Az mű ára nem lehet 5 Ft-nál kisebb";
  }
  else if (artPrice.length === 0) {
    document.getElementById('errorMessage3')!.textContent = "Az ár mező nem lehet üres!";
  }
  else {
    document.getElementById('errorMessage3')!.textContent = "";
  };
  if (parseInt(artHeight) < 15){
    document.getElementById('errorMessage4')!.textContent ="A mű nem lehet kisebb 15cm-nél"
  }
  else if (artHeight.length === 0){
    document.getElementById('errorMessage4')!.textContent ="A mű magasság mező nem lehet üres!"
  }
  else {
    document.getElementById('errorMessage4')!.textContent = "";
  };
  if(document.getElementById('errorMessage4')!.textContent=="" && document.getElementById('errorMessage3')!.textContent=="" && document.getElementById('errorMessage2')!.textContent=="" &&  document.getElementById('errorMessage1')!.textContent=="" ){
  
  artArray.push(new Statue(parseInt(artHeight), artTitle, parseInt(artYear), parseInt(artPrice)));
  console.log(artArray);
  count++;
  sum+=parseInt(artPrice);
  

  document.getElementById('countP')!.textContent= "A művek darabszáma: "+count.toString();
  document.getElementById('sumP')!.textContent= "A művek értékének összege: " +sum.toString();

  
  };
  }



addEventListener("DOMContentLoaded", init);