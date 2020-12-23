import { IRepositories } from "./interfaces/iRepositories";
import { IInfrastructures } from "./interfaces/iInfrastructures";

import ToDo from "../repositories/todo";

export default (infrastructures: IInfrastructures): IRepositories => ({
  todo: new ToDo(infrastructures.api),
});
