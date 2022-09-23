import { View, Text } from "react-native";

import { Photographer as PhotographerType } from "../../../harcodedData";

import UserProfilePic from "../../common/UserProfilePic";

import styles from "./styles";

interface Props {
  data: PhotographerType;
}

const Photographer = ({
  data: {
    firstName,
    lastName,
    profilePicDominantColor,
    profilePicUrl,
    price,
    city,
    country,
    tagLine,
  },
}: Props) => {
  return (
    <View style={styles.main}>
      <UserProfilePic
        firstName={firstName}
        lastName={lastName}
        backgroundColor={profilePicDominantColor}
        profilePicUrl={profilePicUrl}
        size={120}
      />
      <View style={styles.infosContainer}>
        <Text style={styles.fullName}>
          {firstName} {lastName}
        </Text>
        <Text>{tagLine}</Text>
        <Text style={styles.location}>
          {city}, {country}
        </Text>
        <Text style={styles.price}>{price}€/jour</Text>
      </View>
    </View>
  );
};

export default Photographer;
