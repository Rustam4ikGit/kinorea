export let base_url = "https://api.themoviedb.org/3"
let cont = document.querySelector('.container')
let show_all = document.querySelector(".show_all")
let cont3 = document.querySelector('.container3')



fetch(base_url + '/discover/movie?include_adult=false&include_video=false&language=ru&page=1&sort_by=popularity.desc', {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
})
    .then(res => res.json())
    .then(res => reload3(res.results.slice(0, 4)), cont3)

function reload3(arr, place) {
    for (let item of arr) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let hover = document.createElement('div')
        let button = document.createElement('button')
        let vote_average = document.createElement('div')
        let vote_average_h1 = document.createElement('h1')
        let h1 = document.createElement('h1')

        div.style.marginRight = 'none'
        img.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`
        img.alt = ""
        vote_average_h1.innerHTML = item.vote_average
        h1.innerHTML = item.title
        button.innerHTML = 'Карточка фильма'

        img.classList.add('img_post_new')
        h1.classList.add('h1_post_new')
        hover.classList.add('hover_img')
        div.classList.add('place_img')
        button.classList.add('open_card_f')
        vote_average.classList.add('vote_average')
        vote_average_h1.classList.add('vote_average_h1')
        cont3.append(div)
        div.append(img, hover, h1, vote_average)
        hover.append(button)
        vote_average.append(vote_average_h1)
    }
}

fetch(base_url + '/movie/now_playing?language=ru', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
    .then(res => reload(res.results.slice(0, 8), cont))
    .then(res =>
        show_all.onclick = () => {
            reload(res.results, cont)
        }
    )

function reload(arr, place) {
    for (let item of arr) {
        let div = document.createElement('div')
        let button = document.createElement('button')
        let img = document.createElement('img')
        let hover = document.createElement('div')
        let vote_average_h1 = document.createElement('h1')
        let h1 = document.createElement('h1')
        let vote_average = document.createElement('div')

        vote_average.append(vote_average_h1)
        img.classList.add('img_post_new')
        button.classList.add('open_card_f')
        h1.classList.add('h1_post_new')
        hover.classList.add('hover_img')
        vote_average_h1.classList.add('vote_average_h1')
        vote_average.classList.add('vote_average')
        div.classList.add('place_img')
        place.append(div)
        div.append(img, hover, h1, vote_average)
        hover.append(button)

        img.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`
        img.alt = ""
        vote_average_h1.innerHTML = item.vote_average
        h1.innerHTML = item.title
        button.innerHTML = 'Узнать побольше'

        div.onclick = () => {
            location.assign('/pages/filmlist/?id=' + item.id)
        }
    }
}
