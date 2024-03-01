class Task {
    constructor({
      _id,
      taskTitle,
      taskStatus,
      taskPriority,
      taskValidity,
      taskCheckList,
      __v,
      createdBy,
      createdAt,
    }) {
      this._id = _id;
      this.taskTitle = taskTitle;
      this.taskStatus = taskStatus;
      this.taskPriority = taskPriority;
      this.taskValidity = taskValidity;
      this.taskCheckList = taskCheckList || {};
      this.__v = __v || 0;
      this.createdBy = createdBy;
      this.createdAt = createdAt;
    }
  
    addSubtask(id, subtaskName, isDone = false) {
      this.taskCheckList[id] = { subtaskName, isDone };
    }

    toJSON() {
        return {
          _id: this._id,
          taskTitle: this.taskTitle,
          taskStatus: this.taskStatus,
          taskPriority: this.taskPriority,
          taskValidity: this.taskValidity,
          taskCheckList: this.taskCheckList,
          __v: this.__v,
          createdBy: this.createdBy,
          createdAt: this.createdAt,
        };
      }
}
    export default Task;