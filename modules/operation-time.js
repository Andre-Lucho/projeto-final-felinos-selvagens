export default class OperationTime {
  constructor(operationTag, activedClass, disablesClass) {
    this.operationTag = document.querySelector(operationTag);
    this.activedClass = activedClass;
    this.disablesClass = disablesClass;
    this.init();
  }

  operationData() {
    this.weekDay = this.operationTag.dataset.week.split(",").map(Number);
    this.weekHour = this.operationTag.dataset.time.split(",").map(Number);
  }

  localData() {
    this.operationData();
    this.localDate = new Date();
    this.localDay = this.localDate.getDay();
    this.brazilTime = this.localDate.getUTCHours() - 3;
  }

  isOperational() {
    this.localData();
    const operationalDay = this.weekDay.indexOf(this.localDay) !== -1;
    const operationalTime =
      this.brazilTime >= this.weekHour[0] && this.brazilTime < this.weekHour[1];
    return operationalDay && operationalTime;
  }

  activeOperationalTime() {
    if (this.isOperational()) {
      this.isOperational();
      this.operationTag.classList.add(this.activedClass);
      this.operationTag.previousElementSibling.classList.add(this.activedClass);
    } else {
      this.operationTag.previousElementSibling.classList.add(
        this.disablesClass
      );
    }
  }
  init() {
    if (this.operationTag) this.activeOperationalTime();
    return this;
  }
}
