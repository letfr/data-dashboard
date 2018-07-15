// VARIÁVEIS GLOBAIS
let btnLogin = document.querySelector(".btn-login");
let dashboard = document.querySelector(".dashboard");
let sedesSelection = document.querySelector(".sedes-selection");
let content = document.querySelector("#content");
let login = document.querySelector(".login");
let activeStudents = 0;
let dropoutStudents = 0;
let targetStudentss = 0;
let totalNps = 0;

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
  dashboardInfo("SCL", itenList[0].textContent);
});
let santiago2 = document.querySelector("#santiago2").addEventListener("click", function () {
  dashboardInfo("SCL", itenList[1].textContent);
});
let santiago3 = document.querySelector("#santiago3").addEventListener("click", function () {
  dashboardInfo("SCL", itenList[2].textContent);
});
// CIDADE DO MEXICO
let cdmx1 = document.querySelector("#cdmx1").addEventListener("click", function () {
  dashboardInfo("CDMX", itenList[3].textContent);
});
let cdmx2 = document.querySelector("#cdmx2").addEventListener("click", function () {
  dashboardInfo("CDMX", itenList[4].textContent);
});
// AREQUIPA
let aqp1 = document.querySelector("#aqp1").addEventListener("click", function () {
  dashboardInfo("AQP", itenList[5].textContent);
});
let aqp2 = document.querySelector("#aqp2").addEventListener("click", function () {
  dashboardInfo("AQP", itenList[6].textContent);
});
// LIMA
let lima1 = document.querySelector("#lima1").addEventListener("click", function () {
  dashboardInfo("LIM", itenList[7].textContent);
});
let lima2 = document.querySelector("#lima2").addEventListener("click", function () {
  dashboardInfo("LIM", itenList[8].textContent);
});
let lima3 = document.querySelector("#lima3").addEventListener("click", function () {
  dashboardInfo("LIM", itenList[9].textContent);
});


// ENVIANDO INFORMAÇÕES PARA DASHBOARD
let sprints = 0;
function dashboardInfo(sd, trm) {
  let std = data[sd][trm]["students"];
  for (i in std) {
    if (std[i]["active"] === true) { activeStudents += 1; }
    else if (std[i]["active"] === false) { dropoutStudents += 1; }
    for (j in std[i]["sprints"]) {
      if (std[i]["sprints"]) {
        if (std[i]["sprints"][j]["score"]["tech"] > 1260 && std[i]["sprints"][j]["score"]["hse"] > 840) {
          targetStudentss += 1;
          sprints = std[i]["sprints"].length;
        }
      } else if (!std[i]["sprints"] || targetStudentss > 0) {
        sprints = 1;
      }
    }
  }

  let ratings = data[sd][trm]["ratings"];
  for (i in ratings) {
    totalNps = ratings[i]["nps"]["promoters"] - ratings[i]["nps"]["detractors"];
  }
  let promoters = ratings[i]["nps"]["promoters"];
  let passive = ratings[i]["nps"]["passive"];
  let detractors = ratings[i]["nps"]["detractors"];

  targetStudentss = targetStudentss / sprints;

  createElements(sd, trm, std, ratings, totalNps, promoters, passive, detractors);
}

function createElements(sd, trm, std, ratings, totalNps, promoters, passive, detractors) {
  document.getElementsByClassName("info")[0].textContent = activeStudents;
  // PERCENTUAL DESISTENTES
  document.getElementsByClassName("info")[1].textContent = (dropoutStudents / data[sd][trm]["students"].length * 100).toFixed(1) + "%";
  // ALUNAS QUE EXCEDEM A META DE PONTOS
  document.getElementsByClassName("info")[2].textContent = Math.round(targetStudentss);
  // PERCENTUAL EXCEDEM A META
  document.getElementsByClassName("info")[3].textContent = (targetStudentss / std.length * 100).toFixed(1) + "%";
  // NPS PERCENTUAL
  document.getElementsByClassName("info")[4].textContent = totalNps + "%";
  document.getElementsByClassName("info-label")[0].textContent = promoters + "% Promoters";
  document.getElementsByClassName("info-label")[1].textContent = passive + "% Passive";
  document.getElementsByClassName("info-label")[2].textContent = detractors + "% Detractors";
}

console.table(data);


// GOOGLE TRANSLATE
function googleTranslateElementInit2() { new google.translate.TranslateElement({ pageLanguage: 'pt-br', autoDisplay: false }, 'google_translate_element2'); }
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
