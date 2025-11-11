async function carregarPagina(pagina) { // funcao assincrona, significa que pode demorar
    const section = document.getElementById('conteudo'); // pega o elemento da section onde sera carregado o conteudo
    try {
        const resposta = await fetch(pagina); // espera a resposta da busca da pagina
        section.innerHTML = await resposta.text(); // insere o resposta na section do conteudo
    } catch (erro) {
        section.innerHTML = "Erro ao carregar a página.";
    }
}

// carrega a home inicialmente
carregarPagina('src/pages/home.html');

// Ao clicar no menu, troca o conteúdo
document.querySelectorAll('nav ul li a').forEach(link => { // pega os elementos a serem clicados e percorre
    link.addEventListener('click', e => { // adiciona o eventode clique
        e.preventDefault(); // evita recarregar a porra da pagina
        const pagina = e.target.getAttribute('data-page'); // e.target significa o elemento clicado "a"
        carregarPagina(pagina);
    });
});
