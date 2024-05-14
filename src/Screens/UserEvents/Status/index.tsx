import { memo } from "react";
import { View } from "react-native";
import { HomeTheme } from "Themes/Home";
import type { Propless } from "Types/React";
import { Bar } from "./Bar";
import { Styles } from "./Styles";

export const Status = memo(
  function Status(_: Propless) {
    return (
      <View style={Styles.container}>
        <Bar
          delay={0}
          label="Payments"
          progress={100}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={HomeTheme.PAYMENTS}
        />
        <Bar
          delay={100}
          label="Issues"
          progress={70}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={HomeTheme.ISSUES}
        />
        <Bar
          delay={200}
          label="Something"
          progress={65}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={HomeTheme.SOMETHING}
        />
        <Bar
          delay={300}
          label="Docs"
          progress={35}
          end={{ y: 0, x: 0 }}
          start={{ y: 1, x: 0 }}
          colors={HomeTheme.DOCUMENTS}
        />
      </View>
    );
  },
  () => true,
);
