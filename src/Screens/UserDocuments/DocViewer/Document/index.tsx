import { memo, useEffect, useMemo } from "react";
import {
  Animated,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ActionProgress } from "Components/ActionProgress";
import { useController } from "Hooks/Generics/useController";
import type { IDocument } from "Models/Documents";
import { useDocuments } from "State/Documents";
import { useModals } from "State/Modals";
import { UtilityStyles } from "Styles/Utility";
import { DocumentsTheme } from "Themes/Documents";
import { Dates } from "Tools/Dates";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const Document = memo(function Document({
  date,
  last,
  type,
  index,
  title,
  signed,
  description,
}: Props) {
  const controller = useController(new Controller());
  const active = useModals(state => state.docViewer);
  const colors = useDocuments(state => state.activeTheme);
  const deactivate = useDocuments(state => !!state.queuedType);
  const Icon = useMemo(() => DocumentsTheme.icon(type), [type]);
  controller.register(index, last);

  useEffect(() => {
    if (active) {
      controller.activate();
    } else {
      controller.deactivate();
    }
  }, [active, controller]);

  useEffect(() => {
    if (deactivate) {
      controller.deactivate();
    }
  }, [deactivate, controller]);

  return (
    <Animated.View
      style={[
        Styles.slide,
        {
          opacity: controller.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: controller.translateY.interpolate({
                inputRange: [0, 1],
                outputRange: [DocumentsTheme.SCROLL_VIEW_WIDTH / 3, 0],
              }),
            },
          ],
        },
      ]}>
      <TouchableWithoutFeedback
        onPressIn={controller.onPressIn}
        onPressOut={controller.onPressOut}>
        <Animated.View
          style={[
            Styles.tab,
            {
              transform: [
                {
                  scale: controller.scale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.95],
                  }),
                },
              ],
            },
          ]}>
          <LinearGradient
            colors={colors}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={Styles.gradient}>
            <Text style={Styles.docDate}>{Dates.format(new Date(date))}</Text>
            <View style={Styles.content}>
              {Icon && (
                <View style={Styles.docIcon}>
                  <Icon stroke="#fff" />
                </View>
              )}
              <Text style={Styles.docTitle}>{title}</Text>
              <Text style={Styles.docDescription}>{description}</Text>
            </View>
            <View style={Styles.actions}>
              <ActionProgress progress={signed ? 100 : 0} />
              <View style={Styles.button}>
                <TouchableOpacity style={UtilityStyles.fillAndCenter}>
                  <Text style={[Styles.buttonText, { color: colors[1] }]}>
                    {signed ? "View" : "Sign"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
});

interface Props extends IDocument {
  last: boolean;
  index: number;
}
