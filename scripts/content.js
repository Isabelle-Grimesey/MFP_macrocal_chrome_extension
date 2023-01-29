// is content.js peristent across multiple pages on a single tab?
// for each autofill input button (popup->content script->popup), you should make a 'commit' input button (popup->content script).
console.log("content script is logging");

let rem_cal, g_carbs, g_fat, g_protein;

console.log("vars were made")

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("listener was triggered");
    if (request.type === "autofill_nutrition_requirements") {
        // check that url is the right type
        let g_macros = document.getElementsByClassName("macro-value");
        // rem_cal : document.getElementsByClassName("positive")[0].innerHTML,
        // g_carbs : g_macros[31].innerHTML,
        // g_fat : g_macros[32].innerHTML,
        // g_protein : g_macros[33].innerHTML
        sendResponse({ rem_cal : "success"
        });
    }
  });

  console.log("listener was added");

// // console.log(document);
// let remaining_cal, g_carbs, g_fat, g_protein;

// chrome.runtime.onMessage.addListener(
//     function buttontrigger(message, sender, sendresponse){
//         console.log("content script gets invoked by popup button");
//         return true;
//     }
//   )

// function autofill_input_nutrition_requirements() {
//     console.log("content script gets invoked by popup button");
    // pull info of interest from content page.
    // const remtbl = document.getElementsByClassName("total remaining");
    // remaining_cal.innerHTML = remtbl.getElementsByClassName("positive")[0]; // TODO: is HTMLCollectionOf indexable? - send to popup script - either by parameter or by message.
    // rem_g = remtbl.getElementsByClassName("macro-value");
    // g_carbs = rem_g[0];
    // g_fat = rem_g[1];
    // g_protein = rem_g[2];
    // console.log(remaining_cal);
    // console.log(g_carbs);
    // console.log(g_fat);
    // console.log(g_protein);
    // g_carbs.innerHTML = rem_g[0];
    // g_fat.innerHTML = rem_g[1];
    // g_protein.innerHTML = rem_g[2];
//   }