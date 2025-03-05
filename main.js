document.getElementById("download").addEventListener("click", Download)

function Download(){
    let element = document.createElement('a')
    element.setAttribute('href', "https://disk.yandex.ru/d/byQc6KazEdwO5w")
    element.style.display = 'none';
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}
