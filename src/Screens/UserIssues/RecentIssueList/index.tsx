import { Fragment, memo } from "react";
import { View } from "react-native";
import { DecorHeading } from "Components/DecorHeading";
import { IssueCard } from "Components/IssueCard";
import { usePendingIssues } from "Hooks/Issues/usePendingIssues";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const RecentIssueList = memo(
  function RecentIssueList(_: Propless) {
    const issues = usePendingIssues();
    return (
      <Fragment>
        <DecorHeading
          type="line"
          text="Recent Issues"
          style={Styles.headingText}
          containerStyle={Styles.heading}
        />
        <View style={Styles.list}>
          {issues.map(issue => {
            return <IssueCard pressable truncate key={issue.id} {...issue} />;
          })}
        </View>
      </Fragment>
    );
  },
  () => true,
);
