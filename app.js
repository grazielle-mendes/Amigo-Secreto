const amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim();

    if (amigoNome && !amigos.includes(amigoNome)) {
        amigos.push(amigoNome);
        amigoInput.value = '';
        atualizarListaAmigos();
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        const li = document.createElement('li');
        li.textContent = `Amigo sorteado: ${amigoSorteado}`;
        resultado.appendChild(li);
    } else {
        alert('Adicione amigos para sortear!');
    }
}