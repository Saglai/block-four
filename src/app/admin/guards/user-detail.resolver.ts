import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { EMPTY, catchError } from 'rxjs';
import { User } from '../../model/user.interface';

export const userDetailResolver: ResolveFn<User> = 
(route: ActivatedRouteSnapshot) => {
  const service = inject(CommonService);
  const router = inject(Router);
  const id = route.paramMap.get('id');
  
  return service.getPostById(Number(id)).pipe(
    catchError((err) => {
      console.log(err);
      router.navigateByUrl('admin/user-list');
      return EMPTY;
    })
  )
};
