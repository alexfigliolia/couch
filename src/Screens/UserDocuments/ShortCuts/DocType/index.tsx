import { memo, useCallback, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDocumentType } from "Hooks/Documents/useDocumentType";
import type { IDocumentType } from "Models/Documents";
import { Documents } from "State/Documents";
import { CoreTheme } from "Themes/Core";
import { Styles } from "./Styles";

export const DocType = memo(function DocType({ type, index }: Props) {
  const [Icon, hasNew, displayType] = useDocumentType(type);
  const gradient = useMemo(() => CoreTheme.gradient(index), [index]);

  const onPress = useCallback(() => {
    Documents.enqueueType(type, gradient);
  }, [type, gradient]);

  return (
    <View style={[Styles.container, { shadowColor: gradient[1] }]}>
      <LinearGradient colors={gradient} style={Styles.gradient}>
        <TouchableOpacity onPress={onPress} style={Styles.touchable}>
          <View style={Styles.icon}>
            <Icon stroke="#fff" />
          </View>
          <Text style={Styles.title}>{displayType}</Text>
          <View style={Styles.actionItem}>
            <View style={Styles.actionInner}>
              {hasNew !== 0 && (
                <View style={[Styles.dot, { backgroundColor: gradient[1] }]}>
                  <Text style={Styles.dotText}>{hasNew}</Text>
                </View>
              )}
              <Text style={Styles.pending}>
                {hasNew === 0
                  ? "Up to date!"
                  : `new document${hasNew === 1 ? "" : "s"}`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
});

interface Props {
  index: number;
  type: IDocumentType;
}
