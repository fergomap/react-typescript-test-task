import Author from './author';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('AuthorImp')
export default class AuthorImp implements Author {
    
    @JsonProperty('login', String)
    login: string;
    
    @JsonProperty('id', Number)
    id: number;
    
    @JsonProperty('avatar_url', String)
    avatarUrl: string;
    
    @JsonProperty('html_url', String)
    url: string;

    constructor(login: string = '', id: number = 0, avatarUrl: string = '', url: string = '') {
        this.login = login;
        this.id = id;
        this.avatarUrl = avatarUrl;
        this.url = url;
    }
}
