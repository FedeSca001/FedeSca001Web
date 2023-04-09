Document.onclick = cursorAnim;

let color = [rgb(43, 226, 180),rgb(0, 255, 0),rgb(218, 209, 78),rgba(81, 26, 153, 0.164)];
const cursorAnim = (evento)=>{
    let circle = document.createElement('div');
    circle.setAttribute('class','circle');
    document.body.appendChild(circle);
    circle.style.left = evento.clientX + 'px';
    circle.style.top = evento.clienteY + 'px';
}
