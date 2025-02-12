import { StyleSheet, View } from 'react-native';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const ExpenseOutput = ({ expenses, expensesPeriodName }) => {
	return (
		<View style={styles.container}>
			<ExpenseSummary expenses={expenses} periodName={expensesPeriodName} />
			<ExpensesList expenses={expenses} />
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
