import { Injectable } from "@angular/core";
import { DataService } from "../utils/data-utils";
import { JavaDataService } from "./java-data.service";
import { AngularDataService } from "./angular-data.service";
import { SpringBootDataService } from "./spring-boot-data.service";

@Injectable({
  providedIn: "root",
})
export class SharedDataService {
  dataservice: DataService;
  allData: { [key: string]: DataService } = {};
  constructor() {
    this.allData = {
      java: new JavaDataService(),
      angular: new AngularDataService(),
      "spring-boot": new SpringBootDataService(),
    };
    this.dataservice = this.allData["java"];
  }

  set(name: string) {
    this.dataservice = this.allData[name];
    return this.dataservice;
  }
}
