let base_url = "https://api.themoviedb.org/3"
let cont = document.querySelector('.container')
let show_all = document.querySelector(".show_all")
let bg_dv = document.querySelector('.bg_dv')
let img_post_new = document.querySelectorAll('.img_post_new')
fetch(base_url + '/movie/now_playing?language=ru', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
  .then(res => reload(res.results, cont))

show_all.onclick = () => {
	reload(arr.slice(0, 8))
}
show_all.onclick = () => {
	reload(arr)
}

function reload(arr, place) {
    for (let item of arr) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let vote_average = document.createElement('div')
        let vote_average_h1 = document.createElement('h1')
        let h1 = document.createElement('h1')

        div.style.marginRight = 'none' 
        img.src =`https://image.tmdb.org/t/p/w500${item.poster_path}` 
        img.alt = "" 
        vote_average_h1.innerHTML = item.vote_average
        h1.innerHTML = item.title

        img.classList.add('img_post_new')
        h1.classList.add('h1_post_new')
        div.classList.add('place_img')
        vote_average.classList.add('vote_average')
        vote_average_h1.classList.add('vote_average_h1')
        place.append(div)
        div.append(img, h1, vote_average)
        vote_average.append(vote_average_h1)

        if (vote_average_h1.innerHTML <= 5) {
            vote_average.style.backgroundColor = '#CB3F36 !important'
        }else{
            vote_average.style.backgroundColor = '#89CB36 !important'
        }
    }
}
img_post_new.forEach((mouse) => {
    mouse.onmouseenter = () => {
        // bg_dv.style.backgroundImage = `url("https://image.tmdb.org/t/p/w500${item.backdrop_path}")`;
        mouse.style.background = 'rgba(54, 87, 203, 0.65);'
        mouse.style.transition = ".4s ease"
    }
})

fetch(base_url + '/movie/changes?page=1', {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
  .then(res => console.log(res))