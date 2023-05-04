
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs'; 
//import { TextStoryClient, TextStoryResponse } from './../../shared/api/service-proxies';
import { LocalApiService } from 'src/shared/api/service-proxies-local';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
})
export class StudentDetailsPage implements OnInit {
  studentDetailes : any = null;
  studentId:any = 1;
  constructor(private route:ActivatedRoute,
    private _router : Router,
    private localApiservice: LocalApiService) { }

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.localApiservice.getStudent(this.studentId).subscribe(res => {
      this.studentDetailes = res;
    });
  }
}
