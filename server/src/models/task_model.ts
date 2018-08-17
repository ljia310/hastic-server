import { AnalyticUnitId } from "./analytic_unit_model";


export type TaskId = string;
export enum TaskType { LEARN = 'LEARN' };

export class Task {
  constructor(
    public analyticUnitId: AnalyticUnitId,
    public type: TaskType,
    public id?: TaskId
  ) {
    if(analyticUnitId === undefined) {
      throw new Error('analyticUnitId is undefined');
    }
    if(type === undefined || type === null) {
      throw new Error('type is undefined or null');
    }
  }

  public toObject() {
    return {
      _id: this.id,
      analyticUnitId: this.analyticUnitId
    };
  }

  static fromObject(obj: any): Task {
    if(obj === undefined) {
      throw new Error('obj is undefined');
    }
    return new Task(
      obj.analyticUnitId,
      obj.type as TaskType,
      obj._id,
    );
  }
}