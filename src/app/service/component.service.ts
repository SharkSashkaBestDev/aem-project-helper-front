import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private httpClient : HttpClient) { }

  getComponents(projectPath: string) {
    return this.httpClient.post(Constants.COMPONENTS_ROOT_ENDPOINT, projectPath);
  }
}
