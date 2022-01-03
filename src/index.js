import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Earthling from './js/earthling.js';


$(document).ready(function() {
  $(".btn-begin-journey").click(function(event) {
    event.preventDefault();
    $(".header1").hide();
    $(".earthling").show();
    $(".galactic-age").show();
    $(".footer").show();
  });
});

//--Leaving the following to figure out how to get the galactic age to display while hide earthling, very close, when solved delete function above--//

// $(document).ready(function() {
//   $(".btn-begin-journey").click(function(event) {
//     event.preventDefault();
//     $(".header1").hide();
//     $(".earthling").show();
//     $(".galactic-age").hide();
//     $(".footer").hide();
//   });
// });

// $(document).ready(function() {
//   $(".btn-calculate-age").click(function(event) {
//     event.preventDefault();
//     $(".header1").hide();
//     $(".earthling").hide();
//     $(".galactic-age").show();
//     $(".footer").show();
//   });
// });

$(document).ready(function() {
  $("form#earthling-form").submit(function(event) {
    event.preventDefault();
    const inputtedAge = parseInt($("#age").val());
    const inputtedLifespan = parseInt($("#lifespan").val());

    let earthling = new Earthling(inputtedAge, inputtedLifespan);

    let ageOnMercury = earthling.ageOnMercury();
    let ageOnVenus = earthling.ageOnVenus();
    let ageOnMars = earthling.ageOnMars();
    let ageOnJupiter = earthling.ageOnJupiter();

    let lifespanOnMercury = earthling.lifespanOnMercury();
    let lifespanOnVenus = earthling.lifespanOnVenus();
    let lifespanOnMars = earthling.lifespanOnMars();
    let lifespanOnJupiter = earthling.lifespanOnJupiter();

    let lifeLeftOnMercury = earthling.lifeLeftOnMercury();
    let lifeLeftOnVenus = earthling.lifeLeftOnVenus();
    let lifeLeftOnMars = earthling.lifeLeftOnMars();
    let lifeLeftOnJupiter = earthling.lifeLeftOnJupiter();

    $("#mercuryAge").html(ageOnMercury);
    $("#venusAge").html(ageOnVenus);
    $("#marsAge").html(ageOnMars);
    $("#jupiterAge").html(ageOnJupiter);

    $("#mercuryLifespan").html(lifespanOnMercury);
    $("#venusLifespan").html(lifespanOnVenus);
    $("#marsLifespan").html(lifespanOnMars);
    $("#jupiterLifespan").html(lifespanOnJupiter);

    $("#mercuryLifeLeft").html(lifeLeftOnMercury);
    $("#venusLifeLeft").html(lifeLeftOnVenus);
    $("#marsLifeLeft").html(lifeLeftOnMars);
    $("#jupiterLifeLeft").html(lifeLeftOnJupiter);
  });
});
