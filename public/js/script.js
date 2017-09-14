const form = {
    name: 'Alla',
    message: 'hello'
};
const formData = new FormData();
const xml = new XMLHttpRequest();
const xmlBtn = document.querySelector('#xml');
const fetchBtn = document.querySelector('#fetch');
const formBtn = document.querySelector('#form-data');
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

xmlBtn.addEventListener('click', xmlSend);
fetchBtn.addEventListener('click', fetchSend);
formBtn.addEventListener('click', dataFormSend);

formData.append('name', 'FormData');
formData.append('message', 'FormData have to be send');

function xmlSend(){
    xml.open('POST', '/xmlhttp/');
    xml.setRequestHeader('Content-Type', 'application/json');
    xml.send(JSON.stringify(form));
}

function fetchSend(){
    let fetchData = {
        method: 'POST',
        headers: myHeaders,
        body: form
    };
    fetch('/fetch/', fetchData)
        .then((response) =>{
            return response.json();
        })
        .then(res=>console.log(res));
}
function dataFormSend(){
    let fetchData = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(formData)
    };
    fetch('/formdata/', fetchData)
        .then((response) =>{
            return response.json();
        })
        .then(res=>console.log(res));
}