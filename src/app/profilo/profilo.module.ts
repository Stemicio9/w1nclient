import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProfiloComponent } from './profilo.component';
import { ProfiloRoutingModule } from "~/app/profilo/profilo-routing.module";

@NgModule({
  declarations: [ProfiloComponent],
  imports: [
    NativeScriptCommonModule,
    ProfiloRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfiloModule { }
