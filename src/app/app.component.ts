import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { Config, Nav } from "@ionic/angular";

import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    { title: "Home", url: "/home", icon: "home" },
    { title: "Tabs", url: "/tabs", icon: "" },
    { title: "List", url: "/list", icon: "list" },
    { title: "Contact", url: "/contact", icon: "contact" },
    { title: "About", url: "/about", icon: "" }
  ];

  constructor(
    platform: Platform,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    
      this.initializeApp();
    });
  }

  initializeApp() {}
}
