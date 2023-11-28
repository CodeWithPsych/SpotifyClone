// variables 
let audioElement = null;
let masterButton = document.getElementById('masterButton');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('progressBar');
const songItems = document.querySelectorAll('.song img');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songId = 0;


// songs array 
const songs = {
    1: new Audio('1.mp3'),
    2: new Audio('2.mp3'),
    3: new Audio('3.mp3'),
    4: new Audio('4.mp3'),
    5: new Audio('5.mp3'),
    6: new Audio('6.mp3'),
    7: new Audio('7.mp3'),
    8: new Audio('8.mp3'),
    9: new Audio('9.mp3'),
    10: new Audio('10.mp3'),
    11: new Audio('11.mp3'),
    12: new Audio('12.mp3'),
    13: new Audio('13.mp3'),
};

// pause / play control 
masterButton.addEventListener('click', () => {
    if (audioElement && !audioElement.paused) {
        audioElement.pause();
        masterButton.classList.remove('fa-pause-circle');
        masterButton.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    } else {
        if (audioElement) {
            audioElement.play();
        }
        masterButton.classList.remove('fa-play-circle');
        masterButton.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
});

// seekbar control 
function time_update() {
    audioElement.addEventListener('timeupdate', function () {
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress;
    });
}

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// songs play control 
function playSong(songId) {
    if (audioElement && !audioElement.paused) {
        audioElement.pause();
    }
    audioElement = songs[songId];
    audioElement.play();
    time_update();
    btn();
}

songItems.forEach((songItem) => {
    songItem.addEventListener('click', () => {
        const songId = songItem.id;
        playSong(songId);
    });
});

// buttons control 
function btn() {
    masterButton.classList.remove('fa-play-circle');
    masterButton.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
};

// next button 
next.addEventListener('click', () => {
    if (songId >= 12) {
        songId = 0;
    }
    else {
        songId += 1;
    }
    audioElement.play();
    time_update();
    btn();
    playSong(songId);
});

// previous button 
previous.addEventListener('click', () => {
    if (songId <= 0) {
        songId = 12;
    }
    else {
        songId -= 1;
    }
    audioElement.play();
    time_update();
    btn();
    playSong(songId);
});


// searchbar
function cal(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.toLowerCase();
    let not_found = document.querySelector('#not_found');
    
    let found = false;

    songItems.forEach((songItem) => {
        const songItemId = songItem.id;
        if (songItemId === searchValue) {
            songItem.style.display = "block";
            found = true;
        } else {
            songItem.style.display = "none";
        }
    });

    if (!found) {
        not_found.style.display = "block";
    } else {
        not_found.style.display = "none";
    }
}


// home button 
const home = document.querySelector(".home");
home.addEventListener('click', () => {
    window.location.href = "index.html";
})

// alert generate 
const enter = document.getElementById("enter");
enter.addEventListener('click', cal);

const trend = document.querySelector('.trend');
trend.addEventListener('click', () => {
    alert("Not allowed");
})
const library = document.querySelector('.library');
library.addEventListener('click', () => {
    alert("Not allowed");
})
const history = document.querySelector('.history');
history.addEventListener('click', () => {
    alert("Not allowed");
})
const sub = document.querySelector('.sub');
sub.addEventListener('click', () => {
    alert("Not allowed");
})
const later = document.querySelector('.later');
later.addEventListener('click', () => {
    alert("Not allowed");
})
const upload = document.querySelector('.upload');
upload.addEventListener('click', () => {
    alert("Not allowed");
})
const download = document.querySelector('.download');
download.addEventListener('click', () => {
    alert("Not allowed");
})
const setting = document.querySelector('.setting');
setting.addEventListener('click', () => {
    alert("Not allowed");
})
const help = document.querySelector('.help');
help.addEventListener('click', () => {
    alert("Not allowed");
})
const explore = document.querySelector('.explore');
explore.addEventListener('click', () => {
    alert("Not allowed");
})
const feed = document.querySelector('.feed');
feed.addEventListener('click', () => {
    alert("Not allowed");
})
const a = document.querySelector('#a');
a.addEventListener('click', () => {
    alert("Not allowed");
})
const b = document.querySelector('#b');
b.addEventListener('click', () => {
    alert("Not allowed");
})
const c = document.querySelector('#c');
c.addEventListener('click', () => {
    alert("Not allowed");
})
const d = document.querySelector('#d');
d.addEventListener('click', () => {
    alert("Not allowed");
})
const e = document.querySelector('#e');
e.addEventListener('click', () => {
    alert("Not allowed");
})

const data =document.querySelector('.top');
window.addEventListener('DOMContentLoaded', () => {
  const errorMessage = document.getElementById('error-message');
  const laptopScreenWidth = 1000;

  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < laptopScreenWidth) {
    errorMessage.style.display = 'block';
    data.style.display='none';
  } else {
    errorMessage.style.display = 'none';
  }
});
