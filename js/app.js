// VARIÁVEIS GLOBAIS
let btnLogin = document.querySelector(".btn-login");
let dashboard = document.querySelector(".dashboard");
let sedesSelection = document.querySelector(".sedes-selection");
let content = document.querySelector("#content");
let login = document.querySelector(".login");
let alunasAtivas = 0;
let alunasDesistentes = 0;
let alunasMetas = 0;

function displayChange(add, remove) {
  add.classList.remove("none");
  remove.classList.add("none");
}

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;

  if (username === "ju" && password === "gatos") { displayChange(sedesSelection, login); }
  else if (username === "rafa" && password === "123456789") { displayChange(sedesSelection, login); }
  else if (username === "vanessa" && password === "laboratoria") { displayChange(sedesSelection, login); }
  else { alert("Senha ou usuário inválido."); }
});

// SELEÇÃO DE SEDE  
var itenList = document.getElementsByClassName("itenList");
for (x in itenList) {
  itenList[x].onclick = function () {
    dashboard.classList.remove("none");
    sedesSelection.classList.add("none");
  };
}
// SANTIAGO
let santiago1 = document.querySelector("#santiago1").addEventListener("click", function () {
  alunasMatriculadasInfo("SCL", itenList[0].textContent);
});
let santiago2 = document.querySelector("#santiago2").addEventListener("click", function () {
  alunasMatriculadasInfo("SCL", itenList[1].textContent);
});
let santiago3 = document.querySelector("#santiago3").addEventListener("click", function () {
  alunasMatriculadasInfo("SCL", itenList[2].textContent);
});
// CIDADE DO MEXICO
let cdmx1 = document.querySelector("#cdmx1").addEventListener("click", function () {
  alunasMatriculadasInfo("CDMX", itenList[3].textContent);
});
let cdmx2 = document.querySelector("#cdmx2").addEventListener("click", function () {
  alunasMatriculadasInfo("CDMX", itenList[4].textContent);
});
// AREQUIPA
let aqp1 = document.querySelector("#aqp1").addEventListener("click", function () {
  alunasMatriculadasInfo("AQP", itenList[5].textContent);
});
let aqp2 = document.querySelector("#aqp2").addEventListener("click", function () {
  alunasMatriculadasInfo("AQP", itenList[6].textContent);
});
// LIMA
let lima1 = document.querySelector("#lima1").addEventListener("click", function () {
  alunasMatriculadasInfo("LIM", itenList[7].textContent);
});
let lima2 = document.querySelector("#lima2").addEventListener("click", function () {
  alunasMatriculadasInfo("LIM", itenList[8].textContent);
});
let lima3 = document.querySelector("#lima3").addEventListener("click", function () {
  alunasMatriculadasInfo("LIM", itenList[9].textContent);
});

// TOTAL ALUNAS MATRICULADAS
let sprints = 0;
function alunasMatriculadasInfo(sd, trm) {
  let std = data[sd][trm]["students"]
  for (i in std) {
    if (std[i]["active"] === true) { alunasAtivas += 1; }
    else if (std[i]["active"] === false) { alunasDesistentes += 1; }
    for (j in std[i]["sprints"]) {
      if (std[i]["sprints"]) {
        if (std[i]["sprints"][j]["score"]["tech"] > 1260 && std[i]["sprints"][j]["score"]["hse"] > 840) {
          alunasMetas += 1;
          sprints = std[i]["sprints"].length;
        }
      } else if (!std[i]["sprints"] || alunasMetas > 0) {
        sprints = 1;
      }
    }
  }
  alunasMetas = alunasMetas / sprints;

  let alunasMatriculadas = document.querySelector(".alunas-total");
  let div = document.createElement("div");
  div.classList.add("info-box");
  alunasMatriculadas.appendChild(div);
  let p = document.createElement("p");
  div.appendChild(p);
  p.textContent = alunasAtivas;
  let small = document.createElement("small");
  small.textContent = "alunas ativas";
  div.appendChild(small);
  // PERCENTUAL DESISTENTES
  let div1 = document.createElement("div");
  div1.classList.add("info-box");
  alunasMatriculadas.appendChild(div1);
  let p1 = document.createElement("p");
  div1.appendChild(p1);
  p1.textContent = (alunasDesistentes / data[sd][trm]["students"].length * 100).toFixed(1) + "%";
  let small1 = document.createElement("small");
  small1.textContent = "desistências";
  div1.appendChild(small1);
  // ALUNAS QUE EXCEDEM A META DE PONTOS
  let alunasMeta = document.querySelector(".alunas-meta");
  let divMeta = document.createElement("div");
  divMeta.classList.add("info-box");
  alunasMeta.appendChild(divMeta);
  let pMeta = document.createElement("p");
  pMeta.textContent = Math.round(alunasMetas);
  divMeta.appendChild(pMeta);
  let smallMeta = document.createElement("small");
  smallMeta.textContent = "excedem a meta";
  divMeta.appendChild(smallMeta);
  // PERCENTUAL EXCEDEM A META
  let divMeta1 = document.createElement("div");
  divMeta1.classList.add("info-box");
  alunasMeta.appendChild(divMeta1);
  let pMeta1 = document.createElement("p");
  pMeta1.textContent = (alunasMetas / std.length * 100).toFixed(1) + "%";
  divMeta1.appendChild(pMeta1);
  let smallMeta1 = document.createElement("small");
  smallMeta1.textContent = "% do total";
  divMeta1.appendChild(smallMeta1);
}
console.table(data);


// GOOGLE TRANSLATE
function googleTranslateElementInit2() { new google.translate.TranslateElement({ pageLanguage: 'pt-br', autoDisplay: false }, 'google_translate_element2'); }
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
