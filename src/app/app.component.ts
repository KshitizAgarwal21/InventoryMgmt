import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HostListener} from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory';
  showMain = true;
  constructor(private router: Router, private route: ActivatedRoute){}
  newSales()
  {
    this.showMain=!this.showMain;
    this.router.navigate(['/newSale'], {relativeTo: this.route});
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.showMain=true;
  }
}
