import {Component, OnInit} from '@angular/core';
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
    this.userService.getAll(NEWS_API).subscribe(data => {this.news = data})
  }
}
