const projects = [
  {
    name: "Projeto 1",
    description: "Descrição do projeto",
    link: "#"
  },
  {
    name: "Projeto 2",
    description: "Outro projeto interessante",
    link: "#"
  }
];

const container = document.getElementById("projectList");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <a class="btn" href="${project.link}" target="_blank">Ver Projeto</a>
  `;

  container.appendChild(card);
});
