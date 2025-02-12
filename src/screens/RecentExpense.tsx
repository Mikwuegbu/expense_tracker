import { Text } from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/expense_context';
import { getDateMinusDays } from '../util/date';

const RecentExpense = () => {
	const { expenses } = useContext(ExpenseContext);

	const recentExpenses = expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today);
		return expense.date > date7DaysAgo;
	});

	return (
		<ExpenseOutput expenses={recentExpenses} expensesPeriodName="Last 7 days" />
	);
};

export default RecentExpense;
