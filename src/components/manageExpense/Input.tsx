import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface InputProps {
	label: string;
	textInputConfig: TextInputProps;
}

const Input = ({ label, textInputConfig }: InputProps) => {
	const inputStyles = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	return (
		<View className="mb-4">
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.input} {...textInputConfig} />
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginBottom: 4,
		marginVertical: 16,
	},
	input: {
		fontSize: 18,
		backgroundColor: GlobalStyles.colors.primary100,
		color: GlobalStyles.colors.primary700,
		padding: 6,
		borderRadius: 6,
	},
	label: {
		color: GlobalStyles.colors.primary100,
		fontSize: 12,
		marginBottom: 4,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: 'top',
	},
});
