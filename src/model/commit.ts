import Author from './author';

export default interface Commit {
    sha: string;
    url: string;
    author: Author;
}
