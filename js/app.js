// VARIÁVEIS GLOBAIS
let btnLogin = document.querySelector(".btn-login");
let dashboard = document.querySelector(".dashboard");
let sedesSelection = document.querySelector(".sedes-selection");
let content = document.querySelector("#content");
let login = document.querySelector(".login");

function displayChange(add,remove) {
  add.classList.remove("none");
  remove.classList.add("none");
}

btnLogin.addEventListener("click", function(event) {
  event.preventDefault();
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;

  if (username === "ju" && password === "gatos") { displayChange(sedesSelection,login); }
  else if (username === "rafa" && password === "123456789") { displayChange(sedesSelection,login); }
  else if (username === "vanessa" && password === "laboratoria") { displayChange(sedesSelection,login); }
  else { alert("Senha ou usuário inválido."); }
});

// SELEÇÃO DE SEDE
// SAO PAULO
let btnSp = document.querySelector(".sp-select").addEventListener("click", function(){
  alert("Opss! Ainda não há dados sobre essa sede! :(");
});
// SANTIAGO
let btnSantiago = document.querySelector(".santiago-select").addEventListener("click", function(){
  displayChange(dashboard,sedesSelection);
});
// CIDADE DO MEXICO
let btnCDMX = document.querySelector(".cdmx-select").addEventListener("click", function(){
  displayChange(dashboard,sedesSelection);
});
// AREQUIPA
let btnARQ = document.querySelector(".arq-select").addEventListener("click", function(){
  displayChange(dashboard,sedesSelection);
});
// LIMA
let btnLima = document.querySelector(".lima-select").addEventListener("click", function(){
  displayChange(dashboard,sedesSelection);
});



// GOOGLE TRANSLATE
function googleTranslateElementInit2() { new google.translate.TranslateElement({ pageLanguage: 'pt-br', autoDisplay: false }, 'google_translate_element2'); }

eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
