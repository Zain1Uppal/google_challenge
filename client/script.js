const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const result = document.getElementById('result')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const searchInput = document.getElementById('searchInput').value
    fetch(`http://localhost:7000/search/${searchInput}`)
        .then(resp => resp.json())
        .then(resp => {
            for(let i = 0; i < resp.length; i++){
                document.getElementById('result').textContent = resp[i].title
            }
        })
})

randomBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const randomInput = document.getElementById('searchInput').value
    fetch(`http://localhost:7000/random/${randomInput}`)
        .then(resp => resp.json())
        .then(resp => {
            for(let i = 0; i < resp.length; i++){
                document.getElementById('result').textContent = resp[i].id
                // document.getElementById('result').textContent = resp[i].title
            }
        })
})
