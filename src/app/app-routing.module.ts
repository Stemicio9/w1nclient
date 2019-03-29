import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "~/app/login/login.component";
import { DashboardComponent } from "~/app/dashboard/dashboard.component";

const routes: Routes = [

    {
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    },

    {
        path: "login",
        component: LoginComponent

    },

    {
        path: "dashboard",
//        redirectTo: "/(homeTab:home/default//browseTab:browse/default//searchTab:search/default)"
        loadChildren: "~/app/dashboard/dashboard.module#DashboardModule"

    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
