import { StyleSheet, View } from 'react-native';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A pair of the following items',
		amount: 799.99,
		date: new Date('2022-07-15'),
	},
	{
		id: 'e2',
		description: 'New laptop',
		amount: 1299.99,
		date: new Date('2022-07-01'),
	},
	{
		id: 'e3',
		description: 'some Bananas',
		amount: 19.99,
		date: new Date('2022-06-20'),
	},
	{
		id: 'e4',
		description: 'New phone',
		amount: 899.99,
		date: new Date('2022-06-05'),
	},
	{
		id: 'e5',
		description: 'New headphones',
		amount: 149.99,
		date: new Date('2022-05-25'),
	},
	{
		id: 'e6',
		description: 'New shoes',
		amount: 129.99,
		date: new Date('2022-05-10'),
	},
	{
		id: 'e7',
		description: 'New hat',
		amount: 49.99,
		date: new Date('2022-04-25'),
	},
	{
		id: 'e8',
		description: 'New wallet',
		amount: 79.99,
		date: new Date('2022-04-10'),
	},
	{
		id: 'e9',
		description: 'New backpack',
		amount: 49.99,
		date: new Date('2022-03-25'),
	},
	{
		id: 'e10',
		description: 'New jeans',
		amount: 149.99,
		date: new Date('2022-03-10'),
	},
];

const ExpenseOutput = ({ expenses, expensesPeriodName }) => {
	return (
		<View style={styles.container}>
			<ExpenseSummary
				expenses={DUMMY_EXPENSES}
				periodName={expensesPeriodName}
			/>
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
};

export default ExpenseOutput;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
		flex: 1,
	},
});
