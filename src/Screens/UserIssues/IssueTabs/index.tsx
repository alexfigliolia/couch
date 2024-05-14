import { memo, useCallback, useMemo, useState } from "react";
import { Tabs } from "Components/Tabs";
import { Issues } from "State/Issues";
import { IssueTheme } from "Themes/Issues";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const IssueTabs = memo(
  function IssueTabs(_: Propless) {
    const [active, setActive] = useState(Issues.defaultTabIndex);

    const onPress = useCallback((index: number) => {
      setActive(index);
      Issues.enqueue(IssueTheme.ISSUE_KEYS[index]);
    }, []);

    const tabs = useMemo(() => {
      return IssueTheme.ISSUE_KEYS.map(key => ({
        key,
        onPress,
        text: IssueTheme.displayName(key),
        theme: IssueTheme.typeGradient(key),
      }));
    }, [onPress]);

    return <Tabs tabs={tabs} active={active} style={Styles.tabs} />;
  },
  () => true,
);
