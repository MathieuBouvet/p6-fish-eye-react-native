import { View, Text, Image } from "react-native";

import { getInitials } from "../../../utils/getInitials";
import { isDarkColor } from "../../../utils/isDarkColor";

import styles from "./styles";

interface Props {
  firstName: string;
  lastName: string;
  profilePicUrl: string | null;
  backgroundColor?: string;
  size?: number;
}

const UserProfilePic = ({
  firstName,
  lastName,
  profilePicUrl,
  backgroundColor = "#ffffff",
  size = 50,
}: Props) => {
  return (
    <View
      style={[
        styles.main,
        { width: size, height: size, backgroundColor, borderRadius: size },
      ]}
    >
      <Text
        style={{
          fontSize: size / 2.2,
          color: isDarkColor(backgroundColor) ? "white" : "black",
        }}
      >
        {getInitials({ firstName, lastName })}
      </Text>
      {profilePicUrl != null && (
        <Image
          source={{ uri: profilePicUrl }}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size },
          ]}
        />
      )}
    </View>
  );
};

export default UserProfilePic;
