document.addEventListener("DOMContentLoaded", function () {
  const mixedMessage = document.getElementById("mixed-message");
  const portfolioSite = document.getElementById("portfolio-site");

  function loadProject(project) {
    fetch(project)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("projectContent").innerHTML = data;
      })
      .catch((error) => {
        console.error("Erro ao carregar o projeto:", error);
        document.getElementById("projectContent").innerHTML =
          "Erro ao carregar o conteúdo do projeto.";
      });
  }

  mixedMessage.addEventListener("click", function () {
    loadProject("./projects/array-randomizer.html");
  });

  portfolioSite.addEventListener("click", function () {
    loadProject("./projects/personal-portfolio.html"); // Ajuste o caminho se necessário
  });
});
