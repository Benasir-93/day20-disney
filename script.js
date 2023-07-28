async function foo(){
    try {
        let api= await fetch("https://api.disneyapi.dev/character");
        let data=await api.json();
        console.log(data);

        
    var container=document.createElement("div")
    container.setAttribute("class","container")
    container.innerHTML=`<h1>Fetch Details From https://api.disneyapi.dev/character</h1><br>`;
    document.body.append(container)

data.data.forEach(i => {
    console.log(i);
    
    var div = document.createElement("div");
    div.style.marginBottom="50px"
    div.innerHTML = `
                    <div class="card border border-danger border-3 mb-3 mx-2 detail">
<div class="card-header bg-transparent border-danger border-3 text-center fw-bold">Disney Details</div>
<div class="card-body text-dark" style="     background-image: linear-gradient(to right,rgb(240, 221, 241),rgb(201, 201, 248),rgb(247, 210, 244));
">
<h5><span class="text-danger fw-b">Source URL </span>${i.sourceUrl
}</h5><br>
<h5><span class="text-danger fw-b">Name: </span>${i.name}</h5><br>

<h5><span class="text-danger fw-b">Image URL</span> ${i.imageUrl
}</h5><br>
<h5><span class="text-danger fw-b">Created At:</span> ${i.createdAt}</h5><br>

</div>
</div>`;
    document.body.append(div);
});
    } catch (error) {
        console.log(error);
    }
}
foo()