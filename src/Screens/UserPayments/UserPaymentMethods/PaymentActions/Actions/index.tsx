import { memo, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PaymentMethods, usePaymentMethods } from "State/PaymentMethods";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const Actions = memo(
  function Actions(_: Propless) {
    const isPrimary = usePaymentMethods(
      state => !!state.banks.get(state.active)?.primary,
    );
    const activeTheme = usePaymentMethods(state => state.activeTheme);
    const confirming = usePaymentMethods(state => state.confirmDeletion !== -1);

    const onDeletePress = useCallback(() => {
      if (confirming) {
        PaymentMethods.cancelDeletion();
      } else {
        PaymentMethods.confirmDeletion();
      }
    }, [confirming]);

    return (
      <View style={Styles.container}>
        <View style={Styles.buttonContainer}>
          <LinearGradient
            end={{ y: 0, x: 1 }}
            start={{ y: 0, x: 0 }}
            colors={activeTheme}
            style={Styles.delete}>
            <View style={Styles.deleteWhite}>
              <TouchableOpacity
                style={Styles.deleteInner}
                onPress={onDeletePress}>
                <Text style={[Styles.deleteText, { color: activeTheme[1] }]}>
                  {confirming ? "Cancel" : "Delete"}
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View
          style={[
            Styles.buttonContainer,
            isPrimary ? Styles.disabled : undefined,
          ]}>
          <LinearGradient
            end={{ y: 0, x: 1 }}
            start={{ y: 0, x: 0 }}
            colors={activeTheme}
            style={Styles.makePrimary}>
            <TouchableOpacity
              disabled={isPrimary}
              style={Styles.primaryInner}
              onPress={PaymentMethods.setPrimary}>
              <Text style={Styles.primaryText}>Make Primary</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  },
  () => true,
);
