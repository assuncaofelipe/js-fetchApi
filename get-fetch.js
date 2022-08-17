const url = "http://127.0.0.1:8000/api/pacotes/";

const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#post-container');

async function getAlunos() {

    const options = {
        headers: {
            origin: "http://localhost:8000",
            referer: "http://localhost:8000",
        },
        mode: 'no-cors'
    };

    const response = await fetch(url);
    const data = await response.json();
    loadingElement.classList.add('hide');

    data.map((post) => {
        const div = document.createElement('div');
        const id = document.createElement('h2');
        const nome = document.createElement('a');
        const email = document.createElement('a');

        id.innerHTML = "id: " + post.id;
        nome.innerHTML = "nome: " + post.nome + "<br>";
        email.innerHTML = "email: " + post.email;

        div.appendChild(id);
        div.appendChild(nome);
        div.appendChild(email);

        postsContainer.appendChild(div);

    });
}

getAlunos();