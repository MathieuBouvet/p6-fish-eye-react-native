import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";

import useSelection from "../../hooks/useSelection";
import TagSelector from "../../components/Home/TagSelector";

import { allTags } from "../../harcodedData";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const [selectedTags, toggleTag] = useSelection();
  return (
    <View style={styles.main}>
      <TagSelector
        allTags={allTags}
        selectedTags={selectedTags}
        onTagPressed={toggleTag}
      />
      <Text style={styles.title}>Home screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default Home;
