import { ScrollView, StyleSheet, Text, View } from "react-native";
import HomeCard from "../../components/HomeCard/HomeCard";

const HomeScreen = () => {
  return (
    <ScrollView fles={1}>
      <View style={styles.container}>
        {mockData.map(({ id }) => (
          <HomeCard key={`HomeScreenCard-${id}`} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
});

const mockData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
