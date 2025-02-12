import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/ui/IconButton';
import { ExpenseContextProvider } from './store/expense_context';
import '../global.css';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				headerTintColor: 'white',
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
				headerRight: ({ tintColor }) => (
					<IconButton
						icon="add"
						size={24}
						color={tintColor}
						onPress={() => {
							navigation.navigate('ManageExpense');
						}}
					/>
				),
			})}
		>
			<BottomTabs.Screen
				name="RecentExpenses"
				component={RecentExpense}
				options={{
					title: 'Recent Expenses',
					tabBarLabel: 'Recent',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="hourglass" size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="AllExpense"
				component={AllExpenses}
				options={{
					title: 'All Expenses',
					tabBarLabel: 'All',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="calendar" size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};
const App = () => {
	return (
		<>
			<StatusBar barStyle="default" />
			<ExpenseContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
							headerTintColor: 'white',
						}}
					>
						<Stack.Screen
							name="ExpensesOverView"
							component={ExpensesOverview}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="ManageExpense"
							component={ManageExpense}
							options={{
								presentation: 'modal',
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ExpenseContextProvider>
		</>
	);
};

export default App;
