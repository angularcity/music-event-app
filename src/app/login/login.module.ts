import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";
import { AuthGuardService } from "../services/auth-guard.service";
import { AuthService } from "../services/auth.service";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [LoginComponent],
  providers: [AuthService, AuthGuardService]
})
export class LoginModule {}
