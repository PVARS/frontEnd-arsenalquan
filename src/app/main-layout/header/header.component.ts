import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

declare var $: any;

const CATEGORY_API = 'http://localhost:8080/api/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public categories: Array<any>;

  constructor(private userService: ServiceService) { }

  ngOnInit(): void {
    // this.userService.getAll(CATEGORY_API).subscribe(data =>
    //   this.categories = data
    // );
  }

}
