import { Component } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Greeting } from "Components/Greeting";
import { LazyComponent } from "Components/LazyComponent";
import { Navigation } from "Components/Navigation";
import { OpenURL } from "Components/OpenURL";
import { Redirect } from "Components/Redirect";
import {
  USER_DOCUMENTS,
  USER_EVENTS,
  USER_HOME,
  USER_ISSUES,
  USER_PAYMENTS,
} from "Routing/UserRoutes";
import { DeepLinks } from "Tools/DeepLinks";
import type { ITransitionName } from "Tools/Router";
import { Navigator, Route, Routes } from "Tools/Router";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export class App extends Component<Propless, State> {
  state: State = { transition: undefined };
  private UserEvents = LazyComponent(
    () => require("Screens/UserEvents").UserEvents,
  );
  private UserIssues = LazyComponent(
    () => require("Screens/UserIssues").UserIssues,
  );
  private UserPayments = LazyComponent(
    () => require("Screens/UserPayments").UserPayments,
  );
  private UserDocuments = LazyComponent(
    () => require("Screens/UserDocuments").UserDocuments,
  );

  public override componentDidMount() {
    void DeepLinks.initialize();
  }

  public override shouldComponentUpdate(_: Propless, { transition }: State) {
    return transition !== this.state.transition;
  }

  public override componentWillUnmount() {
    DeepLinks.destroy();
  }

  private setTransition = () => {
    if (this.state.transition) {
      return;
    }
    this.setState({ transition: "slide-x" });
  };

  public override render() {
    return (
      <SafeAreaProvider>
        <Navigator router={DeepLinks.Router}>
          <Greeting />
          <View style={Styles.container}>
            <Routes
              onMatch={this.setTransition}
              transition={this.state.transition}>
              <Route path={USER_HOME} Component={this.UserEvents} />
              <Route path={USER_ISSUES} Component={this.UserIssues} />
              <Route path={USER_PAYMENTS} Component={this.UserPayments} />
              <Route path={USER_DOCUMENTS} Component={this.UserDocuments} />
              <Route path={USER_EVENTS} Component={this.UserEvents} />
              <Route path="/*" element={<Redirect to={USER_HOME} />} />
            </Routes>
            <OpenURL />
          </View>
          <Navigation />
        </Navigator>
      </SafeAreaProvider>
    );
  }
}

interface State {
  transition?: ITransitionName;
}
