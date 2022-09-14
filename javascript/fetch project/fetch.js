async function list(){
    let resp = await fetch(" https://dog.ceo/api/breeds/list/all" )
    let data = await resp.json();
    Breed(data.message);
}
list();

 const Breed = (breedlist)=>{
    document.getElementById("content").innerHTML = `<select onchange = "Breedimage(this.value)">
    <option >choose dogs breed list </option>
    ${Object.keys(breedlist).map(function (breed) {
    return `<option>${breed}</option>`
    })}
    </select>
    `
}
async function Breedimage(breed) {
    if (breed != "choose a dog") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        image(data.message);
    }
}
function image(images){
    document.getElementById("dogdiv").innerHTML = `
    <div class="dogdiv" style="background-image: url('${images[0]}');">
    </div>`
}
