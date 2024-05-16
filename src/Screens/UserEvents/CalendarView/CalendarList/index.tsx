import { memo, useCallback, useState } from "react";
import type {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { FlatList, LayoutAnimation } from "react-native";
import { useController } from "Hooks/Generics/useController";
import type { ICalendar } from "Models/Schedule";
import { useSchedule } from "State/Schedule";
import type { Propless } from "Types/React";
import { Calendar } from "./Calendar";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const CalendarList = memo(
  function CalendarList(_: Propless) {
    const controller = useController(new Controller());
    const schedules = useSchedule(state => state.schedules);
    const [height, setHeight] = useState<number | undefined>();

    const onScroll = useCallback(
      (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const nextPosition = controller.computeNext(e);
        const nextHeight = controller.getHeight(nextPosition);
        if (
          nextHeight !== 0 &&
          nextPosition >= 0 &&
          controller.currentIndex !== nextPosition
        ) {
          controller.currentIndex = nextPosition;
          LayoutAnimation.configureNext(
            LayoutAnimation.create(300, "easeOut", "opacity"),
          );
          setHeight(controller.getHeight(nextPosition));
        }
      },
      [controller],
    );

    const cacheChildHeight = useCallback(
      (month: number, height: number) => {
        controller.setHeight(month, height);
        if (month === controller.currentIndex) {
          setHeight(height);
        }
      },
      [controller],
    );

    const renderItem = useCallback(
      ({ item }: ListRenderItemInfo<ICalendar>) => {
        return <Calendar {...item} cacheHeight={cacheChildHeight} />;
      },
      [cacheChildHeight],
    );

    return (
      <FlatList
        horizontal
        pagingEnabled
        windowSize={3}
        data={schedules}
        onScroll={onScroll}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        renderItem={renderItem}
        scrollEventThrottle={100}
        showsHorizontalScrollIndicator={false}
        style={[Styles.container, { height }]}
        keyExtractor={Controller.keyExtractor}
        getItemLayout={Controller.getItemLayout}
        initialScrollIndex={controller.currentIndex}
      />
    );
  },
  () => true,
);
