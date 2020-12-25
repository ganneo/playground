import ProjectManager from "../state/ProjectManager.js";
import { AutoBind } from "../util/Decorators.js";
import Project from "./Project.js";

export default class ProjectInput {
  private template: HTMLTemplateElement;
  private hostEle: HTMLDivElement;
  private element: HTMLElement;
  private titleInput: HTMLInputElement;
  private descriptionTextArea: HTMLTextAreaElement;
  private numPeopleInput: HTMLInputElement;
  private btn: HTMLButtonElement;

  constructor(private projectManager: ProjectManager) {
    this.template = document.getElementById(
      "project-input-template"
    )! as HTMLTemplateElement;
    this.hostEle = document.getElementById("app")! as HTMLDivElement;
    this.element = document.importNode(
      this.template.content.firstElementChild!,
      true
    )! as HTMLElement;
    this.projectManager = projectManager;
    const inputs = this.element.querySelectorAll("input");
    this.titleInput = inputs[0];
    this.descriptionTextArea = this.element.querySelector(
      "textarea"
    )! as HTMLTextAreaElement;
    this.numPeopleInput = inputs[1];
    this.btn = this.element.querySelector("button")! as HTMLButtonElement;

    this.configure();
    this.attach();
  }

  private configure() {
    this.btn.addEventListener("click", this.createProject);
  }

  private attach() {
    this.hostEle.appendChild(this.element);
  }

  @AutoBind
  private createProject(e: Event) {
    e.preventDefault();

    const project = new Project(
      this.titleInput.value,
      this.descriptionTextArea.value,
      +this.numPeopleInput.value
    );

    this.projectManager.addPrj(project);
  }
}
