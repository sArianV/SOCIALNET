import { View } from "react-native";
import NavbarLogoMedium from "../../../assets/svg/NavbarLogoMedium";

const NavbarBigLogo = () => {
    return (
        <View 
            width="100%" 
            display="flex"
            alignItems="center"  
            style={{
                marginLeft:-10,
            }}      
        >
            <NavbarLogoMedium />
        </View>
    );
}

export default NavbarBigLogo;
