import { memo } from "react";
import { ScrollView } from "react-native";
import { ActionSheet } from "Components/ActionSheet";
import { CloserButton } from "Components/CloserButton";
import { Heading } from "Components/Heading";
import { CoreTheme } from "Themes/Core";
import { Selector } from "./Selector";
import { Styles } from "./Styles";

export const ActionSheetSelector = memo(function ActionSheetSelector({
  items,
  title,
  value,
  close,
  active,
  selectItem,
}: Props) {
  return (
    <ActionSheet
      close={close}
      active={active}
      style={Styles.sheet}
      header={
        <Heading
          text={title}
          style={Styles.heading}
          color={CoreTheme.LIGHT_BLACK}
        />
      }>
      <CloserButton
        onPress={close}
        style={Styles.closer}
        stroke={CoreTheme.UI_GRADIENT_BRIGHT[1]}
      />
      <ScrollView
        style={Styles.container}
        contentContainerStyle={Styles.scrollViewContent}>
        {items.map((item, i) => {
          return (
            <Selector
              index={i}
              key={item}
              value={item}
              visible={active}
              select={selectItem}
              isActive={item === value}
            />
          );
        })}
      </ScrollView>
    </ActionSheet>
  );
});

interface Props {
  title: string;
  active: boolean;
  close: () => void;
  value: string | number;
  items: (string | number)[];
  selectItem: (value: number) => void;
}
