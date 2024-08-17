export class Data {
  heading: string;
  content: string;
  targets: string[];
  gap: string;
  status: Status;
  backgroundColor: string;
  border: boolean;

  constructor(
    heading: string,
    content: string,
    backgroundColor: string,
    targets: string[] = [],
    border: boolean = true,
    gap: string = "10",
  ) {
    this.heading = heading;
    this.content = content;
    this.status = stringToStatus(
      localStorage.getItem(heading) || Status.Pending,
    );
    this.targets = targets;
    this.gap = gap;
    this.backgroundColor = backgroundColor;
    this.border = border;
  }
}
export enum Status {
  Pending = "pending",
  Done = "done",
  InProgress = "in progress",
  Skip = "skip",
}
export function stringToStatus(statusString: string): Status {
  switch (statusString.toLowerCase()) {
    case "pending":
      return Status.Pending;
    case "done":
      return Status.Done;
    case "in progress":
      return Status.InProgress;
    case "skip":
      return Status.Skip;
    default:
      return Status.Pending;
  }
}

export class DataService {
  public data: { [key: string]: Data } = {};

  getData(key: string): Data {
    return this.data[key];
  }
}
