import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	Switch,
} from 'react-native';

export default function App() {
	const [value, setValue] = useState('');
	const [toggleValue, setToggleValue] = useState(false);

	const handleTextChange = newValue => {
		setValue(newValue);
	};

	const toggleSwitch = () => setToggleValue(previousState => !previousState);

	return (
		<View
			style={[
				styles.container,
				toggleValue ? { backgroundColor: '#000' } : { backgroundColor: '#fff' },
			]}
		>
			<Text
				style={[
					styles.header,
					toggleValue ? { color: '#fff' } : { color: '#000' },
				]}
			>
				Basic App
			</Text>
			<TextInput
				style={[
					styles.textInput,
					toggleValue
						? { color: '#fff', borderColor: '#fff' }
						: { color: '#000', borderColor: '#000' },
				]}
				value={value}
				onChangeText={val => handleTextChange(val)}
				placeholder='Enter any thing here...'
				clearTextOnFocus={true}
			/>
			<View style={styles.outputContainer}>
				<Text
					style={[
						styles.outputLabel,
						toggleValue ? { color: '#fff' } : { color: '#000' },
					]}
				>
					Output:
				</Text>
				<Text
					style={[
						styles.outputValue,
						toggleValue ? { color: '#fff' } : { color: '#000' },
					]}
				>
					{value}
				</Text>
			</View>
			<Button
				style={styles.clearBtn}
				disabled={!value}
				title='Clear Input'
				onPress={() => handleTextChange('')}
			/>
			<View style={styles.toggleBgContainer}>
				<Text
					style={[
						styles.toggleContainerLabel,
						toggleValue ? { color: '#fff' } : { color: '#000' },
					]}
				>
					Toggle Background Color:
				</Text>
				<Switch onValueChange={toggleSwitch} value={toggleValue} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 32,
		marginBottom: 20,
	},
	textInput: {
		borderWidth: 1,
		borderRadius: 8,
		width: '80%',
		height: 40,
		padding: 8,
	},
	outputContainer: {
		margin: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	outputValue: {
		marginLeft: 8,
	},
	clearBtn: {
		width: 200,
		height: 40,
		backgroundColor: 'black',
		fontSize: 24,
		borderWidth: 1,
		borderRadius: 8,
	},
	toggleContainerLabel: {
		fontSize: 14,
		marginRight: 20,
	},
	toggleBgContainer: {
		margin: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
