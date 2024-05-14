import { memo } from "react";
import { View } from "react-native";
import { useDocumentTypes } from "Hooks/Documents/useDocumentTypes";
import { DocType } from "./DocType";
import { Styles } from "./Styles";

export const ShortCuts = memo(
  function ShortCuts() {
    const documents = useDocumentTypes();
    return (
      <View style={Styles.container}>
        {documents.map((type, i) => {
          return <DocType key={type} type={type} index={i} />;
        })}
      </View>
    );
  },
  () => true,
);
