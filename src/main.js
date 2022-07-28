import '../public/assets/css/style.css';

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(el.parentNode.getAttribute('href')!=='index.html' && (tag === 'img' || tag === 'h2' || tag === 'a')) {
        e.preventDefault();
        if(tag === 'img') carregaPagina(el.parentNode);
    }
});
    
async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404');

        const html = await response.text();
        carregaResultado(html);

    } catch (e) {
        console.error(e);
    }
}

function carregaResultado(response) {
    const ressultado = document.querySelector('.content');
    ressultado.innerHTML = response;
}