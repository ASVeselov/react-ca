import { IToDo } from "../../domains/useCase/todo/interfaces/iToDo";

class ToDoPresenter {
  constructor(private readonly useCase: IToDo) {}

  async getList() {
    const list = await this.useCase.getList();
  }
}

export default ToDoPresenter;
