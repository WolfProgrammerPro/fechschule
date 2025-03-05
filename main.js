document.getElementById("download").addEventListener("click", Download)

function Download(){
    let element = document.createElement('a')
    element.setAttribute('href', "Game.7z")
    element.setAttribute("download", "Game.7z")
    element.style.display = 'none';
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}