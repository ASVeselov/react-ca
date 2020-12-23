import { IInfrastructures } from "./interfaces/iInfrastructures";

import axios from "axios";
import Api from "../infrastructures/api";

export default (): IInfrastructures => ({
  api: new Api(axios),
});
