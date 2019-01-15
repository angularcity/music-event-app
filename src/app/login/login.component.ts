import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    // console.log(form);
    this.router.navigate(["/"]);
  }
  onGoogle() {
    this.authService.login();
  }
}
