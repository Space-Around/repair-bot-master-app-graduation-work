import { HomeScreen } from "../containers/HomeScreen";
import { OrderHistoryScreen } from "../containers/OrderHistoryScreen";
import { ProfileScreen } from "../containers/ProfileScreen";

const HomeIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
);

const ProfileIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
);

const HistoryIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
);

export default function NavigationBottom() {
    return(
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
            <Tab.Screen name="History" component={OrderHistoryScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}