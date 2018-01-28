import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  id: any;
  results: any;

  constructor(
    private httpService : HttpService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['fullname'];
  }

  ngOnInit() {
    this.getJson()
  }

  getJson(){
    this.httpService.get("issues?q=repo:" + this.id).subscribe(res => {
      this.results = res;
    });
  }

}


// api_url + "issues?q=repo:" + fullname
