import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ListItemCard } from "Components/ListItemCard";
import { SignedFill, SignedStroke } from "Icons/Signed";
import { useDocuments } from "State/Documents";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { Dates } from "Tools/Dates";
import { Styles } from "./Styles";

export const DocList = memo(
  function DocList() {
    const docs = useDocuments(state => state.documents);
    return (
      <View style={Styles.container}>
        {docs.map(({ id, title, description, signed, date }) => {
          return (
            <ListItemCard
              key={id}
              title={title}
              description={description}
              date={Dates.format(new Date(date))}>
              <View style={Styles.status}>
                {signed ? (
                  <SignedFill stroke={CoreTheme.UI_GRADIENT[0]} />
                ) : (
                  <SignedStroke stroke={CoreTheme.LIGHTER_GRAY_TEXT} />
                )}
              </View>
              {!signed && (
                <View style={Styles.signButton}>
                  <LinearGradient
                    colors={CoreTheme.UI_GRADIENT}
                    style={UtilityStyles.fill}>
                    <TouchableOpacity style={UtilityStyles.fillAndCenter}>
                      <Text style={Styles.buttonText}>Sign!</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              )}
            </ListItemCard>
          );
        })}
      </View>
    );
  },
  () => true,
);
