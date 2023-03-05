import { StyleSheet, View } from "react-native";
import NavbarLogoSmall from "../../../assets/svg/NavbarLogoSmall";
import { NAVBAR_ICONS } from "./NavbarIcons";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <NavbarLogoSmall />
      </View>
      <View style={styles.buttons}>
        {NAVBAR_ICONS.map(({ id, component: Icon }) => {
          return <Icon key={id} />;
        })}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: -10,
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    marginLeft: 10,
  },
  buttons: {
    marginRight: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 26,
  },
});
