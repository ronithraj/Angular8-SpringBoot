import { Component, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        @Inject(DOCUMENT) private _document: Document
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }

    refresh(): void {
        this._document.defaultView.location.reload();
    }
}