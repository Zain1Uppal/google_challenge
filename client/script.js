const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const result = document.getElementById('result')
console.log(result)

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const searchInput = document.getElementById('searchInput').value
    fetch(`http://localhost:7000/search/${searchInput}`)
        .then(resp => resp.text())
        // .then(title => document.getElementById('siteTitle').innerHTML = title)
        // .then(window.location.href = './results.html')
        // .then(resp => {
        //     for (let i = 0; i < resp.length; i++) {
        //     result.append(`<a href="${resp[i].url}">${resp[i].url}</a> + <p>"${resp[i].title}"</p>`)
        //     }})
        .then(titles => document.getElementById('result').innerHTML = titles)

})
{/* <a id = "siteUrl" href=""></a>
<p id = 'siteTitle'></p>
<p id = 'siteDetails'></p> */}