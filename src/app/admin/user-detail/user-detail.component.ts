import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationStart, Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { User } from 'src/app/model/user.interface';
import { Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user!: User;
  id!: number;
  sub!: Subscription;
  routerEventSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.sub = this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.routerEventSub = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        console.log(event);
      }
    });

    // Access to dynamic data from user list
    console.log(history.state.name);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.routerEventSub.unsubscribe();
  }
}
