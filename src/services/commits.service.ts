import axios from 'axios';
import Commit from 'model/commit';
import {JsonConvert} from 'json2typescript';
import CommitImp from 'model/commit.imp';
import { APP_CONSTANTS } from 'config/app.config';

const jsonConvert: JsonConvert = new JsonConvert();

export const getCommits = (): Promise<Commit[]> => {
    return axios.get(APP_CONSTANTS.ENDPOINTS.COMMITS)
        .then((res) => jsonConvert.deserializeArray(res.data, CommitImp))
        .catch((error) => []);
};
