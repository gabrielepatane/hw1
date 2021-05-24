
function printNoMoreContent() {
    // Aggiunge un elemento che determina la fine dei contenuti mostrati
    // nel modo classico che conosciamo
    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.classList.add('the_end');
    const divd = document.createElement('div');
    divd.textContent = "Non c'è altro da vedere.";
    const img = document.createElement('img');
    img.src = "https://media.giphy.com/media/jWexOOlYe241y/giphy.gif";
    div.appendChild(divd);
    div.appendChild(img);
    container.appendChild(div);
}

function fetchSongs() {
        fetch("fetch_song.php").then(fetchResponse).then(fetchSongsJson);
}


function fetchResponse(response) {
    if (!response.ok) {return null};
    return response.json();
}

function fetchSongsJson(json) {
    console.log("Fetching...");
    console.log(json);
    if (!json.length) {noResults(); return;}
    
    const container = document.getElementById('results');
    container.innerHTML = '';
    container.className = 'spotify';

    for (let track in json) {
        const card = document.createElement('div');
        card.dataset.id = json[track].content.id;
        card.classList.add('track');
        const tracks = document.querySelectorAll(".track")
        const trackInfo = document.createElement('div');
        trackInfo.classList.add('trackInfo');
        card.appendChild(trackInfo);
        const img = document.createElement('img');
        img.src = json[track].content.image;
        trackInfo.appendChild(img);
        const infoContainer = document.createElement('div');
        infoContainer.classList.add("infoContainer");
        trackInfo.appendChild(infoContainer);
        const info = document.createElement('div');
        info.classList.add("info");
        infoContainer.appendChild(info);
        const name = document.createElement('strong');
        name.innerHTML = json[track].content.title;
        info.appendChild(name);
        const artist = document.createElement('a');
        artist.innerHTML = json[track].content.artist;
        info.appendChild(artist);
        const saveForm = document.createElement('form');
        saveForm.classList.add("saveForm");
        card.appendChild(saveForm);
        const save = document.createElement('input');
        save.value='';
        save.setAttribute("type", "submit");
        save.classList.add("save");
        saveForm.appendChild(save);
        const canzoneInfo= document.createElement('div');
        canzoneInfo.classList.add("canzoneInfo");
        const tempo = document.createElement('p');
        tempo.innerHTML = 'Tempo: ';
        canzoneInfo.appendChild(tempo);
        const key = document.createElement('p');
        key.innerHTML = 'Scala: ';
        canzoneInfo.appendChild(key);
        const date = document.createElement('p');
        date.innerHTML = 'Data di pubblicazione: ';
        canzoneInfo.appendChild(date);
        const duration = document.createElement('p');
        duration.classList.add("duration");
        duration.innerHTML = '';
        canzoneInfo.appendChild(duration);
        card.appendChild(canzoneInfo);
        for (track of tracks){
          track.addEventListener('click', resizeSong);
        }
        //card.addEventListener('click', selectSpotify);
        container.appendChild(card);
        }
}

function noResults() {
    // Definisce il comportamento nel caso in cui non ci siano contenuti da mostrare
    const container = document.getElementById('results');
    container.innerHTML = '';
    const nores = document.createElement('div');
    nores.className = "nores";
    nores.textContent = "Nessun risultato.";
    container.appendChild(nores);
  }

    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");

  function resizeSong(event){  
    const track = event.currentTarget;
    const otherContents = document.querySelectorAll(".track");
    const overlay = document.getElementById("overlay");
    const title = event.currentTarget.children[0].children[1].children[0].children[0];
    for(otherContent of otherContents){
      otherContent.classList.remove("unselected");
    }
    if(event.currentTarget.classList.contains("selected")){
      event.currentTarget.classList.remove("selected");
      event.currentTarget.classList.remove("unselected");
      event.currentTarget.querySelector('img').classList.remove("img-selected");
      event.currentTarget.querySelector('.canzoneInfo').classList.remove("show");
      event.currentTarget.querySelector('.infoContainer').classList.remove("infoSelected");
      overlay.classList.add("hidden");
      title.classList.remove("showTitle");
    }else{
      overlay.classList.remove("hidden");
      title.classList.add("showTitle");
      event.currentTarget.classList.remove("unselected");
      event.currentTarget.classList.add("selected");
      event.currentTarget.querySelector('img').classList.add("img-selected"); 
      event.currentTarget.querySelector('.canzoneInfo').classList.add("show");
      event.currentTarget.querySelector('.infoContainer').classList.add("infoSelected");
      const selectedContent = event.currentTarget.dataset.id;
      for(otherContent of otherContents){
        if(otherContent.dataset.id !== selectedContent){
          otherContent.classList.remove("selected");
          otherContent.classList.add("unselected");
          otherContent.querySelector('img').classList.remove("img-selected");
          otherContent.querySelector('.canzoneInfo').classList.remove("show");
          otherContent.querySelector('.infoContainer').classList.remove("infoSelected");
        }
      }
    }  
    }

fetchSongs();