/* examples - for testing:

console.log(document); // ctrl+shift+j to see if the document object is logged.

document.querySelectorAll('video').forEach((item)=>{
    item.playbackRate = 2.0;
  }); // visit youtube and see if it is played on double time
  */

// autofill_input_nutrition_requirements(){

// }

function autofill_input_nutrition_requirements(remaining_cal, g_carbs, g_fat, g_protein) {
  
  let remtbl = document.getElementsByClassName("total remaining");
  remaining_cal.innerHTML = remtbl.getElementsByClassName("positive")[0]; // TODO: is HTMLCollectionOf indexable?
  rem_g = remtbl.getElementsByClassName("macro-value");
  g_carbs.innerHTML = rem_g[0];
  g_fat.innerHTML = rem_g[1];
  g_protein.innerHTML = rem_g[2];
}