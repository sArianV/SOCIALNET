import { StyleSheet, Text, View } from "react-native";
import SkeletonLoader from "expo-skeleton-loader";
import { CARD_ICONS } from "./cardIcons";
const HomeCard = ({ title, description, image, links }) => {
  const loading = true;
  return (
    <SkeletonLoader
      duration={1000}
      style={styles.container}
      boneColor="#F4F4F4"
      highlightColor="#DADADA"
    >
      <SkeletonLoader.Container style={styles.imagePreview}>
        {loading ? (
          <SkeletonLoader.Item style={{ width: "100%", height: "100%" }} />
        ) : (
          <Text> Image loaded</Text>
        )}
      </SkeletonLoader.Container>

      {loading ? (
        <SkeletonLoader.Container style={styles.content}>
          <SkeletonLoader.Item
            style={{ width: 80, height: 24, marginBottom: 8, ...styles.rounded }}
          />
          <SkeletonLoader.Item
            style={{ width: "100%", height: 16, ...styles.rounded }}
          />
          <SkeletonLoader.Item
            style={{ width: "90%", height: 16, ...styles.rounded }}
          />
          <SkeletonLoader.Item
            style={{ width: "45%", height: 16, ...styles.rounded }}
          />
          <SkeletonLoader.Item
            style={{ width: "40%", height: 16, ...styles.rounded }}
          />
        </SkeletonLoader.Container>
      ) : (
        <Text> content loaded</Text>
      )}

      {loading ? (
        <SkeletonLoader.Container style={styles.buttonGroup}>
          <SkeletonLoader.Item
            style={{ height: 24, width: 45, ...styles.rounded }}
          />
          <SkeletonLoader.Item
            style={{ height: 24, width: 45, ...styles.rounded }}
          />
          <SkeletonLoader.Item
            style={{ height: 24, width: 45, ...styles.rounded }}
          />
          <SkeletonLoader.Item
            style={{ height: 24, width: "100%", ...styles.rounded }}
          />
        </SkeletonLoader.Container>
      ) : (
        <Text> buttonsLoaded</Text>
      )}

      <SkeletonLoader
        style={styles.statsGroup}
        duration={1000}
        boneColor="#F4F4F4"
        highlightColor="#DADADA"
      >
        {CARD_ICONS.map(({ id, component: Icon }) => (
          <SkeletonLoader.Container style={styles.itemStats} key={id}>
            <Icon />
            {loading ? (
              <SkeletonLoader.Item
                style={{ height: 16, width: 24, ...styles.rounded }}
              />
            ) : (
              <Text> 9 </Text>
            )}
          </SkeletonLoader.Container>
        ))}
      </SkeletonLoader>
    </SkeletonLoader>
  );
};

export default HomeCard;

const styles = {
  container: {
    elevation: 2,
    width: "100%",
    flexDirection: "column",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "white",
    paddingBottom: 24,
  },
  imagePreview: {
    width: "100%",
    height: 188,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "100%",
  },
  buttonGroup: {
    paddingHorizontal: 32,
    display: "flex",
    flexDirection: "row",
    gap: 4,
    rowGap: 12,
    flexWrap: "wrap",
  },
  rounded: {
    borderRadius: 8,
  },
  itemStats: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  statsGroup: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 32,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};
