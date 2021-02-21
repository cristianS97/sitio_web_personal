// Efecto de ingreso del sitio
if(document.querySelector('#ingreso')) {
    document.querySelector('#ingreso').addEventListener('click', e => {
        e.preventDefault();
    
        document.querySelector('.principal').classList.remove('dn');
        document.querySelector('.inicio').setAttribute('class', 'cerrar');
        document.querySelector('#ingreso').classList.add('dn');
    });
}
// Efectos de apertura y cierre menu en movil
if(document.querySelector('.menu-btn')) {
    document.querySelector('.menu-btn').addEventListener('click', e => {
        if(document.querySelector('.navegacion').style.display == 'block') {
            document.querySelector('.navegacion').style.display = 'none';

            let pos = 200;
            let t =  setInterval(move, 1);

            function move() {
                if(pos <= 50) {
                    document.querySelector('#x1').style.transform = 'rotate(0deg) translateY(0px) translateX(0px)';
                    document.querySelector('#x2').style.transform = 'rotate(0deg)';
                    document.querySelector('#x3').style.display = 'block';
                    clearInterval(t);
                } else {
                    pos -= 1;
                    document.querySelector('header').style.height = `${pos}px`;
                }
            }
        } else {
            let pos = 50;
            let t =  setInterval(move, 1);

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