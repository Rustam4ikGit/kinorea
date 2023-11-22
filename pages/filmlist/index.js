let base_url2 = "https://api.themoviedb.org/3/movie/"
let rate = document.querySelector('.rate')
let people = document.querySelector('.people')
let div_1_1 = document.querySelector('.div_1_1')
let div_1 = document.querySelector('.div_1')
let title = document.querySelector('title')
let id = location.search.split('=').at(-1)

fetch(base_url2 + id + '?language=ru', {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
  }
})
  .then(res => res.json())
  .then(res => reload(res))

function reload(item) {
  title.innerHTML = item.title
  let poster = document.createElement('img')
  let imdb = document.createElement('h1')
  imdb.innerHTML = item.vote_average
  imdb.classList.add('imdb_h1')
  let logo = document.createElement('h1')
  let logo2 = document.createElement('h1')
  logo.innerHTML = item.title
  logo2.innerHTML = item.original_title
  let description = document.createElement('h1')
  description.innerHTML = item.overview.slice(0, 500)
  let button = document.createElement('button')
  let img_watch = document.createElement('img')
  button.innerHTML = 'Смотреть трейлер'
  img_watch.src = '/public/icon/watch.svg'
  button.prepend(img_watch)
  poster.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`
  document.querySelector('.can').append(imdb)
  div_1.prepend(poster)
  div_1_1.prepend(logo, logo2)
  div_1_1.append(description, button)
  people.innerHTML = Math.floor(item.popularity)
  rate.innerHTML = `${Math.floor(item.vote_average * 10)}`
  document.querySelector('.pop_hov').style.width = `${rate}`
  button.classList.add('watch_btn')
  poster.classList.add('poster')
  img_watch.classList.add('img_watch')
  description.classList.add('description')
  logo.classList.add('logo')
  logo2.classList.add('logo2')
}