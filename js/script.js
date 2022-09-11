
let form = document.getElementById("formulario");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  //opcion 1
  let isError = [false, false, false, false];

  for (let i = 0; i < isError.length; i++) {
    // console.log(document.querySelector(`input[name='${e.target[i].name}']`))
    // console.log(document.querySelector(`textarea[name='${e.target[i].name}']`))
    if (e.target[i].value === '') {
      isError[i] = true;
      e.target[i].className += ' resaltado'
    }
    
  }
  if (!isError.includes(true)){
    form.submit();
    
  }



} )
