import { IRepToDo } from "../../domains/useCase/todo/interfaces/iRepToDo";
import { IApi } from "../../infrastructures/interfaces/iApi";

class ToDoRepository implements IRepToDo {
  constructor(private readonly http: IApi) {}

  async getList() {
    const response = await this.http.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log("ToDoRepository", response);

    //return response
  }
}

export default ToDoRepository;
