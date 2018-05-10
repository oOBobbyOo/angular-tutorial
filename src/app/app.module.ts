import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

// component
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { GithubComponent } from "./github/github.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";

// service
import { GithubService } from "./services/github.service";
import { AuthService } from "./services/auth.service";

// guard
import { AuthGuard } from "./guards/auth.guard";

// pipe
import { ReversePipe } from "./pipes/reverse.pipe";

// directive
import { ColorDirective } from "./directives/color.directive";

// router
const routerConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "github", component: GithubComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "test", component: TestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    GithubComponent,
    LoginComponent,
    AdminComponent,
    ReversePipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [GithubService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
