import infrastructures from "./infrastructures";
import repositories from "./repositories";
import domains from "./domains";
import presenters from "./presenters";

const DIInfrastructures = infrastructures();
const DIRepositorires = repositories(DIInfrastructures);
const DIUseCases = domains(DIRepositorires);
const DIPresenters = presenters(DIUseCases);

const DI = {
  todo: DIPresenters.todo,
};

export default DI;
