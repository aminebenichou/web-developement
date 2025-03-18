/* 
    document ==> HTML file

    document.getElementsByClassName("content")  
    ===> will return a list of elements
    ex: [div]

    document.getElementById("logo")
    ex: img
*/


// Create 100 Video card

const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=uGUmjA9jj3U&t=892s&part=id%2Csnippet&type=video&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = document.querySelector('.content')

async function getChannelDetails(channelId) {
    console.log(channelId)
    const url = 'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=' + channelId;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.items[0].snippet.thumbnails.high.url
    } catch (error) {
        console.error(error);
    }
}

function createVideo(item) {
    // creating tags
    const videoCard = document.createElement('div');
    const thumbnail = document.createElement('img')
    const title = document.createElement('h3')
    const channelInfo = document.createElement('div')
    const channelLogo = document.createElement('img')
    const channelName = document.createElement('p')

    // adding classes
    videoCard.classList.add('video-card')
    thumbnail.classList.add('thumbnail')
    title.classList.add('title')
    channelInfo.classList.add('channel-info')
    channelLogo.classList.add('channel-logo')

    // adding data
    thumbnail.src = item.snippet.thumbnails.high.url
    title.innerHTML = item.snippet.title
    channelName.innerHTML = item.snippet.channelTitle
    channelLogo.src = getChannelDetails(item.snippet.channelId)

    // adding children
    channelInfo.appendChild(channelLogo)
    channelInfo.appendChild(channelName)
    videoCard.appendChild(thumbnail)
    videoCard.appendChild(title)
    videoCard.appendChild(channelInfo)
    content.appendChild(videoCard)
}

async function getVideos() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        result.items.forEach(item => {
            createVideo(item)
        });    
    } catch (error) {
        console.error(error);
    }
}

getVideos();


// var i = 0
// const video_card = document.querySelector(".video-card")
// const content = document.querySelector(".content")
// const thumbnails = [
//     "./download (1).jpg",
//     "./download (2).jpg",
//     "./download (3).jpg",
// ]
// while (i<100){
//     const y = video_card.cloneNode(true)
//     console.log(y.children[1].innerHTML);
//     content.appendChild(y)
//     y.children[0].src = thumbnails[Math.floor(Math.random() * thumbnails.length)]
//     y.children[1].innerHTML = y.children[1].innerHTML + " cloned" 
//     i++
// }

// // How to change values in HTML

// const channel_name = document.getElementsByTagName("p")
// console.log(channel_name[0].innerHTML)
// channel_name[0].innerHTML = "text in inner html from js"
// console.log(channel_name[0].innerHTML)
// const title = document.querySelector(".title")
// title.innerHTML = "Hello"
// const titles = document.querySelectorAll(".title")
// titles.forEach((title)=>title.innerHTML= title.innerHTML + " hello")
