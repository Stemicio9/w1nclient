import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DashboardComponent } from "~/app/dashboard/dashboard.component";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    NativeScriptCommonModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forChild([
          {
              path: "default", component: DashboardComponent, children: [
                  {
                      path: "home",
                      outlet: "homeTab",
                      component: NSEmptyOutletComponent,
                      loadChildren: "~/app/home/home.module#HomeModule"
                  },
                  {
                      path: "search",
                      outlet: "searchTab",
                      component: NSEmptyOutletComponent,
                      loadChildren: "~/app/search/search.module#SearchModule"
                  },
                  {
                      path: "browse",
                      outlet: "browseTab",
                      component: NSEmptyOutletComponent,
                      loadChildren: "~/app/browse/browse.module#BrowseModule"
                  },
                  {
                      path: "profilo",
                      outlet: "profiloTab",
                      component: NSEmptyOutletComponent,
                      loadChildren: "~/app/profilo/profilo.module#ProfiloModule"
                  }
              ]
          }
      ])
  ],

  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
