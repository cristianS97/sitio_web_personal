if(document.querySelector('#ingreso')) {
    document.querySelector('#ingreso').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('#ingreso').classList.add('dn');
    
        document.querySelector('.inicio').classList.add('cerrar');
        document.querySelector('.principal').classList.remove('dn');
    
        document.querySelector('.inicio').classList.remove('alto');
        document.querySelector('.inicio').classList.add('dn');
    });
}