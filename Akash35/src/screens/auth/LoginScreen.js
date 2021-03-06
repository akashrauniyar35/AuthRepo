import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LoginComp from '../../components/auth/LoginComp';
import Logo from '../../components/common/Logo';
import CardSection from '../../components/common/CartSection';

class LoginScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginComp />
				<CardSection>
					<Text style={styles.signupText}>Forgot your Password?</Text>
					<Text style={styles.ResetButton} onPress={() => this.props.navigation.navigate('resetPass')}>
						{' '}Reset
                        </Text>
				</CardSection>
				<CardSection>
					<Text style={styles.signup}>Don't have an account yet?</Text>
					<Text style={styles.signupButton} onPress={() => this.props.navigation.navigate('signup')}>
						{' '}Signup
                        </Text>
				</CardSection>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	signupText: {
		color: '#000000',
		fontSize: 16,
		marginTop: 25,
	},
	ResetButton: {
		color: '#000000',
		fontSize: 16,
		fontWeight: '500',
		marginTop: 25,

	},
	signupTextCont: {
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginBottom: '5%',
		flexDirection: 'row'
	},
	signup: {
		color: '#000000',
		fontSize: 16,
	},
	signupButton: {
		color: '#000000',
		fontSize: 16,
		fontWeight: '500',
	}
});

export default LoginScreen;