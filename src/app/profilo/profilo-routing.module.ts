import { Routes } from "@angular/router";
import { SearchComponent } from "~/app/search/search.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular";
import { ProfiloComponent } from "~/app/profilo/profilo.component";

const routes: Routes = [
    { path: "" , redirectTo: "default"},
    { path: "default", component: ProfiloComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProfiloRoutingModule { }
