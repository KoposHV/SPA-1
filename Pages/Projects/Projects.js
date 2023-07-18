import "./Projects.css";
import { cleanPage } from "../../Utils/cleanPage";
import { projects } from "../../Data/projects";
import { ProjectCard } from "../../Components/ProjectCard/ProjectCard";
import { Divider } from "../../Components/Divider/Divider";
export const Projects = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="projects">
<h2>Featured Projects</h2>
${Divider()}
<div class="projects-container"></div>
</section>`;
const container = document.querySelector(".projects-container");
for (const project of projects) {
const figure = document.createElement("figure");
figure.innerHTML = ProjectCard(project);
container.appendChild(figure);
}
};