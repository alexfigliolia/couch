import { Linking } from "react-native";
import { UserRoutes } from "Routing/UserRoutes";
import { Modals } from "State/Modals";
import { Router } from "./Router";

export class DeepLinks {
  private static initialized = false;
  public static readonly Router = new Router(UserRoutes.defaultRoute);
  private static enqueuedURL: string | null = null;

  public static async initialize() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    this.enqueuedURL = await Linking.getInitialURL();
    if (this.enqueuedURL) {
      Modals.openURL();
    }
    Linking.addEventListener("url", event => {
      this.enqueuedURL = this.clean(event.url);
      Modals.openURL();
    });
  }

  public static openURL() {
    if (!this.enqueuedURL) {
      return;
    }
    this.Router.navigate(this.enqueuedURL);
    this.enqueuedURL = null;
  }

  public static dismiss() {
    this.enqueuedURL = null;
  }

  public static destroy() {
    if (!this.initialized) {
      return;
    }
    this.enqueuedURL = null;
    this.initialized = false;
    Linking.removeAllListeners("url");
  }

  private static clean(url: string) {
    if (url.startsWith("http:/")) {
      return url.slice("http:/".length);
    }
    if (url.startsWith("https:/")) {
      return url.slice("https:/".length);
    }
    return url;
  }
}
