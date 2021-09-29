const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const result = document.getElementById('result')


function getResults(e){
    const searchInput = document.getElementById('searchInput').value
    fetch(`http://localhost:7000/search/${searchInput}`)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            for(let i = 0; i < resp.length; i++){
                const siteTitle = document.createElement('p')
                siteTitle.textContent = `${resp[i].title}`
                document.getElementById('result').append(siteTitle)
                siteTitle.style.color = 'black';

                const siteUrl = document.createElement('a')
                console.log(`${resp[i].url}`)
                siteUrl.setAttribute('href', `${resp[i].url}`)
                siteUrl.textContent = siteUrl
                document.getElementById('result').append(siteUrl)

                const siteDesc = document.createElement('p')
                siteDesc.textContent = `${resp[i].description}`
                document.getElementById('result').append(siteDesc)
                siteDesc.style.color = 'black';
            }
        })
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault() 
    getResults(e)
})

randomBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const randomInput = document.getElementById('searchInput').value
    fetch(`http://localhost:7000/random/${randomInput}`)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            for(let i = 0; i < resp.length; i++){
                document.getElementById('result').textContent = resp[i].title
                document.getElementById('result').style.color = "black"
            }
        })
})
