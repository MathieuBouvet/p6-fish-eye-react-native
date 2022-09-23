import { ScrollView } from "react-native";

import { Photographer as PhotographerType } from "../../../harcodedData";

import Photographer from "../Photographer";

import styles from "./styles";

interface Props {
  photographers: PhotographerType[];
}

const PhotographerList = ({ photographers }: Props) => {
  return (
    <ScrollView
      style={styles.main}
      contentContainerStyle={{
        paddingBottom: 22,
      }}
    >
      {photographers.map((photographer) => (
        <Photographer key={photographer.id} data={photographer} />
      ))}
    </ScrollView>
  );
};

export default PhotographerList;
