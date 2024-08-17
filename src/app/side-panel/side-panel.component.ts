import { Component, ElementRef, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Data, Status, stringToStatus } from "../shared/utils/data-utils";
import { SharedDataService } from "../shared/dataservices/shared-data.service";
@Component({
  selector: "app-side-panel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./side-panel.component.html",
  styleUrl: "./side-panel.component.css",
})
export class SidePanelComponent {
  isOpen = false;

  updateGraph(): void {
    console.log("updating....");
  }

  content: Data = new Data("", "", "");

  status: string = "pending";
  dropdownOpen: boolean = false;

  constructor(
    public sharedDataService: SharedDataService,
    private eRef: ElementRef,
  ) {}

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (targetElement.closest(".side-panel")) {
      return;
    } else {
      if (this.isOpen == true) {
        this.closePanel();
      }
    }
  }

  openPanel(label: string): void {
    this.content = this.sharedDataService.dataservice.getData(label);
    if (this.content == undefined) {
      return;
    }
    console.log(this.content);
    setTimeout(() => {
      this.isOpen = true;
    }, 1);
  }

  closePanel(): void {
    this.isOpen = false;
  }

  statusString(status: string): string {
    if (this.content.status == stringToStatus(status)) {
      return "reset";
    }
    return stringToStatus(status).valueOf();
  }

  updateStatus(newStatus: string): void {
    if (this.content.status == stringToStatus(newStatus)) {
      this.content.status = Status.Pending;
    } else {
      this.content.status = stringToStatus(newStatus);
    }
    localStorage.setItem(this.content.heading, this.content.status);
    this.updateGraph();
    this.dropdownOpen = false;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getStatusClass(content: Data): string {
    switch (content.status) {
      case Status.Done:
        return "bg-green-500"; // Tailwind green color class
      case Status.InProgress:
        return "bg-yellow-500"; // Tailwind yellow color class
      case Status.Skip:
        return "bg-red-500"; // Tailwind red color class
      default:
        return "bg-gray-300"; // Default gray color class
    }
  }
}
