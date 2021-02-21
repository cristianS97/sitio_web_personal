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
        if(document.querySelector('.navegacion').style.display == 'block') {
            document.querySelector('.navegacion').style.display = 'none';
            document.querySelector('header').style.height = '50px';
            document.querySelector('#x1').style.transform = '';
            document.querySelector('#x2').style.transform = '';
            document.querySelector('#x3').style.display = 'block';
        } else {
            let pos = 50;
            let t =  setInterval(move, 10);

            function move() {
                if(pos >= 200) {
                    document.querySelector('.navegacion').style.display = 'block';
                    document.querySelector('#x1').style.transform = 'rotate(45deg) translateY(5px) translateX(5px)';
                    document.querySelector('#x2').style.transform = 'rotate(-45deg)';
                    document.querySelector('#x3').style.display = 'none';
                    clearInterval(t);
                } else {
                    pos += 1;
                    document.querySelector('header').style.height = `${pos}px`;
                }
            }
        }
    });
}