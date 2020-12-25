import Project from "../model/Project.js";

export default class ProjectManager {
  private projects: Project[] = [];
  private static projectManager: ProjectManager;

  private constructor() {}

  static getManager() {
    if (!this.projectManager) {
      this.projectManager = new ProjectManager();
    }
    return this.projectManager;
  }

  public addPrj(prj: Project) {
    this.projects.push(prj);
  }
}
