import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { LoginModule } from "../login/login.module";
import { FirebaseService } from "../services/firebase.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),
    LoginModule
  ],
  providers: [FirebaseService]
})
export class CoreModule {}
