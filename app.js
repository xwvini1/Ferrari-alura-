function buscar() {
    let section= document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log("campo-pesquisa");
    
    campoPesquisa= campoPesquisa.toLowerCase()
 
    let resultados = "";
    let titulo= "";
    let descricao= "";
  
    for (let dado of dados){
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
      
        if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>
              <a href=${dado.video} target="_blank">${dado.titulo}</a>
            </h2>
            <p>
              <img src=${dado.Imagem} alt="">
            </p>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
          </div>
        `;  
       }  
    }

if (!resultados) {
resultados = "Nada Foi Encontrado"
}

    section.innerHTML = resultados
}