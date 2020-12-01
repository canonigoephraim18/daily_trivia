async function getAPI(){
    try{
    const urlAPI = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    const response = await fetch(urlAPI);
    const data = await response.json();
    const {copyright, date, explanation, hdurl, media_type, service_version, title, url} = data;

    var img = new Image(400,500);
    img.src = hdurl;
    document.getElementById("image").appendChild(img);
    document.getElementById("title").innerHTML = title;
    document.getElementById("explanation").innerHTML = explanation;
    
    }catch(err){
       console.log(err);
    }
}

getAPI();