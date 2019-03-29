import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";
import { isAndroid } from "tns-core-modules/platform";

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id,
})
export class DashboardComponent implements OnInit {

  constructor(private router: RouterExtensions, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
      console.log(this.activeRoute.toString());
      this.router.navigate([{ outlets: { homeTab: ["home"], browseTab: ["browse"], searchTab: ["search"] , profiloTab: ["profilo"] } }], { relativeTo: this.activeRoute });
  }

  getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }

}
