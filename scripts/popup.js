// Does not write into developer console.
// console.log("popup.js can log into the console. also, we know it is getting loaded by popup.html.")

// document.getElementById("autofill-nutrition-requirements").addEventListener('click', function(){
//     document.getElementById("autofill-nutrition-requirements").innerHTML = "BUTTON WORKS";
// })

// const btn_autofill_nutrition_requirements = document.getElementById("autofill-nutrition-requirements");
// // element.addEventListener("click", function() {
// //     document.getElementById("demo").innerHTML = "Hello World";
// //   });
$(document).ready(function(){
    document.getElementById("autofill-nutrition-requirements").onclick = async function (e) {
        let queryOptions = { active: true, currentWindow: true };
        let tabs = await chrome.tabs.query(queryOptions);
      
        chrome.tabs.sendMessage(
          tabs[0].id,
          { type: "autofill_nutrition_requirements"},
          function (response) {
            console.log(response);
            console.log(response.rem_cal);
            document.getElementById("remaining_cal").innerHTML = response.rem_cal;
            document.getElementById("g_carbs").innerHTML = response.g_carbs;
            document.getElementById("g_fat").innerHTML = response.g_fat;
            document.getElementById("g_protein").innerHTML = response.g_protein;
          }
        );
    };
});

// $(document).ready(function() {
//     $(document.getElementById("autofill-nutrition-requirements").addEventListener('click', autofill_input_nutrition_requirements);    
// });

// function autofill_input_nutrition_requirements(){
//     console.log("the button works!");
//     document.getElementById("autofill-nutrition-requirements").hide();
// }