import initAnimaNumero from "./anima-numeros.js";

export default function initFetchAnimais(){
  async function fetchAnimais(url){
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJson.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.append(divAnimal);
      });
      
      initAnimaNumero();
    } catch(erro) { 
        console.log(erro);
    } 
  }
  
  
  function createAnimal({especie, total}){
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${especie}</h3><span data-numero>${total}</span>`;
    return div;
  }

  fetchAnimais('./animaisApi.json');
}


