import AppleIdIcon from "../../../assets/svg/icons/AppleIdIcon";
import FacebookIcon from "../../../assets/svg/icons/FacebookIcon";
import GoogleIcon from "../../../assets/svg/icons/GoogleIcon";
import RedditIcon from "../../../assets/svg/icons/RedditIcon";
import TwitterIcon from "../../../assets/svg/icons/TwitterIcon";

export const EXTERNAL_LOGIN_ICONS = [
    {
        name: 'facebook',
        icon: FacebookIcon,
        onPress: () => console.log('Login With Facebook')
    },
    {
        name: 'twitter',
        icon: TwitterIcon,
        onPress: () => console.log('Login With Twitter')
    },
    {
        name: 'reddit',
        icon: RedditIcon,
        onPress: () => console.log('Login With Reddit')
    },    
    {
        name: 'google',
        icon: GoogleIcon,
        onPress: () => console.log('Login With Google')
    },
    {
        name: 'facebook2',
        icon: AppleIdIcon,
        onPress: () => console.log('Login With Apple'),
        fullWidth: true,
    }
]
