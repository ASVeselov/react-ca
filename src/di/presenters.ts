import { IPresenters } from "./interfaces/iPresenters";
import { IDomains } from "./interfaces/iDomains";
import ToDoPresenter from "../presenters/todo";

export default (useCases: IDomains): IPresenters => ({
  todo: new ToDoPresenter(useCases.todo),
});
