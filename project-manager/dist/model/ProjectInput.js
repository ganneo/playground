var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AutoBind } from "../util/Decorators.js";
import Project from "./Project.js";
export default class ProjectInput {
    constructor(projectManager) {
        this.projectManager = projectManager;
        this.template = document.getElementById("project-input-template");
        this.hostEle = document.getElementById("app");
        this.element = document.importNode(this.template.content.firstElementChild, true);
        this.projectManager = projectManager;
        const inputs = this.element.querySelectorAll("input");
        this.titleInput = inputs[0];
        this.descriptionTextArea = this.element.querySelector("textarea");
        this.numPeopleInput = inputs[1];
        this.btn = this.element.querySelector("button");
        this.configure();
        this.attach();
    }
    configure() {
        this.btn.addEventListener("click", this.createProject);
    }
    attach() {
        this.hostEle.appendChild(this.element);
    }
    createProject(e) {
        e.preventDefault();
        const project = new Project(this.titleInput.value, this.descriptionTextArea.value, +this.numPeopleInput.value);
        this.projectManager.addPrj(project);
    }
}
__decorate([
    AutoBind
], ProjectInput.prototype, "createProject", null);
//# sourceMappingURL=ProjectInput.js.map