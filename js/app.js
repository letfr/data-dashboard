// VARIÁVEIS GLOBAIS
let btnLogin = document.querySelector(".btn-login");
let dashboard = document.querySelector(".dashboard");
let login = document.querySelector(".login");

function logIn(event) {
  event.preventDefault();
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;

  if (username == "juamoasei" && password == "gatos") { loginAux(); }
  else if (username == "rafacerri" && password == "123456789") { loginAux(); }
  else if (username == "vanessapinheiro" && password == "laboratoria") { loginAux(); }
  else { alert("Senha ou Usuário inválido."); }
}
function loginAux(){
  dashboard.classList.remove("none"); 
  login.classList.add("none");
}

btnLogin.addEventListener("click",logIn);

console.log(data);
