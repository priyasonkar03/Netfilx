let movies = [
    {
        name :"Pushpa 2",
        poster:"https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/26/5837c92b4dbf2943b8088b53051cbef5eb63f.png?impolicy=abp_cdn&imwidth=720",
        rating:8.7
    },
    {
        name :"Kingdom of the Planet of the Apes",
        poster:"https://m.media-amazon.com/images/M/MV5BNDcxM2RiOWMtMGEzMC00NDEyLTgzMjEtOWZjYzVhN2E2ZjcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        rating:8.7
    },
    {
        name :"12th fail",
        poster:"https://upload.wikimedia.org/wikipedia/en/f/f2/12th_Fail_poster.jpeg",
        rating:8.7
    },
    {
        name :"Dunki",
        poster:"https://filmfare.wwmindia.com/content/2023/aug/dunki11692788545.jpg",
        rating:8.7
    },
    {
        name :"Dawn of the Planet of the Apes",
        poster:"https://lumiere-a.akamaihd.net/v1/images/image_12a44b94.jpeg?region=0%2C0%2C1400%2C2100",
        rating:8.7
    },
    {
        name :"Avergers Endgame",
        poster:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
        rating:8.7
    },
    {
        name :"Lagaan",
        poster : "https://www.tallengestore.com/cdn/shop/products/7381744713908A_6ecd2833-41ea-4563-9d57-308022f6c38a.jpg?v=1683929380",
        rating :6.7
    },
    {
        name :"Dream Big",
        poster : "https://images.jdmagicbox.com/comp/jd_social/news/2018aug11/image-309621-c43kpnh6cg.jpg",
        rating :8.5
    },
    {
        name :"211",
        poster : "https://i.ebayimg.com/00/s/MTQ4MVgxMDAw/z/BKoAAOSwdlFgWGWQ/$_57.JPG?set_id=8800005007",
        rating :9.1
    },
    {
        name :"The Engineer",
        poster : "https://www.themoviedb.org/t/p/original/t2WBlN3YCzieAezM3n3Oh20Ue2s.jpg",
        rating :8.5
    },
    {
        name :"Uddan",
        poster : "https://images.ottplay.com/images/udaan-736.jpg",
        rating :6.5
    },
    {
        name :"Red",
        poster : "https://bestsimilar.com/img/movie/thumb/40/69777.jpg",
        rating :7.8
    },
    {
        name :"Dream Girl2",
        poster : "https://m.media-amazon.com/images/M/MV5BNjczMDBlM2UtYjFjNi00MTlmLTgzYzAtMzRiNDRkYzg2YWQ3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
        rating :9.8
    },
    {
        name:"Gadar2",
        poster : "https://m.media-amazon.com/images/M/MV5BZGEzMDJjNGUtYTFhZi00MDgyLWIzMzYtMzcwMDQyZjcyNGY1XkEyXkFqcGdeQXVyNTcwNTM5ODI@._V1_.jpg",
        rating:9.5
    },
    {
        name:"Bhoot Police",
        poster : "https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg",
        rating:9.5
    },
    {
        name:"Pathan",
        poster:"https://bollywoodmovieposters.com/wp-content/uploads/2023/01/pathan-poster-shahrukh-khan-movie-srk.jpg",
        rating:9.0
    },
    {
        name:"Javan",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Vv9-ORP2mclEEPiLblsDjlHV4mIERb-JZ_EDkyb9MMzHfOThohjiFl6S_iWxdHhRBoo&usqp=CAU",
        rating:9.0
    }

];
function searchMovie(){
    let movieName = document.getElementById('search').value;
    
    if(movieName!==""){
    let result = movies.filter(function(movie){
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })
        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }
}

function displayMovies(data){
    document.getElementById("movies").innerHTML="";
    
    let htmlString = ``;


for(let i=0; i<data.length; i++){
    htmlString = htmlString+`
    <div class="movie">
    <div class="overlay">
        <div class="vedio"></div>
        <div class="details">
            <h1>${data[i].name}</h1>
            <h2>IMDB : ${data[i].rating}</h2>
                <p>Rami Malk, Jhon Jacobs. Emma Stone</p>
        </div>
    </div>
    <img class="poster" src="${data[i].poster}" alt="poster">
</div>
    `
}

console.log(htmlString);
document.getElementById("movies").innerHTML=htmlString;
}
displayMovies(movies);
 














//let movieDIV = document.createElement("div");
//movieDIV.classList.add("movie");
//let overlayDIV = document.createElement("div")
//overlayDIV.classList.add("overlay");

//movieDIV.appendChild(overlayDIV);

//console.log(movieDIV);


