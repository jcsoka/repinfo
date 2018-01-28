import { Component, OnInit } from '@angular/core';
import {HttpService } from "../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-allrepos',
  templateUrl: './allrepos.component.html',
  styleUrls: ['./allrepos.component.css']
})
export class AllreposComponent implements OnInit {
  results: any;
  search: any;

  constructor(
    private httpService : HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.search = this.route.snapshot.params['reponame'];
    this.getJson();
  }

  doSearch() {
    this.router.navigate(['/search/'+this.search]);
    this.getJson();
  }

  getJson(){
    this.httpService.get("repositories?q=" + this.search).subscribe(res => {
      this.results = res;
    });
  }
}
