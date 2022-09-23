import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";

import useSelection from "../../hooks/useSelection";
import TagSelector from "../../components/Home/TagSelector";
import PhotographerList from "../../components/Home/PhotographerList";

import { photographers } from "../../harcodedData";
import { allTags } from "../../harcodedData";

import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({}: Props) => {
  const [selectedTags, toggleTag] = useSelection();
  const selectedPhotographer =
    Object.values(selectedTags).length > 0
      ? photographers.filter((photographer) =>
          photographer.tags.some((tag) => selectedTags[tag])
        )
      : photographers;
  return (
    <View style={styles.main}>
      <TagSelector
        allTags={allTags}
        selectedTags={selectedTags}
        onTagPressed={toggleTag}
      />
      <PhotographerList photographers={selectedPhotographer} />
    </View>
  );
};

export default Home;
