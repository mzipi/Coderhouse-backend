function component() {
    const element = document.createElement('div');
  
    element.innerHTML = "Hola mundo!";
  
    return element;
}
  
document.body.appendChild(component());