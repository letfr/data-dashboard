// VARIÁVEIS GLOBAIS
let btnLogin = document.querySelector(".btn-login");
let dashboard = document.querySelector(".dashboard");
let sedesSelection = document.querySelector(".sedes-selection");
let content = document.querySelector("#content");
let login = document.querySelector(".login");
let contentPage = document.querySelector("#content");
let alunas = document.querySelector("#alunas")

function displayChange(add, remove) {
  add.classList.remove("none");
  remove.classList.add("none");
}

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let username = document.querySelector(".username");
  let password = document.querySelector(".password");

  if (username.value === "ju" && password.value === "gatos") { displayChange(sedesSelection, login); }
  else if (username.value === "rafa" && password.value === "123") { displayChange(sedesSelection, login); }
  else if (username.value === "vanessa" && password.value === "lab") { displayChange(sedesSelection, login); }
  else { username.style.border = "1px solid red"; password.style.border = "1px solid red"; }
});

// SELEÇÃO DE SEDE
let itenList = document.getElementsByClassName("itenList");
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
// GRÁFICOS
// GRÁFICO ALUNAS ATIVAS
function drawChart(activeStudents, dropoutStudents) {
  let chart = new google.visualization.PieChart(document.getElementById('piechart'));
  let data = google.visualization.arrayToDataTable([
    ['Status', 'Total'],
    ['Ativas', activeStudents],
    ['Desistencias', dropoutStudents]
  ])
  let options = {
    title: 'Total de alunas: ' + (activeStudents + dropoutStudents).toString(),
    backgroundColor: "#f2f2f2",
    chartArea: { width: '100%', height: '90%' },
    is3D: true,
    slices: {
      0: { color: '#7570b3' },
      1: { color: '#62BAA4' }
    }
  };
  chart.draw(data, options);
}

// GRÁFICO ALUNAS QUE EXCEDEM A META
function drawChartTargetStudents(targetStudents, nottargetStudents, sprints, std) {
  var chart = new google.visualization.PieChart(document.getElementById('targetStudents-chart'));
  var data = google.visualization.arrayToDataTable([
    ['Status', 'Total'],
    ['Excedem a meta (alunas ativas)', Math.round(targetStudents)],
    ['Não excedem (alunas ativas)', Math.round(nottargetStudents / sprints)]
  ]);
  var options = {
    title: 'Total de alunas: ' + (Math.round(std)).toString(),
    backgroundColor: "#f2f2f2",
    chartArea: { width: '100%', height: '90%' },
    pieHole: 0.5,
    slices: {
      0: { color: '#0A8EC0' },
      1: { color: '#FDAD84' }
    }
  };
  chart.draw(data, options);
}

// GRÁFICO NPS
function drawStacked(nps, promoters, passive, detractors) {
  let data = google.visualization.arrayToDataTable([
    ['Name', '%', { role: 'style' }],
    ['NPS', nps, "#F47D91"],
    ['Promoters', promoters, "#62BAA4"],
    ['Passive', passive, "#0A8EC0"],
    ['Detractors', detractors, "#FFCD5A"]
  ]);

  let options = {
    chartArea: { width: '60%', height: '90%' },
    isStacked: true,
    backgroundColor: "#f2f2f2",
    legend: {
      position: "none"
    }
  };
  let chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
// GRÁFICO TECH SCORE
function drawChartTech(scoreTech, scoreTechNot, sprints) {
  let chart = new google.visualization.PieChart(document.getElementById('tech-chart'));
  let data = google.visualization.arrayToDataTable([
    ['Status', 'Total'],
    ['Atingem (alunas ativas)', Math.round(scoreTech / sprints)],
    ['Não atingem (alunas ativas)', Math.round(scoreTechNot / sprints)]
  ])
  let options = {
    title: 'Total de alunas: ',
    backgroundColor: "#f2f2f2",
    chartArea: { width: '100%', height: '90%' },
    is3D: true,
    slices: {
      0: { color: '#0A8EC0' },
      1: { color: '#FFCD5A' }
    }
  };
  chart.draw(data, options);
}
// GRÁFICO HSE SCORE
function drawChartHSE(scoreHSE, scoreHSENot, sprints) {
  let chart = new google.visualization.PieChart(document.getElementById('hse-chart'));
  let data = google.visualization.arrayToDataTable([
    ['Status', 'Total'],
    ['Atingem (alunas ativas)', Math.round(scoreHSE / sprints)],
    ['Não atingem (alunas ativas)', Math.round(scoreHSENot / sprints)]
  ])
  let options = {
    title: 'Total de alunas: ',
    backgroundColor: "#f2f2f2",
    chartArea: { width: '100%', height: '90%' },
    is3D: true,
    slices: {
      0: { color: '#F47D91' },
      1: { color: '#62BAA4' }
    }
  };
  chart.draw(data, options);
}
// GRÁFICO DE SATISFAÇÃO DAS ALUNAS
function drawSatisfaction(reaches, doesntReach, overcomes, sprints) {
  let data = google.visualization.arrayToDataTable([
    ['Satisfação Laboratória', 'Cumpre', { role: 'style' }, 'Não cumpre', { role: 'style' }, 'Supera', { role: 'style' }],
    ['Satisfação', reaches / sprints, "#FFCD5A", doesntReach / sprints, "#0A8EC0", overcomes / sprints, "#F47D91"]
  ]);
  let options = {
    title: 'A Laboratoria cumpre suas expectativas?',
    chartArea: { width: '90%' },
    isStacked: "percent",
    backgroundColor: "#f2f2f2",
    legend: { position: 'none' },
  };
  let chart = new google.visualization.BarChart(document.getElementById('chart-satisfaction'));
  chart.draw(data, options);
}
// GRÁFICO MÉDIA MENTORES
function mentorsChart(ratingTeacher, sprints) {
  let data = google.visualization.arrayToDataTable([
    ['Média', 'Pontuação máxima', 'Pontuação mentores'],
    ['Pontuação', (5.0).toFixed(1), ratingTeacher / sprints],
  ]);
  let options = {
    backgroundColor: "#f2f2f2",
    bars: 'vertical',
    vAxis: { format: 'decimal' },
    height: 260,
    colors: ['#F47D91', '#7570b3'],
  };
  let chart = new google.charts.Bar(document.getElementById('mentor-chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
// GRÁFICO MÉDIA JEDI
function jediChart(ratingJedi, sprints) {
  let data = google.visualization.arrayToDataTable([
    ['Média', 'Pontuação máxima', 'Pontuação mentores'],
    ['Pontuação', (5.0).toFixed(1), (ratingJedi / sprints)],
  ]);
  let options = {
    backgroundColor: "#f2f2f2",
    bars: 'vertical',
    vAxis: { format: 'decimal' },
    height: 260,
    colors: ['#0A8EC0', '#FDAD84'],
  };
  let chart = new google.charts.Bar(document.getElementById('jedi-chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
// ENVIANDO INFORMAÇÕES PARA DASHBOARD
function dashboardInfo(sd, trm) {
  let studentStatus = {
    active: 0,
    dropout: 0,
    targetNot: 0,
    target: 0,
  }
  let score = {
    tech: 0,
    techNot: 0,
    hse: 0,
    hseNot: 0
  }
  let rating = {
    promoters: 0,
    passive: 0,
    detractors: 0,
    totalNps: 0,
    reaches: 0,
    doesntReach: 0,
    overcomes: 0,
    teacher: 0,
    jedi: 0
  }
  let sprints = 0;
  let sprint = 0;
  let std = data[sd][trm]["students"];
  let ratings = data[sd][trm]["ratings"];
  // DADOS DAS ESTUDANTES
  for (i in std) {
    if (std[i]["active"] === true) { studentStatus.active += 1; }
    else if (std[i]["active"] === false) { studentStatus.dropout += 1; }
    for (j in std[i]["sprints"]) {
      if (std[i]["sprints"][j]["score"]["tech"] >= 1260) {
        score.tech += 1;
      } else {
        score.techNot += 1;
      }
      if (std[i]["sprints"][j]["score"]["hse"] >= 840) {
        score.hse += 1;
      } else {
        score.hseNot += 1;
      }
      if (std[i]["sprints"][j]["score"]["tech"] >= 1260 && std[i]["sprints"][j]["score"]["hse"] >= 840) {
        studentStatus.target += 1;
      } else {
        studentStatus.targetNot += 1;
      }
      sprint = std[i]["sprints"];
      sprints = std[i]["sprints"].length;
    }
  }
  studentStatus.target = Math.round(studentStatus.target / sprints);
  studentStatus.targetNot = Math.round(studentStatus.targetNot / sprints);
  if (isNaN(studentStatus.target)) {
    studentStatus.target = 0;
  }
  // DADOS DE AVALIAÇÕES
  for (i in ratings) {
    rating.totalNps = ratings[i]["nps"]["promoters"] - ratings[i]["nps"]["detractors"];
    rating.promoters = ratings[i]["nps"]["promoters"];
    rating.passive = ratings[i]["nps"]["passive"];
    rating.detractors = ratings[i]["nps"]["detractors"];
    rating.reaches += data[sd][trm]["ratings"][i]["student"]["cumple"];
    rating.doesntReach += data[sd][trm]["ratings"][i]["student"]["no-cumple"];
    rating.overcomes += data[sd][trm]["ratings"][i]["student"]["supera"];
    rating.teacher += data[sd][trm]["ratings"][i]["teacher"];
    rating.jedi += data[sd][trm]["ratings"][i]["jedi"];
  }
  drawChart(studentStatus.active, studentStatus.dropout);
  drawChartTargetStudents(studentStatus.target, studentStatus.targetNot, sprints, std.length);
  drawStacked(rating.totalNps, rating.promoters, rating.passive, rating.detractors);
  drawChartTech(score.tech, score.techNot, sprints);
  drawChartHSE(score.hse, score.hseNot, sprints);
  drawSatisfaction(rating.reaches, rating.doesntReach, rating.overcomes, sprints);
  mentorsChart(rating.teacher, sprints);
  jediChart(rating.jedi, sprints);
  studentsStatus(sd, trm, std, ratings, studentStatus.target, studentStatus.active, studentStatus.dropout);
  npsPercentual(rating.totalNps, rating.promoters, rating.passive, rating.detractors);
  studentsSatisfaction(rating.overcomes, rating.reaches, sprints);
  teacherRating(rating.teacher, rating.jedi, sprints);
  techScore(score.tech, std.length, sprint, sprints);
  hseScore(score.hse, std.length, sprint, sprints);
  alunasPage(std);
}

function alunasPage(std) {
  for (i in std) {
    let box = document.createElement("div");
    box.classList.add("box");
    alunas.appendChild(box);
    let name = document.createElement("h1");
    name.textContent = std[i]["name"];
    box.appendChild(name);
    let img = document.createElement("img");
    img.src = std[i]["photo"];
    img.style.width = "120px";
    img.style.height = "120px";
    img.style.margin = "0 auto";
    box.appendChild(img);
    let active = document.createElement("p");
    if (std[i]["active"] === "true") {
      active.textContent = "ATIVA";
    } else {
      active.textContent = "INATIVA";
    }
    box.appendChild(active);
    for (j in std[i]["sprints"]) {
      let sprint = document.createElement("p");
      sprint.textContent = "Sprint " + std[i]["sprints"][j]["number"];
      sprint.classList.add("info-box");
      sprint.style.margin = "10px auto";
      let tech = document.createElement("p");
      tech.textContent = "TECH: " + std[i]["sprints"][j]["score"]["tech"];
      let hse = document.createElement("p");
      hse.textContent = "HSE: " + std[i]["sprints"][j]["score"]["hse"];
      box.appendChild(sprint);
      box.appendChild(tech);
      box.appendChild(hse);
    }
  }
}
function studentsStatus(sd, trm, std, ratings, targetStudents, activeStudents, dropoutStudents) {
  document.getElementsByClassName("info")[0].textContent = activeStudents;
  document.getElementsByClassName("info")[1].textContent = (dropoutStudents / data[sd][trm]["students"].length * 100).toFixed(1) + "%";
  document.getElementsByClassName("info")[2].textContent = targetStudents;
  document.getElementsByClassName("info")[3].textContent = (targetStudents / std.length * 100).toFixed(1) + "%";
}
function npsPercentual(totalNps, promoters, passive, detractors) {
  document.getElementsByClassName("info")[4].textContent = totalNps + "%";
  document.getElementsByClassName("info-label")[0].textContent = promoters + "% Promoters";
  document.getElementsByClassName("info-label")[1].textContent = passive + "% Passive";
  document.getElementsByClassName("info-label")[2].textContent = detractors + "% Detractors";
}
function techScore(scoreTech, totalStudents, sprint, sprints) {
  document.getElementsByClassName("info")[6].textContent = Math.round(scoreTech / sprints);
  document.getElementsByClassName("info")[7].textContent = ((scoreTech / sprints) / totalStudents * 100).toFixed(1) + "%";
}
function hseScore(scoreHSE, totalStudents, sprint, sprints) {
  document.getElementsByClassName("info")[8].textContent = Math.round(scoreHSE / sprints);
  document.getElementsByClassName("info")[9].textContent = ((scoreHSE / sprints) / totalStudents * 100).toFixed(1) + "%";
}
function studentsSatisfaction(overcomes, reaches, sprints) {
  document.getElementsByClassName("info")[10].textContent = ((overcomes + reaches) / sprints).toFixed(1) + "%";
}
function teacherRating(ratingTeacher, ratingJedi, sprints) {
  document.getElementsByClassName("info")[11].textContent = (ratingTeacher / sprints).toFixed(1);
  document.getElementsByClassName("info")[12].textContent = (ratingJedi / sprints).toFixed(1);
}
console.table(data);
//GRAFICOS
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked);
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartTech);
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartHSE);
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawSatisfaction);
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(mentorsChart);
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(jediChart);
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartTargetStudents);

// GOOGLE TRANSLATE
function googleTranslateElementInit2() { new google.translate.TranslateElement({ pageLanguage: 'pt-br', autoDisplay: false }, 'google_translate_element2'); }
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
