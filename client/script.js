const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const searchInput = document.getElementById('searchInput')

searchBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    let word = searchInput.value
    fetch(`http://localhost:7000/search/${word}`)
        .then(resp => resp.text())
        .then(console.log(resp))
})