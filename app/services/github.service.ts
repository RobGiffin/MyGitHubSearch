import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username:string;
    private client_id = '9adf5131614ad5b09cd1';
    private client_secret = '5782977b614dcded2677a466ecb97d73a1402aa8';

    // inject the Http service into the constructor
    constructor(private _http: Http) {
        console.log("Github service ready...");
        this.username = 'RobGiffin';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+ this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+ this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

}

