import {
  CHANGE_PASSWORD,
  
} from "../URI";

import { Format } from "../../helpers/String";
import axiosWithApiServer from "api-server/Utils/hooks/axiosHelpers/axiosWithApiServer";

export const changePasswordApi = (passwordCredentials) => {
  const url = Format(CHANGE_PASSWORD.url);
  return axiosWithApiServer({ url, method: CHANGE_PASSWORD.reqType, body: passwordCredentials });
};