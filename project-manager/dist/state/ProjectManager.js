export default class ProjectManager {
    constructor() {
        this.projects = [];
    }
    static getManager() {
        if (!this.projectManager) {
            this.projectManager = new ProjectManager();
        }
        return this.projectManager;
    }
    addPrj(prj) {
        this.projects.push(prj);
    }
}
//# sourceMappingURL=ProjectManager.js.map