import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ControllerService } from "../services/controller.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  logged:boolean = false;

  constructor(
    private authService: AuthService,
    private route: Router,
    private controllerService: ControllerService
  ) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.logged = this.authService.isUserLogin;

    if(this.logged){

      this.redirectTo()
    }
    this.controllerService.init();
  }

  redirectTo(){
    // setTimeout( () => this.route.navigateByUrl("/propriedade") ,5000);
    this.route.navigateByUrl("/slides");
    // this.route.navigateByUrl("/propriedade");
  }
}
