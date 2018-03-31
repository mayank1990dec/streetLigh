import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    { path: 'maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '' },
    { path: 'uploadExcel', title: 'upload Excel', icon: 'pe-7s-cloud-upload', class: '' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    loggedInUser: string;

    constructor() { }

    ngOnInit() {
        this.loggedInUser = 'Mayank';
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
