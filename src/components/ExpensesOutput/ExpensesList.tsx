import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = (itemData) => {
	return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default ExpensesList;
