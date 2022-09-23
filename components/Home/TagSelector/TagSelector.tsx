import {
  View,
  Pressable,
  NativeModules,
  LayoutAnimation,
  Platform,
} from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

import TagPill from "../../common/TagPill";

import styles from "./styles";

const { UIManager } = NativeModules;

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {
  allTags: string[];
  selectedTags: Record<string, true>;
  onTagPressed: (tag: string) => void;
}

const TagSelector = ({ allTags, selectedTags, onTagPressed }: Props) => {
  const [opened, setOpened] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpened((s) => !s);
  };

  return (
    <View style={[styles.main, opened && styles.mainOpened]}>
      {opened ? (
        <>
          <View style={styles.tagContainer}>
            {allTags.map((tag) => (
              <TagPill
                key={tag}
                style={styles.tag}
                onPress={() => onTagPressed(tag)}
                active={selectedTags[tag]}
              >
                {tag}
              </TagPill>
            ))}
          </View>
          <Pressable
            style={[styles.button, styles.closeButton]}
            onPress={toggle}
          >
            <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
          </Pressable>
        </>
      ) : (
        <Pressable
          style={[styles.button, styles.filterButton]}
          onPress={toggle}
        >
          <FontAwesomeIcon icon={faFilter} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};

export default TagSelector;
