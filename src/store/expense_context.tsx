import { createContext, ReactNode, useReducer } from 'react';

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
		date: new Date('2025-02-10'),
	},
	{
		id: 'e3',
		description: 'some Bananas',
		amount: 19.99,
		date: new Date('2025-02-10'),
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
		date: new Date('2025-02-10'),
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

export const ExpenseContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: ({ id }) => {},
	updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload }, ...state];
		case 'DELETE_EXPENSE':
			return state.filter((expense) => expense.id) !== action.payload;
		case 'UPDATE_EXPENSE':
			const updatableExpenseIndex = state.findIndex(
				(expense) => expense.id === action.payload.id
			);
			const updatableExpense = state[updatableExpenseIndex];
			const updateItem = { ...updatableExpense, ...action.payload.data };
			const updatedExpenseData = [...state];
			updatableExpense[updatableExpenseIndex] = updateItem;
			return updatedExpenseData;
		default:
			return state;
	}
};

export const ExpenseContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

	const addExpenseHandler = (expenseData) => {
		dispatch({ type: 'ADD_EXPENSE', payload: expenseData });
	};

	const deleteExpenseHandler = (expenseId) => {
		dispatch({ type: 'DELETE_EXPENSE', payload: expenseId });
	};

	const updateExpenseHandler = (expenseId, updatedExpenseData) => {
		dispatch({
			type: 'UPDATE_EXPENSE',
			payload: { ...updatedExpenseData, id: expenseId },
		});
	};

	const value = {
		expenses: expensesState,
		addExpense: addExpenseHandler,
		deleteExpense: deleteExpenseHandler,
		updateExpense: updateExpenseHandler,
	};

	return (
		<ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
	);
};
