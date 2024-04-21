async function cardmaker(){
    let raw1 = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let id_name = await raw1.json();
    let raw2 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let caption = await raw2.json();
    let raw3 = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    let photo = await raw3.json();
    let temp = "";
    let temp2 = "";
    for(var i = 0 ;i < 10; i++){
        temp += `<div class="card">
        <div class="cardname">
        <a href=""><i class="fa-solid fa-user"></i></a>
        <h1>${id_name[i].name}</h1>
        </div>
        <div class="cardimg"><img src="${photo[i].url}" alt=""></div>
        <div class="carddata">
        <div class="iconsec">
        <i class="fa-regular fa-thumbs-up"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-solid fa-share"></i>
        </div>
        <div class="caption">
        <h1>${caption[i].title}</h1>
        </div>
        </div>
        </div>`;
        if(i<5){
            temp2 += `<div class="account">
            <div>
              <a href=""><i class="fa-solid fa-user"></i></a>
              <h3>${id_name[i].name}</h3>
            </div>
            <a href="">Follow</a>
          </div>`
        }
        
    }
    document.querySelector(".spec").innerHTML = temp;
    document.querySelector(".users").innerHTML = temp2;       
}
cardmaker();

async function explore(){
  let raw3 = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  let photo = await raw3.json();
  exp = "";
  for(var j = 0;j<12;j++){
    exp += `
    <div class="exp-post">
      <div><img src="${photo[j].url}" alt=""></div>
    </div>`
  }
  document.querySelector(".exp-main").innerHTML = exp;
}
explore();
document.querySelector(".search").addEventListener("click", function(){
    document.querySelector(".search").style.border = `1px solid orange`;
    document.querySelector(".nav-data").style.fontSize= `0px`;
    document.querySelector(".hide").style.display= `none`;
    document.querySelector(".sidenav").style.width = "5%";
    document.querySelector(".searchnav").style.display = "block";
})
