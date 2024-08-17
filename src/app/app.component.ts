import { Component, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  DagreNodesOnlyLayout,
  Layout,
  NgxGraphModule,
  PanningAxis,
} from "@swimlane/ngx-graph";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { JavaDataService } from "./shared/dataservices/java-data.service";
import { Data, Status, DataService } from "./shared/utils/data-utils";
import { Subject } from "rxjs";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { AngularDataService } from "./shared/dataservices/angular-data.service";
import { SharedDataService } from "./shared/dataservices/shared-data.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgxGraphModule,
    SidePanelComponent,
    SharedModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "roadmap";
  toggleOn = true;
  content = new Data("", "", "");
  keys: string[];
  public layout: Layout = new DagreNodesOnlyLayout();
  layoutSettings = {
    orientation: "TB",
  };
  nodes: any = [];
  links: any = [];
  constructor(public sharedDataService: SharedDataService) {
    this.keys = Object.keys(this.sharedDataService.allData);
  }

  initializegraph(dataService: DataService) {
    let nodes: any = [];
    let links: any = [];
    Object.entries(dataService.data).forEach(
      ([datapointkey, datapointvalue]: [string, Data]) => {
        //nodes
        nodes.push({
          id: datapointkey,
          label: datapointkey,
          data: { backgroundColor: datapointvalue.backgroundColor },
        });

        //links
        datapointvalue.targets.forEach((target) => {
          links.push({
            id: datapointkey + target,
            source: datapointkey,
            target: target,
            label: "is parent of",
            data: { gap: datapointvalue.gap },
          });
        });
      },
    );
    this.nodes = [...nodes];
    this.links = [...links];
  }

  loadgraph(name: string) {
    this.sharedDataService.set(name);
    this.initializegraph(this.sharedDataService.dataservice);
  }

  zoomToFit$: Subject<any> = new Subject();

  fitGraph() {
    this.zoomToFit$.next(true);
  }

  isDone(label: string): string {
    this.content = this.sharedDataService.dataservice.getData(label);
    if (this.content == undefined) {
      return "0";
    }
    if (
      this.content.status == Status.Done ||
      this.content.status == Status.Skip
    ) {
      return "1";
    }
    return "0";
  }

  getTextWidth(text: string): number {
    const context = document.createElement("canvas").getContext("2d");
    if (context) {
      context.font = "12px Arial"; // Adjust font size and family as necessary
      return context.measureText(text).width;
    }
    return 0;
  }

  isSkip(label: string): string {
    this.content = this.sharedDataService.dataservice.getData(label);
    if (this.content == undefined) {
      return "1";
    }
    if (this.content.status == Status.Skip) {
      return "1";
    }
    return "0";
  }

  getLineDash(gap: string): string {
    return "1," + gap;
  }

  getFillColor(node: any): string {
    this.content = this.sharedDataService.dataservice.getData(node.label);
    if (this.content === undefined) {
      return node.data.backgroundColor || node.data.color;
    } else if (this.content.status === Status.Skip) {
      return "#808080";
    } else {
      return node.data.backgroundColor || node.data.color;
    }
  }

  getBorderColor(node: any): string {
    this.content = this.sharedDataService.dataservice.getData(node.label);
    if (this.content == undefined) {
      return "none";
    }
    return this.content.border ? "black" : "none";
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    console.log("Clicked element:", targetElement);

    // Check if the click is within a specific component based on a class or attribute
    if (targetElement.closest(".side-panel")) {
      return;
    } else {
    }
  }
}
