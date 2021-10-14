

let botoes = document.getElementsByClassName('imagem')
console.log(botoes)

let filmePrincipal = document.getElementById('filme-main')
let tituloFilme = document.getElementById('titulo-filme');
let descricao=document.getElementById('texto-princial')

botoes[0].addEventListener("click", function () {

    changeContains()

});



botoes[1].addEventListener("click", function () {

    window.alert('oi')

});
botoes[2].addEventListener("click", function () {

    window.alert('oi')

});
botoes[3].addEventListener("click", function () {

    window.alert('oi')

});
botoes[4].addEventListener("click", function () {

    window.alert('oi')

});
botoes[5].addEventListener("click", function () {
    changeContains()
   
});
botoes[6].addEventListener("click", function () {

    window.alert('oi')

});
botoes[7].addEventListener("click", function () {

    window.alert('oi')

});
botoes[8].addEventListener("click", function () {

    window.alert('oi')

});
botoes[9].addEventListener("click", function () {

    window.alert('oi')

});
botoes[10].addEventListener("click", function () {

    window.alert('oi')

});


function changeContains() {

    filmePrincipal.classList.toggle("filme-principal");

    
    
    if (filmePrincipal.classList.contains("filme-principal")) {
        tituloFilme.innerHTML = 'VIKINGS'
        filmePrincipal.classList.remove('filme-05')
        descricao.innerHTML='Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro,fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que asriquezas sonhadas por seu povo encontram-se além do mar Báltico.'
        
    } else {
        filmePrincipal.classList.add('filme-05')
        tituloFilme.innerHTML = 'CIDADE DE DEUS'
      
        
        descricao.innerHTML='Buscapé é um jovem morador da Cidade de Deus que cresce em meio à violência. Com medo de se tornar um bandido, enxerga na fotografia uma oportunidade de ter uma vida digna.'
        
    }

}