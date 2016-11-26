import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: '/app/components/profile.component.html',
})
export class ProfileComponent  {
  user:any[];
  repos:any[];
  
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    })
    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }    
}
