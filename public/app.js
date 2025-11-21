function openMovie() {
const id = document.getElementById('movieId').value.trim();
if (!id) return alert('Enter a movie ID');
const url = `https://www.vidking.net/embed/movie/${id}?color=ffa500`;
window.open(url, "_blank");
}


function openShow() {
const showId = document.getElementById('showId').value.trim();
const season = document.getElementById('season').value.trim();
const episode = document.getElementById('episode').value.trim();


if (!showId) return alert('Enter a show ID');
if (!season) return alert('Enter a season');
if (!episode) return alert('Enter an episode');


const url = `https://www.vidking.net/embed/tv/${showId}/${season}/${episode}?color=ffa500`;
window.open(url, "_blank");
}