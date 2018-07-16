// VARIÁVEIS GLOBAIS
let btnLogin = document.querySelector(".btn-login");
let dashboard = document.querySelector(".dashboard");
let sedesSelection = document.querySelector(".sedes-selection");
let content = document.querySelector("#content");
let login = document.querySelector(".login");
let activeStudents = 0;
let dropoutStudents = 0;
let targetStudents = 0;
let totalNps = 0;

function displayChange(add, remove) {
  add.classList.remove("none");
  remove.classList.add("none");
}

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let username = document.querySelector(".username");
  let password = document.querySelector(".password");

  if (username.value === "ju" && password.value === "gatos") { displayChange(sedesSelection, login); }
  else if (username.value === "rafa" && password.value === "123456789") { displayChange(sedesSelection, login); }
  else if (username.value === "vanessa" && password.value === "laboratoria") { displayChange(sedesSelection, login); }
  else { username.style.border = "1px solid red"; password.style.border = "1px solid red"; }
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
let sprint = 0;
function dashboardInfo(sd, trm) {
  let scoreTech = 0;
  let scoreHSE = 0;
  let promoters = 0;
  let passive = 0;
  let detractors = 0;
  let reaches = 0;
  let overcomes = 0;
  let ratingTeacher = 0;
  let ratingJedi = 0;
  let std = data[sd][trm]["students"];
  let ratings = data[sd][trm]["ratings"];
  // DADOS DAS ESTUDANTES
  for (i in std) {
    if (std[i]["active"] === true) { activeStudents += 1; }
    else if (std[i]["active"] === false) { dropoutStudents += 1; }
    for (j in std[i]["sprints"]) {
      if (std[i]["sprints"][j]["score"]["tech"] >= 1260) {
        scoreTech += 1;
      }
      if (std[i]["sprints"][j]["score"]["hse"] >= 840) {
        scoreHSE += 1;
      }
      if (std[i]["sprints"][j]["score"]["tech"] >= 1260 && std[i]["sprints"][j]["score"]["hse"] >= 840) {
        targetStudents += 1;
      }
      sprint = std[i]["sprints"];
      sprints = std[i]["sprints"].length;
    }

  }
  targetStudents = targetStudents / sprints;
  if (isNaN(targetStudents)) {
    targetStudents = 0;
  }
  // DADOS DE AVALIAÇÕES
  for (i in ratings) {
    totalNps = ratings[i]["nps"]["promoters"] - ratings[i]["nps"]["detractors"];
    promoters = ratings[i]["nps"]["promoters"];
    passive = ratings[i]["nps"]["passive"];
    detractors = ratings[i]["nps"]["detractors"];
    reaches += data[sd][trm]["ratings"][i]["student"]["cumple"];
    overcomes += data[sd][trm]["ratings"][i]["student"]["supera"];
    ratingTeacher += data[sd][trm]["ratings"][i]["teacher"];
    ratingJedi += data[sd][trm]["ratings"][i]["jedi"];
  }
  studentsStatus(sd, trm, std, ratings, overcomes, reaches);
  npsPercentual(totalNps, promoters, passive, detractors);
  studentsSatisfaction(overcomes, reaches, sprints);
  teacherRating(ratingTeacher, ratingJedi, sprints);
  techScore(scoreTech, std.length, sprint);
  hseScore(scoreHSE, std.length, sprint);
}

function studentsStatus(sd, trm, std, ratings) {
  document.getElementsByClassName("info")[0].textContent = activeStudents;
  document.getElementsByClassName("info")[1].textContent = (dropoutStudents / data[sd][trm]["students"].length * 100).toFixed(1) + "%";
  document.getElementsByClassName("info")[2].textContent = Math.round(targetStudents);
  document.getElementsByClassName("info")[3].textContent = (targetStudents / std.length * 100).toFixed(1) + "%";
}
function npsPercentual(totalNps, promoters, passive, detractors) {
  document.getElementsByClassName("info")[4].textContent = totalNps + "%";
  document.getElementsByClassName("info-label")[0].textContent = promoters + "% Promoters";
  document.getElementsByClassName("info-label")[1].textContent = passive + "% Passive";
  document.getElementsByClassName("info-label")[2].textContent = detractors + "% Detractors";
}
function techScore(scoreTech, totalStudents, sprint) {
  let select = document.querySelector("#drop-menu");
  for (i in sprint) {
    let option = document.createElement("option");
    option.textContent = "sprint " + (parseInt(i) + 1);
    option.value = "sprint " + (parseInt(i) + 1);
    select.appendChild(option);
  }
  document.getElementsByClassName("info")[6].textContent = Math.round(scoreTech / sprints);
  document.getElementsByClassName("info")[7].textContent = ((scoreTech / sprints) / totalStudents * 100).toFixed(1) + "%";
}
function hseScore(scoreHSE, totalStudents, sprint) {
  let select = document.querySelector("#drop-menu1");
  for (i in sprint) {
    let option = document.createElement("option");
    option.textContent = "sprint " + (parseInt(i) + 1);
    select.appendChild(option);
    if (select.value === option.textContent) {
      console.log("sasdasd")
    }
  }
  if (select.value === "sprint") {
    document.getElementsByClassName("info")[8].textContent = Math.round(scoreHSE / sprints);
    document.getElementsByClassName("info")[9].textContent = ((scoreHSE / sprints) / totalStudents * 100).toFixed(1) + "%";
  }
}
function studentsSatisfaction(overcomes, reaches, sprints) {
  document.getElementsByClassName("info")[10].textContent = ((overcomes + reaches) / sprints).toFixed(1) + "%";
}
function teacherRating(ratingTeacher, ratingJedi, sprints) {
  document.getElementsByClassName("info")[11].textContent = (ratingTeacher / sprints).toFixed(1);
  document.getElementsByClassName("info")[12].textContent = (ratingJedi / sprints).toFixed(1);
}

console.table(data);


// GOOGLE TRANSLATE
function googleTranslateElementInit2() { new google.translate.TranslateElement({ pageLanguage: 'pt-br', autoDisplay: false }, 'google_translate_element2'); }
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
