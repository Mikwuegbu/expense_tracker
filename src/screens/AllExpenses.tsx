import { Text } from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/expense_context';

const AllExpenses = () => {
	const { expenses } = useContext(ExpenseContext);
	return (
		<ExpenseOutput
			fallbackText="No registered Expenses"
			expenses={expenses}
			expensesPeriodName="Total"
		/>
	);
};

export default AllExpenses;
