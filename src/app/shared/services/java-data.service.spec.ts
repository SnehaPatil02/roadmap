import { TestBed } from "@angular/core/testing";
import { JavaDataService } from "../dataservices/java-data.service";

describe("JavaDataService", () => {
  let service: JavaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
