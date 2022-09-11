import './style.css';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = "Hola mundo!";
    element.classList.add('hello');
  
    return element;
}
  
document.body.appendChild(component());