import { Component, Fragment } from "react";
import { LayoutAnimation } from "react-native";
import type { IPaymentMethods } from "Models/PaymentMethods";
import { connectPaymentMethods } from "State/PaymentMethods";
import { PaymentList } from "../PaymentList";
import { Actions } from "./Actions";
import { Animation } from "./Animation";

class PaymentMethodActions extends Component<Props> {
  private static config = new Animation();

  public override UNSAFE_componentWillReceiveProps({
    showActions,
  }: Readonly<Props>) {
    if (showActions !== this.props.showActions) {
      LayoutAnimation.configureNext(PaymentMethodActions.config);
    }
  }

  public override shouldComponentUpdate({ showActions }: Readonly<Props>) {
    return showActions !== this.props.showActions;
  }

  public render() {
    if (!this.props.showActions) {
      return null;
    }
    return (
      <Fragment>
        <Actions />
        <PaymentList />
      </Fragment>
    );
  }
}

interface Props {
  showActions: boolean;
}

const mSTP = ({ showActions }: IPaymentMethods) => {
  return { showActions };
};

export const PaymentActions = connectPaymentMethods(mSTP)(PaymentMethodActions);
