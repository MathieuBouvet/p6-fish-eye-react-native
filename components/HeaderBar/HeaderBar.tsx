import { Image, View, Text, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import logo from "../../assets/fisheye-logo.png";
import styles from "./styles";

const HeaderBar = ({
  options,
  route,
  back,
  navigation,
}: NativeStackHeaderProps) => {
  return (
    <View style={[styles.main, back == null && styles.withLeftPadding]}>
      {back != null && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Pressable>
      )}
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.title}>{options.title ?? route.name}</Text>
    </View>
  );
};

export default HeaderBar;
