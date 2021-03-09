import { JsonObject, JsonProperty } from 'json2typescript';
import Repository from './repository';

@JsonObject('RepositoryImp')
export default class RepositoryImp implements Repository {

    @JsonProperty('name', String)
    name: string;

    @JsonProperty('id', Number)
    id: number;

    @JsonProperty('description', String)
    description: string;

    @JsonProperty('html_url', String)
    url: string;

    constructor(name: string = '', id: number = 0, description: string = '', url: string = '') {
        this.name = name;
        this.id = id;
        this.description = description;
        this.url = url;
    }
}
