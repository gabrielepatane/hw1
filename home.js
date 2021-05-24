const artistiMain = document.querySelectorAll(".artistaMain")
let i=0;
for (artistaMain of artistiMain){
  const image = document.createElement('img');
  image.src = artists[i].img_url;
  artistaMain.appendChild(image);
  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  artistaMain.appendChild(infoContainer);
  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);
  const name = document.createElement('strong');
  name.innerHTML = artists[i].name;
  info.appendChild(name);
  const type = document.createElement('a');
  type.innerHTML = artists[i].type;
  info.appendChild(type);
  const icon = document.createElement('img');
  icon.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8";
  icon.classList.add("icon");
  infoContainer.appendChild(icon);
  i++;
}

const artistiInfo = document.querySelectorAll(".artistaInfo")
i=0;
for (artistaInfo of artistiInfo){
  const bio = document.createElement('p');
  bio.innerHTML = artists[i].bio;
  artistaInfo.appendChild(bio);
  const country = document.createElement('p');
  country.innerHTML = 'Paese: ' + artists[i].country;
  artistaInfo.appendChild(country);
  const label = document.createElement('p');
  label.innerHTML = 'Etichetta: ' + artists[i].label;
  artistaInfo.appendChild(label);
  const genre = document.createElement('p');
  genre.classList.add("genre");
  genre.innerHTML = 'Genere: ';
  artistaInfo.appendChild(genre);
  i++;
}

const artisti = document.querySelectorAll(".artisti")
for (artista of artisti){
  artista.addEventListener('click', resizeArtist);
  artista.addEventListener('click', getGenres); 
}



const canzoniMain = document.querySelectorAll(".canzoneMain")
i=0;
for (const canzoneMain of canzoniMain){
  const image = document.createElement('img');
  image.src = songs[i].img_url;
  canzoneMain.appendChild(image);
  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  canzoneMain.appendChild(infoContainer);
  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);
  const name = document.createElement('strong');
  name.innerHTML = songs[i].name;
  info.appendChild(name);
  const artist = document.createElement('a');
  artist.innerHTML = songs[i].artist;
  info.appendChild(artist);  
  const icon = document.createElement('img');
  icon.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8";
  icon.classList.add("icon");
  infoContainer.appendChild(icon);
  i++;
}

const canzoniInfo = document.querySelectorAll(".canzoneInfo")
i=0;
for (canzoneInfo of canzoniInfo){
  const tempo = document.createElement('p');
  tempo.innerHTML = 'Tempo: ' + songs[i].tempo;
  canzoneInfo.appendChild(tempo);
  const key = document.createElement('p');
  key.innerHTML = 'Scala: ' + songs[i].key;
  canzoneInfo.appendChild(key);
  const date = document.createElement('p');
  date.innerHTML = 'Data di pubblicazione: ' + songs[i].date;
  canzoneInfo.appendChild(date);
  const duration = document.createElement('p');
  duration.classList.add("duration");
  duration.innerHTML = '';
  canzoneInfo.appendChild(duration);
  i++;
}

function resizeArtist(event){  
const otherContents = document.querySelectorAll(".artisti");
for(otherContent of otherContents){
  otherContent.classList.remove("unselected");
}
if(event.currentTarget.classList.contains("selected")){
  event.currentTarget.classList.remove("selected");
  event.currentTarget.classList.remove("unselected");
  event.currentTarget.querySelector('img').classList.remove("img-selected");
  event.currentTarget.querySelector('.artistaInfo').classList.remove("show");
  event.currentTarget.querySelector('.infoContainer').classList.remove("infoSelected");
}else{
  event.currentTarget.classList.remove("unselected");
  event.currentTarget.classList.add("selected");
  event.currentTarget.querySelector('img').classList.add("img-selected"); 
  event.currentTarget.querySelector('.artistaInfo').classList.add("show");
  event.currentTarget.querySelector('.infoContainer').classList.add("infoSelected");
  const selectedContent = event.currentTarget.dataset.id;
  for(otherContent of otherContents){
    if(otherContent.dataset.id !== selectedContent){
      otherContent.classList.remove("selected");
      otherContent.classList.add("unselected");
      otherContent.querySelector('img').classList.remove("img-selected");
      otherContent.querySelector('.artistaInfo').classList.remove("show");
      otherContent.querySelector('.infoContainer').classList.remove("infoSelected");
    }
  }
}  
}

const overlay = document.getElementById("overlay");
overlay.classList.add("hidden");
overlay.addEventListener('click', closeModal);

function closeModal(event){
  event.currentTarget.classList.add("hidden");
  const card = document.querySelector('.selected');
  card.classList.remove("selected");
  card.children[0].children[0].classList.remove("img-selected");
  card.children[1].classList.remove("show");
  card.children[0].children[1].children[0].children[0].classList.remove("showTitle");
}

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
  contentObj.id = track.dataset.id;
  contentObj.title = track.dataset.title;
  contentObj.artist = track.dataset.artist;
  contentObj.duration = track.dataset.duration;
  contentObj.popularity = track.dataset.popularity;
  contentObj.image = track.dataset.image;
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


const icons = document.querySelectorAll(".icon")
for (icon of icons){
    icon.addEventListener('click', addFavorite);
}

function addFavorite(event){
const favorites = document.querySelector(".favoriteContainer");
favorites.classList.add("container");
if(event.currentTarget.classList.contains("favorite")){
  event.currentTarget.classList.remove("favorite");
  event.currentTarget.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8"
  removeFavorite(event);
  hideFavorites(favorites);
}else{
  event.currentTarget.classList.add("favorite");
  event.currentTarget.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828884.svg?token=exp=1619280362~hmac=02281581f8012685967feb7fb3203f9a" 
  const favoriteCard =  document.createElement('div');
  favoriteCard.classList.add("favoriteCard")
  const image = document.createElement('img');
  image.src = event.currentTarget.parentNode.parentNode.querySelector("img").src;
  image.classList.add('img');
  favoriteCard.appendChild(image);   
  const favoriteMain = document.createElement('div');
  favoriteMain.classList.add('artistiMain');
  favoriteCard.appendChild(favoriteMain);
  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  favoriteMain.appendChild(infoContainer);
  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);
  const name = document.createElement('strong');
  name.innerHTML = event.currentTarget.parentNode.querySelector("strong").innerHTML;
  info.appendChild(name);
  const detail = document.createElement('a');
  detail.innerHTML = event.currentTarget.parentNode.querySelector("a").innerHTML;
  detail.classList.add('detail');
  info.appendChild(detail);  
  const icon = document.createElement('img');
  icon.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828884.svg?token=exp=1619280362~hmac=02281581f8012685967feb7fb3203f9a";
  icon.classList.add("icon");
  infoContainer.appendChild(icon);    
  favorites.appendChild(favoriteCard);
  icon.addEventListener('click', removeFavorite);
  hideFavorites(favorites);
}
}

function removeFavorite(event){
const favorites = document.querySelectorAll(".favoriteCard");
for(favorite of favorites){
  if(favorite.children[1].querySelector("strong").innerHTML === event.currentTarget.parentNode.parentNode.querySelector("strong").innerHTML){
    favorite.remove();
    const artisti = document.querySelectorAll(".artistaMain");
    for(artista of artisti){
      if(artista.children[1].querySelector("strong").innerHTML === favorite.children[1].querySelector("strong").innerHTML){
        artista.children[1].querySelector("img").src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8"
      }
    }
    const canzoni = document.querySelectorAll(".canzoneMain");
    for(canzone of canzoni){
      if(canzone.children[1].querySelector("strong").innerHTML === favorite.children[1].querySelector("strong").innerHTML){
        canzone.children[1].querySelector("img").src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8"
      }
    }
    const favoriteContainer = document.querySelector(".favoriteContainer");
    hideFavorites(favoriteContainer);
  }
}
}

function hideFavorites(favoriteContainer){
if(favoriteContainer.childNodes.length <= 1){
  favoriteContainer.parentNode.classList.add('hidden');
}else{
  favoriteContainer.parentNode.classList.remove('hidden');
} 
}

let contentObj = {}; 
document.querySelector("#search form").addEventListener("submit", search);

  function jsonSpotify(json) {
    if (!json.tracks.items.length) {noResults(); return;}
    
    const container = document.getElementById('results');
    container.innerHTML = '';
    container.className = 'spotify';

    for (let track in json.tracks.items) {
        const card = document.createElement('div');
        card.dataset.id = json.tracks.items[track].id;
        card.dataset.title = json.tracks.items[track].name;
        card.dataset.artist = json.tracks.items[track].artists[0].name;
        card.dataset.duration = json.tracks.items[track].duration_ms;
        card.dataset.popularity = json.tracks.items[track].popularity;
        card.dataset.image = json.tracks.items[track].album.images[0].url;
        card.classList.add('track');
        const tracks = document.querySelectorAll(".track")
        const trackInfo = document.createElement('div');
        trackInfo.classList.add('trackInfo');
        card.appendChild(trackInfo);
        const img = document.createElement('img');
        img.src = json.tracks.items[track].album.images[0].url;
        trackInfo.appendChild(img);
        const infoContainer = document.createElement('div');
        infoContainer.classList.add("infoContainer");
        trackInfo.appendChild(infoContainer);
        const info = document.createElement('div');
        info.classList.add("info");
        infoContainer.appendChild(info);
        const name = document.createElement('strong');
        name.innerHTML = json.tracks.items[track].name;
        info.appendChild(name);
        const artist = document.createElement('a');
        artist.innerHTML = json.tracks.items[track].artists[0].name;
        info.appendChild(artist);
        const saveForm = document.createElement('form');
        saveForm.classList.add("saveForm");
        card.appendChild(saveForm);
        const save = document.createElement('input');
        save.value='';
        save.setAttribute("type", "submit");
        save.classList.add("save");
        saveForm.appendChild(save);
        saveForm.addEventListener('submit', saveSong);
        const canzoneInfo= document.createElement('div');
        canzoneInfo.classList.add("canzoneInfo");
        const popularity = document.createElement('p');
        popularity.innerHTML = 'Popolarità: '+json.tracks.items[track].popularity;
        canzoneInfo.appendChild(popularity);
        const date = document.createElement('p');
        date.innerHTML = 'Data di pubblicazione: '+json.tracks.items[track].album.release_date;
        canzoneInfo.appendChild(date);
        const duration = document.createElement('p');
        const durationMs = json.tracks.items[track].duration_ms;
        const durationSec = durationMs / 1000;
        const durationMin = durationSec / 60;
        const intPart = parseInt(durationMin, 10);
        const decimalPart = durationMin - intPart;
        const decimalPartRounded =  Math.floor(decimalPart * 100) / 100;
        const trackSec = parseInt((decimalPartRounded * 60), 10);
        duration.classList.add("duration");
        duration.innerHTML = "Durata: "+intPart+" min "+trackSec+" sec";
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
  nores.className = "loading";
  nores.textContent = "Nessun risultato.";
  container.appendChild(nores);
}


function search(event)
{
    // Leggo il tipo e il contenuto da cercare e mando tutto alla pagina PHP
    contentObj = {};
    const form_data = new FormData(document.querySelector("#search form"));
    // Mando le specifiche della richiesta alla pagina PHP, che prepara la richiesta e la inoltra
    fetch("search_content.php?q="+encodeURIComponent(form_data.get('search'))).then(searchResponse).then(searchJson);

    // Mostro i risultati ottenuti
    const container = document.getElementById('results');
    container.innerHTML = '';

    // Evito che la pagina venga ricaricata
    event.preventDefault();
}

function searchResponse(response)
{
    console.log(response);
    return response.json();
}

function searchJson(json)
{
    console.log(json);

    if (json.length == 0) { noResults(); return; }
    jsonSpotify(json);
}

function saveSong(event){
  // Preparo i dati da mandare al server e invio la richiesta con POST
  const formData = new FormData(document.querySelector(".saveForm"));
  formData.append('id', contentObj.id);
  formData.append('title', contentObj.title);
  formData.append('artist', contentObj.artist);
  formData.append('duration', contentObj.duration);
  formData.append('popularity', contentObj.popularity);
  formData.append('image', contentObj.image);
  fetch("save_song.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);

  event.preventDefault();
}

function dispatchResponse(response) {

  console.log(response);
  return response.json().then(databaseResponse); 
}

function dispatchError(error) { 
  console.log("Errore");
}

function databaseResponse(json) {
  if (!json.ok) {
      dispatchError();
      return null;
  }
}
