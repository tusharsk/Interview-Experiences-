/* const fetch = require('isomorphic-fetch');
 */
let stop=0;
const fetchData = (pageNumber, city, cost) => {


    let ans =[];
    console.log("asasdasd");
    fetch(`https://jsonmock.hackerrank.com/api/food_outlets?city=${pageNumber}&page=${city}`, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "cache-control": "max-age=0",
    "if-none-match": "W/\"517-dbuBvItTHOIL9Pe/UJe/wA\"",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}).then(async res=>{

    let response={}
  try{
    response= await res.json();

  }catch(err){
    console.log('Failed to parse: '+err);
  }

  if(response.total_pages==pageNumber) stop=1;

  ans=ans+response.data.filter(x=>x.estimated_cost<=cost).map(x=>x.name);
})
console.log(ans);
return ans;
}


const main = (city, cost)=> {

    let ans=[];
    let pageNumber=0;
    while(stop==0) {
        ans=ans+fetchData(pageNumber, city, cost);
        pageNumber=pageNumber+1;
    }

    return cost;
}


console.log(main("Seattle", 200));