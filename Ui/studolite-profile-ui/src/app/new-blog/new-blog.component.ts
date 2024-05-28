import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  blogContents:number[]=[];
  @ViewChild("newBlogContent") newBlogContent!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addNewSection()
  {
    this.blogContents.push(1);
  }
  removeSelectedSection(i:any)
  {
    //alert(this.newBlogContent.nativeElement.innerHTML);
    this.blogContents.splice(i,1);
  }

}
