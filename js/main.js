const videoData = [
  {
    id: 1,
    description: "Julia in 100 seconds",
    subscriber: "kevin hart",
    src: "./videos/julia.mp4",
    posted: "6 months ago",
    views: 689,
    avatar: "./images/youtube.png",
  },
  {
    id: 2,
    description: "10 JavaScript Projects in 10 Hours - Coding Challenge 🔥",
    subscriber: "fireship",
    src: "./videos/julia.mp4",
    posted: "3 months ago",
    views: 900000,
    avatar: "./images/youtube.png",
  },
  {
    id: 3,
    description: "Justin Bieber - As I Am (Lyrics) ft. Khalid",
    subscriber: "traversy media",
    src: "./videos/julia.mp4",
    posted: "2 months ago",
    views: 12000,
    avatar: "./images/youtube.png",
  },
  {
    id: 4,
    description: "pexels-ivan-khmelyuk-7222009",
    subscriber: "clever programmer",
    src: "./videos/julia.mp4",
    posted: "7 months ago",
    views: 353,
    avatar: "./images/youtube.png",
  },
  {
    id: 5,
    description:
      "We’ve all had that “Gaffer” 😂 New video out now with Top Eleven 🎥😎 #shorts #football #soccer",
    subscriber: "sara smith",
    src: "./videos/julia.mp4",
    posted: "6 months ago",
    views: 223,
    avatar: "./images/youtube.png",
  },
  {
    id: 6,
    description:
      "y2mate.com - JavaScript  Lecture 5  CS50s Web Programming with Python and JavaScript 2020_480p",
    subscriber: "mbaku saku",
    src: "./videos/julia.mp4",
    posted: "2 months ago",
    views: 1050,
    avatar: "./images/youtube.png",
  },
  {
    id: 7,
    description:
      "y2mate.com - Neural Networks with JavaScript  Full Course using Brainjs_1080p",
    subscriber: "philip odere",
    src: "./videos/julia.mp4",
    posted: "5 months ago",
    views: 101,
    avatar: "./images/youtube.png",
  },
  {
    id: 8,
    description: "male rappers vibing to nicki minaj’s music (compilation)",
    subscriber: "catherine oliver",
    src: "./videos/julia.mp4",
    posted: "8 months ago",
    views: 541,
    avatar: "./images/youtube.png",
  },
];

// window.$0.remove();
const videoContainer = document.getElementById("video");

videoContainer.innerHTML = videoData
  .map(function (c, i) {
    return `
<div id="box-1" key=${i} onclick="doSomething(${c.id})">
<div class="vid-box"   >
          <video
            class="vid"
            controls
            src=${c.src}
          ></video>
          <div class="vid-content">
        <div class="subscriber">
        <img   src=${c.avatar} alt="" />
        
        </div>
          <div>
            <h3>
              ${c.description}
            </h3>
            <p>${c.subscriber}</p>

            <span>${c.views} views</span> . <span>${c.posted}</span>
          </div>
          </div>
        </div>
</div>
`;
  })
  .join("");

// handle redirect

const vidBox = document.getElementById("box-1");

function doSomething(id) {
  window.location.href = "/views/videoContent.html" + "?" + id;
}

// handle redirect on logo
document.getElementById("logo").style.cursor = "pointer";
document.getElementById("logo").onclick = function () {
  window.location.href = "/";
};
