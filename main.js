const ellist = document.querySelector(".list")




async function postlarniOlish(){
   try{
    const javob = await fetch('https://jsonplaceholder.typicode.com/posts')
    const malumot = await javob.json()
    renderPost(malumot)
    
    console.log(malumot);
    
   } catch(xato){
    console.error("Api bilan xatolik" ,xato)
   }
}

postlarniOlish()

function renderPost(malumot){
    malumot.forEach((data)=>{
        ellist.innerHTML +=`
        <li class="xammasi">
        <span class="xammasi1">${data.id}</span>
        <h2 class="xammasi2">${data.title}</h2>
        <h2 class="xammasi3">${data.body}</h2>
        
        </li>
        `
    })
}

renderPost()