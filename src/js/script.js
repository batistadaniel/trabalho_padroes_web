// pega os id's do html
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const main = document.getElementById('main');

// evento de quando clicar no botao do menu
btnMenu.addEventListener("click", () => {
    menuMobile.classList.toggle('aberto'); // abre e fecha
});

// percorre todos os links um a um
menuMobile.querySelectorAll("a").forEach(link => {
    // evento de quando clicar em qualquer link tbm abre e fecha
    link.addEventListener("click", () => {
        menuMobile.classList.remove("aberto"); // abre e fecha
    });
});

// gambiarra marota para quando clicar fora, ou seja, na area onde tem o "main"
main.addEventListener("click", () => {
    menuMobile.classList.remove("aberto"); // abre e fecha
} )

/*----------------------------------------------------------------------------------------------- */

async function carregarPagina(pagina) { // funcao assincrona, significa que pode demorar
    const section = document.getElementById('conteudo'); // pega o elemento da section onde sera carregado o conteudo
    try { // tente execultar algo
        const resposta = await fetch(pagina); // espera a resposta da busca da pagina
        section.innerHTML = await resposta.text(); // insere o resposta na section do conteudo
    } catch (erro) {  // caso a tentativa der erro
        section.innerHTML = "Erro ao carregar a página.";
    }
}

// carrega a home inicialmente
carregarPagina('src/pages/home.html');

// ao clicar no menu, troca o conteúdo
document.querySelectorAll('nav ul li a').forEach(link => { // pega os elementos a serem clicados e percorre um por um
    link.addEventListener('click', e => { // adiciona o evento de clique
        e.preventDefault(); // evita recarregar a porra da pagina de maneira padrao
        const pagina = e.target.getAttribute('data-page'); // e.target significa o elemento clicado, tag "a"
        carregarPagina(pagina); // chama a danada da funcao 
    });
});

