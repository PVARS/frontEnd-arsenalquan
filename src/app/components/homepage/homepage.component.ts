import {Component, OnInit, Pipe, PipeTransform, Injectable} from '@angular/core';
import {ServiceService} from '../../service/service.service';

const NEWS_API = "http://localhost:8080/api/news"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  public news: Array<any>;

  constructor(private userService: ServiceService) {
  }

  ngOnInit(): void {
    this.userService.getAll(NEWS_API).subscribe(data => 
      this.news = data);
  }

  getSortDateNews(){
    return this.news.sort((a, b) =>{
      return <any> new Date(b.ngayTao) - <any> new Date(a.ngayTao);
    });
  }
}
