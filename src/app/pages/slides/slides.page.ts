import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private route:Router, private authService: AuthService) { }

  ngOnInit() {
    if(!this.authService.isUserLogin){
      this.route.navigateByUrl("/auth");  
    }
  }
  redirectTo(){
    // setTimeout( () => this.route.navigateByUrl("/propriedade") ,5000);
    this.route.navigateByUrl("/propriedade");
  }
  next(){
   // slideNext
  }
}
