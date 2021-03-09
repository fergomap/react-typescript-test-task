import Author from './author';
import AuthorImp from './author.imp';
import Commit from './commit';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('CommitImp')
export default class CommitImp implements Commit {

    @JsonProperty('sha', String)
    sha: string;

    @JsonProperty('url', String)
    url: string;

    @JsonProperty('author', AuthorImp)
    author: Author;

    constructor(sha: string = '', url: string = '', author: Author = new AuthorImp()) {
        this.sha = sha;
        this.url = url;
        this.author = author;
    }
}
