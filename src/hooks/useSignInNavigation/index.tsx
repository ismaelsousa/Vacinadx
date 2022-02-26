import {useNavigation} from '@react-navigation/core';

const useSignInNavigation = () => {
  const navigation = useNavigation<SignInStackNavigatorProp>();
  return navigation;
};

export default useSignInNavigation;
