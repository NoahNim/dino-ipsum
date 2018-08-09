import $ from 'jquery';
import 'bootstrap';
import { dinosaurLoremIpsum } from "./dinosaurLoremIpsum.js";

var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html'),
fillContainer = function(html) {
  $('#some-awesome-container').html(html);
},
oops = function() {
  console.log('Where did all the dinosaurs go?');
};

getDinos.then(fillContainer, oops);



// let request = new XMLHttpRequest();
//     let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
//     request.onreadystatechange = function()
//     {
//       if(this.readyState === 4 && this.status === 200)
//       {
//         let response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     }
//     request.open("GET", url, true);
//     request.send();
//
//
//     $('document').ready(function(){
//       $("#person-one").click(function(){
//
//       })
//     })
