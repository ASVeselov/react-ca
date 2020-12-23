import { IToDo } from "./interfaces/iToDo";
import { IRepToDo } from "./interfaces/iRepToDo";

class ToDo implements IToDo {
  constructor(private readonly toDoRep: IRepToDo) {}

  async getList() {
    const result = await this.toDoRep.getList();
    return result;
  }
}

export default ToDo;
