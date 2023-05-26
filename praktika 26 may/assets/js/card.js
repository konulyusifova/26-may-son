var area= document.querySelector(".area")
fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/furnish')
.then(res=>res.json())
.then(res=>{
    res.forEach(el => {
        area.innerHTML +=`
        <div class="col-3">
                <div class="cards">
                    <div class="icons text-center  mt-4"><i class="${el.icon}"></i></div>
                   <div class="card-api">
                    <h2>${el.name}</h2>
                    <span>${el.about}</span>

                   </div>
                </div>
            </div>`
    });
})