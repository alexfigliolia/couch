import { Component } from "react";
import { LayoutAnimation } from "react-native";
import type { IPaymentMethods } from "Models/PaymentMethods";
import { connectPaymentMethods } from "State/PaymentMethods";
import { PaymentList } from "../PaymentList";
import { Animation } from "./Animation";

class CombinedPayments extends Component<Props> {
  private config = new Animation(this.props.totalBanks);

  public override UNSAFE_componentWillReceiveProps({
    allActive,
    totalBanks,
  }: Readonly<Props>) {
    if (totalBanks !== this.props.totalBanks) {
      this.config = new Animation(totalBanks);
    }
    if (allActive !== this.props.allActive) {
      LayoutAnimation.configureNext(this.config);
    }
  }

  public override shouldComponentUpdate({ allActive }: Readonly<Props>) {
    return allActive !== this.props.allActive;
  }

  public render() {
    if (!this.props.allActive) {
      return null;
    }
    return <PaymentList />;
  }
}

interface Props {
  allActive: boolean;
  totalBanks: number;
}

const mSTP = ({ active, banks }: IPaymentMethods) => {
  return { allActive: active === -1, totalBanks: banks.size };
};

export const CombinedPaymentList =
  connectPaymentMethods(mSTP)(CombinedPayments);
