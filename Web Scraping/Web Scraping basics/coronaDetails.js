const request = require("request");
//Cheerio can be used with Node.js to web scrape different websites 
//utilizing jQuery and remove all the DOM inconsistencies and browsers from the jQuery library.
const cheerio = require("cheerio");

console.log("Before");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    handleHtml(html);
  }
}

function handleHtml(html) {
  //in selector tool we are geeting the whole html of a page
  let selTool = cheerio.load(html);

  let contentArr = selTool(".maincounter-number span");

  //  for(let i=0 ; i<contentArr.length; i++){
  //        let data = selTool(contentArr[i]).text()
  //        console.log('data' , data)
  //  }
  let totalCases = selTool(contentArr[0]).text(); // cases
  let totalDeaths = selTool(contentArr[1]).text(); // cases
  let totalRecoveries = selTool(contentArr[2]).text(); // cases
  console.log("Total Cases", totalCases);
  console.log("Totals Deaths", totalDeaths);
  console.log("Total Recoverd", totalRecoveries);
}

console.log("after");