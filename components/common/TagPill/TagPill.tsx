import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";

import styles from "./styles";

interface Props {
  children: string;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const TagPill = ({
  children,
  style,
  active = false,
  onPress = () => {},
}: Props) => {
  return (
    <Pressable
      style={[styles.main, style, active && styles.mainActive]}
      onPress={onPress}
    >
      {/* To prevent an ugly seam between border and background of the same color in conjunction with border radius */}
      {!active && <View style={styles.border} />}
      <Text style={[styles.tag, styles.hashTag, active && styles.tagActive]}>
        #
      </Text>
      <Text style={[styles.tag, active && styles.tagActive]}>{children}</Text>
    </Pressable>
  );
};

export default TagPill;
