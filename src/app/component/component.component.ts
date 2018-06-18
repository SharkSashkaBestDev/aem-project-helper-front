import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../service/component.service';
import { MyComponent } from '../entity/component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  components: MyComponent[];
  filteredComponents: MyComponent[];
  projectPath: string = 'Enter your AEM project path here...';
  predefinedModulesDescriptors = [
    {path: 'core/wcm/', value: 'core'},
    {path: 'kitchenaid/', value: 'kitchenaid'},
    {path: 'whirlpool/', value: 'whirlpool'},
    {path: 'whr/', value: 'whr'}]
  componentGroups = [];
  selectedComponentGroup;
  componentName: string;
  selectedComponentModule;
  componentModules = ['custom'];

  constructor(private componentService: ComponentService) { }

  ngOnInit() {}

  showComponents() {
    this.componentService.getComponents(this.projectPath).subscribe((data: MyComponent[]) => {
      this.components = data;
      this.filteredComponents = Object.assign([], this.components);
      this.fillComponentGroups();
      this.fillComponentModules();
      this.applyFilters();
    })
  }

  fillComponentGroups() {
    this.components.map((c: MyComponent) => c.group).forEach((c: any) => {
      if (this.componentGroups.filter(cg => cg === c).length === 0)
        this.componentGroups.push(c);
    });
  }

  fillComponentModules() {
    this.components.map(c => c.parent).forEach((parent: string) => {
      if (!parent) return;
      this.predefinedModulesDescriptors.forEach(d => {
        if (parent.startsWith(d.path)) {
          if (this.componentModules.indexOf(d.value) === -1) {
            this.componentModules.push(d.value);
            return;
          }
        }
      });
    });
  }

  applyCGFilter(): MyComponent[] {
    if (this.components && this.components.length > 0 && this.selectedComponentGroup) {
      return this.components.filter(c => c.group === this.selectedComponentGroup);
    } else {
      return Object.assign([], this.components);
    }
  }

  applyNameFilter(): MyComponent[] {
    if (this.componentName) {
      return this.components.filter(c => c.name.toLowerCase().includes(this.componentName.toLowerCase()))
    } else {
      return Object.assign([], this.components);
    }
  }

  applyModuleFilter(): MyComponent[] {
    if (this.components && this.components.length > 0 && this.selectedComponentModule && this.selectedComponentModule !== 'custom') {
      return this.components.filter(c => c.parent && c.parent.startsWith(this.selectedComponentModule))
    } else if (this.components && this.components.length > 0 && this.selectedComponentModule) {
      this.filteredComponents = this.components.filter(c => {
        if (!c.parent) return false;
        let unique = true;
        this.componentModules.forEach(cm => {
          if (c.parent.startsWith(cm)) {
            unique = false;
            return;
          }
        });
        return unique;
      });
    } else {
      return Object.assign([], this.components);
    }
  }

  applyFilters() {
    const cgFilterItems = this.applyCGFilter();
    const nameFilterItems = this.applyNameFilter();
    const moduleFilterItems = this.applyModuleFilter();
    this.filteredComponents = (cgFilterItems.length < nameFilterItems.length && cgFilterItems.length < moduleFilterItems.length ?
    cgFilterItems : 
           nameFilterItems.length < cgFilterItems.length && nameFilterItems.length < moduleFilterItems.length ?
    nameFilterItems :
           moduleFilterItems);
  }

  getComponentModule(component: MyComponent) {
    if (!component.parent) return 'custom';

    for (let i = 0; i < this.predefinedModulesDescriptors.length; i = i + 1) {
      if (component.parent.startsWith(this.predefinedModulesDescriptors[i].path)) {
        return this.predefinedModulesDescriptors[i].value;
      }
    }

    return 'custom';
  }

}
