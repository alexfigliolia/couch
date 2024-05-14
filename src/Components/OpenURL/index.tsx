import { Fragment, memo, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ActionSheet } from "Components/ActionSheet";
import { CloserButton } from "Components/CloserButton";
import { Heading } from "Components/Heading";
import { Modals, useModals } from "State/Modals";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { DeepLinks } from "Tools/DeepLinks";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const OpenURL = memo(
  function OpenURL(_: Propless) {
    const openURL = useModals(state => state.openURL);

    const onPress = useCallback(() => {
      DeepLinks.openURL();
      Modals.closeOpenURL();
    }, []);

    const dismiss = useCallback(() => {
      DeepLinks.dismiss();
      Modals.closeOpenURL();
    }, []);

    return (
      <ActionSheet
        close={dismiss}
        active={openURL}
        header={
          <Fragment>
            <View style={[Styles.content, Styles.heading]}>
              <Heading
                text="Open Link?"
                color={CoreTheme.UI_GRADIENT_BRIGHT[1]}
              />
            </View>
            <CloserButton
              style={Styles.closer}
              onPress={Modals.closeOpenURL}
              stroke={CoreTheme.UI_GRADIENT_BRIGHT[1]}
            />
          </Fragment>
        }>
        <View style={[Styles.content, Styles.mainContent]}>
          <Text style={Styles.text}>
            Another application would link to open a link in Couch. Would you
            like to continue?
          </Text>
          <View style={Styles.button}>
            <LinearGradient
              style={Styles.buttonInner}
              colors={CoreTheme.UI_GRADIENT_BRIGHT}>
              <TouchableOpacity
                onPress={onPress}
                style={UtilityStyles.fillAndCenter}>
                <Text style={Styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ActionSheet>
    );
  },
  () => true,
);
