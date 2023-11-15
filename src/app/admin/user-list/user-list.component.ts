import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/model/user.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  userList$!: Observable<User[]>;
  title!: string;
  page$!: Observable<Params>;
  sub!: Subscription;

  constructor(private service: CommonService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userList$ = this.service.getPostList();
    this.page$ =  this.route.queryParams;

    this.sub = this.route.data.subscribe(data => {
      this.title = data['title']
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
