import { memo, useRef } from "react";
import type { TextInput } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ExploaderModal } from "Components/ExploaderModal";
import { Input } from "Components/Input";
import { Modals, useModals } from "State/Modals";
import { CoreTheme } from "Themes/Core";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const AddIssueModal = memo(function AddIssueModal(_: Propless) {
  const title = useRef<TextInput>(null);
  const description = useRef<TextInput>(null);
  const open = useModals(state => state.addIssue);

  return (
    <ExploaderModal visible={open} close={Modals.closeAddIssue}>
      <Text style={Styles.title}>File an Issue</Text>
      <Text style={Styles.subTitle}>
        The issues you file will notify a staff member
      </Text>
      <Input nodeRef={title} placeholder="Title" style={Styles.titleInput} />
      <Input
        multiline
        nodeRef={description}
        placeholder="Description"
        style={Styles.descriptionInput}
      />
      <View style={Styles.button}>
        <LinearGradient
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={Styles.touchable}
          colors={CoreTheme.UI_GRADIENT_BRIGHT}>
          <TouchableOpacity style={Styles.touchableInner}>
            <Text style={Styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ExploaderModal>
  );
});
