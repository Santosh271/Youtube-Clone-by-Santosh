// we need two things:

// 1) display() 2) searchVideo()

let div = document.getElementById("videodiv");


//  1) show/display videos on homepage
async function display(){

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=1000`);
let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}
}
display();

//  2) Search something is typed in the seachbox

 
async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let video = document.getElementById("video").value; // Search String/ Query String

//search for videos
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=1000`);
let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}

}