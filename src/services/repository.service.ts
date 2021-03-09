import axios from 'axios';
import {JsonConvert} from 'json2typescript';
import { APP_CONSTANTS } from 'config/app.config';
import Repository from 'model/repository';
import RepositoryImp from 'model/repository.imp';

const jsonConvert: JsonConvert = new JsonConvert();

export const getRepository = (): Promise<Repository> => {
    return axios.get(APP_CONSTANTS.ENDPOINTS.REPOSITORY)
        .then((res) => jsonConvert.deserializeObject(res.data, RepositoryImp))
        .catch((error) => new RepositoryImp());
};
