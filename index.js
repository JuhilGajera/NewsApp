// const API_KEY = "6817778ae6144e8f84cf4e141ece8f27";
// const api_url =
//   "https://api.mediastack.com/v1/news ? access_key = 7f99a935eb7893e5e159d583ef7b940a";

//   "https://cors-anywhere.com/https://newsapi.org/v2/everything?q=tesla&from=2022-12-29&sortBy=publishedAt&apiKey=6817778ae6144e8f84cf4e141ece8f27";
// fetch(api_url).then((res) => console.log(res.body.getReader()));
const results_container = document.getElementById("result-section");
const result_container = document.getElementById("result");

const api_token1 = "7f99a935eb7893e5e159d583ef7b940a";
const Url1 = "https://api.mediastack.com/v1/news";

async function myFunction1() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url1}?access_key=${api_token1}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token2 = "7f99a935eb7893e5e159d583ef7b940a";
const Url2 = "https://api.mediastack.com/v1/news";
async function myFunction2() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url2}?access_key=${api_token2}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token3 = "7f99a935eb7893e5e159d583ef7b940a";
const Url3 = "https://api.mediastack.com/v1/news";
async function myFunction3() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url3}?access_key=${api_token3}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token4 = "7f99a935eb7893e5e159d583ef7b940a";
const Url4 = "https://api.mediastack.com/v1/news";
async function myFunction4() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url4}?access_key=${api_token4}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token5 = "7f99a935eb7893e5e159d583ef7b940a";
const Url5 = "https://api.mediastack.com/v1/news";
async function myFunction5() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url5}?access_key=${api_token5}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token6 = "7f99a935eb7893e5e159d583ef7b940a";
const Url6 = "https://api.mediastack.com/v1/news";
async function myFunction6() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url6}?access_key=${api_token6}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token7 = "7f99a935eb7893e5e159d583ef7b940a";
const Url7 = "https://api.mediastack.com/v1/news";
async function myFunction7() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url7}?access_key=${api_token7}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token8 = "7f99a935eb7893e5e159d583ef7b940a";
const Url8 = "https://api.mediastack.com/v1/news";
async function myFunction8() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url8}?access_key=${api_token8}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token9 = "7f99a935eb7893e5e159d583ef7b940a";
const Url9 = "https://api.mediastack.com/v1/news";
async function myFunction9() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url9}?access_key=${api_token9}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
const api_token10 = "7f99a935eb7893e5e159d583ef7b940a";
const Url10 = "https://api.mediastack.com/v1/news";
async function myFunction10() {
  result_container.innerHTML = " ";
  const res = await fetch(`${Url10}?access_key=${api_token10}`);
  const data = await res.json();
  console.log(data);
  const json_data = data.articles;
  json_data.map((ele) => {
    if (
      ele.urlToImage != null &&
      ele.description != null &&
      ele.title != null &&
      ele.author != null
    ) {
      result_container.innerHTML += `
              <div class='news'>
                  <div class='imgUrl'><img src="${ele.urlToImage}" alt="urlImage" /></div>
                  <div class='info'>
                      <h3 class='title'>${ele.title}</h3>
                      <p class='author'>Author - ${ele.author}</p>
                      <p class='desc'>${ele.description}</p>
                  </div>
              </div>
              `;
      results_container.appendChild(result_container);
    }
  });
}
