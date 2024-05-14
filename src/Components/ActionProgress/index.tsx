import { memo } from "react";
import { Text, View } from "react-native";
import { Styles } from "./Styles";

export const ActionProgress = memo(
  function ActionProgress({ progress, label = "complete" }: Props) {
    return (
      <View style={Styles.progress}>
        <Text style={Styles.progressText}>
          {progress}%<Text style={Styles.complete}>&nbsp;&nbsp;{label}</Text>
        </Text>
        <View style={Styles.progressBG}>
          <View style={[Styles.progressInner, { width: `${progress}%` }]} />
        </View>
      </View>
    );
  },
  (pp, np) => pp.progress === np.progress,
);

interface Props {
  label?: string;
  progress: number;
}
