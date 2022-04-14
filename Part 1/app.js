//1
const axios = import('axios');

let baseURL = "http://numbersapi.com";
let favNum = 3;

let res = axios.get("http://numbersapi.com")
console.log(res);

let response = axios.get(`${baseURL}/${favNum}/?json`);
console.log(response);
//2
let favNums =[3,7,21];
axios.get(`${baseURL}/${favNums}/?json`)
    .then(res => {console.log(res.data)})

//3
let fourPromises = [];

for(let i= 1; i<5; i++){
    fourPromises.push(axios.get(`${baseURL}/${favNum}/?json`));
}

Promise.all(fourPromises)
    .then(favNumArr => (favNumArr.forEach(p => console.log(p.text))))
    .catch(err => console.log(err))
