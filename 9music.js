document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButton = document.getElementById("playButton");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const volumeSlider = document.getElementById("volumeSlider");
    const songTitle = document.getElementById("songTitle");
    const artistName = document.getElementById("artistName");
    const albumCover = document.getElementById("albumCover");
    const playlistElement = document.getElementById("playlist");

    const songs = [
        {
            title: 'Keep You Much Longer',
            artist: 'Akon',
            src: '9music3.mp3',
            cover: 'https://i1.sndcdn.com/artworks-CUadZR4ICveG-0-t500x500.jpg'
        },
        {
            title: 'Beautiful',
            artist: 'Akon',
            src: '9music2.mp3',
            cover: 'https://i1.sndcdn.com/artworks-CUadZR4ICveG-0-t500x500.jpg'
        },
        {
            title: 'Against The Grain',
            artist: 'Akon',
            src: '9music1.mp3',
            cover: 'https://i1.sndcdn.com/artworks-CUadZR4ICveG-0-t500x500.jpg'
        }
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    const loadSong = (index) => {
        const song = songs[index];
        audioPlayer.src = song.src;
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        albumCover.src = song.cover;
        updatePlaylist();
    };

    const playSong = () => {
        audioPlayer.play();
        isPlaying = true;
        playButton.textContent = 'Pause';
    };

    const pauseSong = () => {
        audioPlayer.pause();
        isPlaying = false;
        playButton.textContent = 'Play';
    };

    const prevSong = () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    };

    const nextSong = () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    };

    const updatePlaylist = () => {
        playlistElement.innerHTML = '';
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist}`;
            li.classList.toggle('active', index === currentSongIndex);
            li.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                playSong();
            });
            playlistElement.appendChild(li);
        });
    };

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    loadSong(currentSongIndex);
    updatePlaylist();
});
