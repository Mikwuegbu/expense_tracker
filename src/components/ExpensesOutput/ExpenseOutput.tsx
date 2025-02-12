import { StyleSheet, Text, View } from 'react-native';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const ExpenseOutput = ({ expenses, expensesPeriodName, fallbackText }) => {
	let content = (
		<Text className="text-white text-center py-4 font-medium text-lg">
			{fallbackText}
		</Text>
	);

	if (expenses.length > 0) {
		content = (
			<View>
				<ExpensesList expenses={expenses} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ExpenseSummary expenses={expenses} periodName={expensesPeriodName} />
			{content}
		</View>
	);
};

export default ExpenseOutput;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingBottom: 0,
		paddingVertical: 14,
		backgroundColor: GlobalStyles.colors.primary700,
		flex: 1,
	},
});
