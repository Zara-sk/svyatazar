const socket = io()
const messages = document.querySelector('.messages')
const form = document.querySelector('.form')
const name = document.querySelector('.input-name')
const text = document.querySelector('.input-text')
const inv = document.querySelector('.inv')


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("comments.json", (text) => {
    var data = JSON.parse(text)
    data['comments'].forEach(element => {
        const item = document.createElement('li')
        item.innerHTML = `<span>${element.name}</span>`.toUpperCase() + `: ${element.comment}`
        messages.insertBefore(item, messages.firstChild); 
    })
});

form.addEventListener('submit', (e) => {
    console.log('1')
    e.preventDefault()

    if (text.value && name.value) {
        socket.emit('comment', {
            message: text.value,
            name: name.value
        })
        text.value = ''
    }
})

socket.on('comment', (data) => {
    const item = document.createElement('li')
    item.innerHTML = `<span>${data.name}</span>`.toUpperCase() + `: ${data.message}`
    messages.insertBefore(item, messages.firstChild);
})