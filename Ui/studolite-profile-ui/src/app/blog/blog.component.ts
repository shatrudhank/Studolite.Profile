import { Component, OnInit } from '@angular/core';
import { BlogModel } from './model/blog-model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogArray:BlogModel[]=[];

  constructor() { }

  ngOnInit(): void {
    this.blogArray.push(new BlogModel(1,"Ref v/s Out"));
    this.blogArray.push(new BlogModel(1,"What is inheritance"));
    this.blogArray.push(new BlogModel(1,"Class v/s struct"));
  }

}
