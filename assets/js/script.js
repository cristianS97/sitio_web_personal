// Efecto de ingreso del sitio
if(document.querySelector('#ingreso')) {
    document.querySelector('#ingreso').addEventListener('click', e => {
        e.preventDefault();
    
        document.querySelector('.principal').classList.remove('dn');
        document.querySelector('.inicio').setAttribute('class', 'cerrar');
        document.querySelector('#ingreso').classList.add('dn');
    });
}
if(document.querySelector('.menu-btn')) {
    document.querySelector('.menu-btn').addEventListener('click', e => {
        document.querySelector('.navegacion').estAttribute('display', 'block');
    });
}