export class MyComponent {
    public id: string;
    public name: string;
    public description: string;
    public path: string;
    public parent: string;
    public group: string;
    public createdAt: Date;

    constructor(component: MyComponent) {
        if (component) {
            this.id = component.id;
            this.name = component.name;
            this.description = component.description;
            this.path = component.path;
            this.parent = component.parent;
            this.group = component.group;
            this.createdAt = component.createdAt;
        } else {
            this.id = '';
            this.name = '';
            this.description = '';
            this.path = '';
            this.parent = '';
            this.group = '';
            this.createdAt = null;
        }
    }
}