import { Fragment, memo } from "react";
import { ScrollView } from "react-native";
import { FloatingGradientButton } from "Components/FloatingGradientButton";
import { useUnmount } from "Hooks/Generics/useUnmount";
import { Plus } from "Icons/Plus";
import { Modals } from "State/Modals";
import type { Propless } from "Types/React";
import { AddIssueExploader } from "./AddIssueExploader";
import { AddIssueModal } from "./AddIssueModal";
import { AnimatedHeading } from "./AnimatedHeading";
import { IssueResponses } from "./IssueResponses";
import { IssuesByType } from "./IssuesByType";
import { IssueTabs } from "./IssueTabs";
import { RecentIssueList } from "./RecentIssueList";
import { Styles } from "./Styles";

export const UserIssues = memo(
  function UserIssues(_: Propless) {
    useUnmount(() => {
      Modals.closeAddIssue();
    });

    return (
      <Fragment>
        <ScrollView style={Styles.container}>
          <IssueTabs />
          <AnimatedHeading />
          <IssuesByType />
          <RecentIssueList />
        </ScrollView>
        <FloatingGradientButton onPress={Modals.openAddIssue}>
          <Plus stroke="#fff" />
        </FloatingGradientButton>
        <AddIssueModal />
        <AddIssueExploader />
        <IssueResponses />
      </Fragment>
    );
  },
  () => true,
);
