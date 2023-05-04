
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs'; 
//import { TextStoryClient, TextStoryResponse } from './../../shared/api/service-proxies';
import { LocalApiService } from 'src/shared/api/service-proxies-local';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students!: Observable<any>;

  constructor(private route:ActivatedRoute,
    private _router : Router,
    private localApiservice: LocalApiService) { }

  ngOnInit() {
    this.students = this.localApiservice.getStudentsList();
  }
}
