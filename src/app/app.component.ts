import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  DagreNodesOnlyLayout,
  Layout,
  NgxGraphModule,
  PanningAxis,
} from "@swimlane/ngx-graph";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { Data, DataService, Status } from "./data.service";
import { Subject } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgxGraphModule, SidePanelComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "roadmap";
  toggleOn = true;
  content = new Data("", "");
  public layout: Layout = new DagreNodesOnlyLayout();
  layoutSettings = {
    orientation: "TB",
  };
  nodes = [
    {
      id: "Java",
      label: "Java",
      data: {
        backgroundColor: "white",
      },
    },

    {
      id: "Learn the Fundamentals",
      label: "Learn the Fundamentals",
      data: {
        backgroundColor: "yellow",
      },
    },
    {
      id: "Basic Syntax",
      label: "Basic Syntax",
      data: {
        backgroundColor: "orange",
      },
    },

    {
      id: "DataTypes, Variables",
      label: "DataTypes, Variables",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Conditionals",
      label: "Conditionals",
      data: {
        backgroundColor: "orange",
      },
    },

    {
      id: "Data Structures",
      label: "Data Structures",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "OOP, Interface, Classes",
      label: "OOP, Interface, Classes",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Packages",
      label: "Packages",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Working with Files and APIs",
      label: "Working with Files and APIs",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Getting Deeper",
      label: "Getting Deeper",
      data: {
        backgroundColor: "yellow",
      },
    },
    {
      id: "Memory Management",
      label: "Memory Management",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Collection Framework",
      label: "Collection Framework",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Serialization",
      label: "Serialization",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Networking & Sockets",
      label: "Networking & Sockets",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Generics",
      label: "Generics",
      data: {
        backgroundColor: "orange",
      },
    },
    {
      id: "Build Tools",
      label: "Build Tools",
      data: {
        backgroundColor: "yellow",
      },
    },
    {
      id: "Gradle",
      label: "Gradle",
      data: {
        backgroundColor: "orange",
      },
    },
  ];

  constructor(public dataService: DataService) {}

  zoomToFit$: Subject<any> = new Subject();

  fitGraph() {
    this.zoomToFit$.next(true);
  }

  isDone(label: string): string {
    this.content = this.dataService.getData(label);
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
    this.content = this.dataService.getData(label);
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
    this.content = this.dataService.getData(node.label);
    if (this.content === undefined) {
      return node.data.backgroundColor || node.data.color;
    } else if (this.content.status === Status.Skip) {
      return "#808080";
    } else {
      return node.data.backgroundColor || node.data.color;
    }
  }

  getBorderColor(node: any): string {
    return this.getFillColor(node) !== "white" ? "black" : "none";
  }
}
