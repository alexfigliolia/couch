import { memo, useEffect } from "react";
import type { ScrollView } from "react-native";
import { Animated, View } from "react-native";
import { useScrollRestoration } from "Hooks/Generics/useScrollRestoration";
import { useIssueType } from "Hooks/Issues/useIssueType";
import type { IIssueType } from "Models/Issues";
import type { Propless } from "Types/React";
import { Issue } from "./Issue";
import { Styles } from "./Styles";

export const IssuesByType = memo(
  function IssuesByType(_: Propless) {
    const [type, _name, issues, total] = useIssueType();
    const scrollRestorer = useScrollRestoration<ScrollView, IIssueType>("x");

    useEffect(() => {
      scrollRestorer.restorePosition(type);
      return () => {
        scrollRestorer.cachePosition(type);
      };
    }, [type, scrollRestorer]);

    return (
      <View style={Styles.container}>
        <View style={Styles.inner}>
          <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={100}
            style={Styles.issueScroller}
            ref={scrollRestorer.cacheNode}
            onScroll={scrollRestorer.onScroll}
            showsHorizontalScrollIndicator={false}>
            {issues.map((issue, i) => {
              return (
                <View key={issue.id} style={Styles.issue}>
                  <Issue {...issue} last={i === total - 1} />
                </View>
              );
            })}
          </Animated.ScrollView>
        </View>
      </View>
    );
  },
  () => true,
);
