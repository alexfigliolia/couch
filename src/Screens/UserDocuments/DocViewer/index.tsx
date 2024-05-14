import { memo, useEffect } from "react";
import { LayoutAnimation, ScrollView, View } from "react-native";
import { ActionSheet } from "Components/ActionSheet";
import { CloserButton } from "Components/CloserButton";
import { DecorHeading } from "Components/DecorHeading";
import { useActiveDocuments } from "Hooks/Documents/useActiveDocuments";
import { useScrollRestoration } from "Hooks/Generics/useScrollRestoration";
import type { IDocumentType } from "Models/Documents";
import { Modals, useModals } from "State/Modals";
import type { Propless } from "Types/React";
import { Animation } from "./Animation";
import { Document } from "./Document";
import { Styles } from "./Styles";

export const DocViewer = memo(
  function DocViewer(_: Propless) {
    const active = useModals(state => state.docViewer);
    const scrollRestorer = useScrollRestoration<ScrollView, IDocumentType>("x");
    const [type, name, documents, theme, total] = useActiveDocuments();

    useEffect(() => {
      LayoutAnimation.configureNext(new Animation());
      setTimeout(() => {
        scrollRestorer.restorePosition(type);
      }, 0);
      return () => {
        scrollRestorer.cachePosition(type);
      };
    }, [type, scrollRestorer]);

    return (
      <ActionSheet
        active={active}
        close={Modals.closeDocViewer}
        header={
          <DecorHeading
            color={theme[0]}
            text={name || "Leases"}
            style={Styles.headingText}
            containerStyle={Styles.headingInner}
          />
        }>
        <CloserButton
          stroke={theme[0]}
          style={Styles.closer}
          onPress={Modals.closeDocViewer}
        />
        <View style={Styles.container}>
          <ScrollView
            horizontal
            pagingEnabled
            style={Styles.scrollView}
            scrollEventThrottle={100}
            ref={scrollRestorer.cacheNode}
            onScroll={scrollRestorer.onScroll}
            showsHorizontalScrollIndicator={false}>
            {documents.map((doc, i) => {
              return (
                <Document
                  {...doc}
                  index={i}
                  key={doc.id}
                  last={i === total - 1}
                />
              );
            })}
          </ScrollView>
        </View>
      </ActionSheet>
    );
  },
  () => true,
);
