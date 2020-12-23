import { IDomains } from "./interfaces/iDomains";
import { IRepositories } from "./interfaces/iRepositories";

import ToDo from "../domains/useCase/todo";

export default (repositories: IRepositories): IDomains => ({
  todo: new ToDo(repositories.todo),
});
