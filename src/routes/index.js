import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LandingScreen from '../screens/LangingScreen'
import LandingScreen2 from '../screens/LangingScreen/LandingScreen'
import GettingStartedEmailScreen from '../screens/GettingStarted/GettingStartedEmailScreen'
import GettingStartedPhoneScreen from '../screens/GettingStarted/GettingStartedPhoneScreen'
import GettingStartedEmployeeIdScreen from '../screens/GettingStarted/GettingStartedEmployeeIdScreen'
import VerifyIdentity from '../screens/VerifyIdentityScreen/VerifyIdentityScreen'
import VerificationCodeScreen from '../screens/VerificationCodeScreen.js/Index'
import VerificationCodeEmailScreen from '../screens/VerificationCodeScreen.js/VerificationCodeEmailScreen'
import PasswordSetupScreen from '../screens/PasswordSetupScreen.js'
import WelcomeScreen from '../screens/WelcomeScreen'
import HelpScreen from '../screens/HelpScreen'
import LoginScreen from '../screens/LoginScreen'

export default function Routes() {
  return (
    <Router>
      <Scene key="root">
         <Scene key="landingScreen" component={LandingScreen} title="LandingScreen" initial={true} hideNavBar={true} />
         <Scene key="landingScreen2" component={LandingScreen2} title="LandingScreen2" hideNavBar={true} />
         <Scene key="gettingStartedEmailScreen" component={GettingStartedEmailScreen} title="GettingStartedEmailScreen" hideNavBar={true} />
         <Scene key="gettingStartedPhoneScreen" component={GettingStartedPhoneScreen} title="GettingStartedPhoneScreen" hideNavBar={true} />
         <Scene key="gettingStartedEmployeeIdScreen" component={GettingStartedEmployeeIdScreen} title="GettingStartedEmployeeIdScreen" hideNavBar={true} />
         <Scene key="verifyIdentify" component={VerifyIdentity} title="VerifyIdentity" hideNavBar={true} />
         <Scene key="verificationCodeScreen" component={VerificationCodeScreen} title="VerificationCodeScreen" hideNavBar={true} />
         <Scene key="verificationCodeEmailScreen" component={VerificationCodeEmailScreen} title="VerificationCodeEmailScreen" hideNavBar={true} />
         <Scene key="passwordSetupScreen" component={PasswordSetupScreen} title="PasswordSetupScreen" hideNavBar={true} />
         <Scene key="welcomeScreen" component={WelcomeScreen} title="WelcomeScreen" hideNavBar={true} />
         <Scene key="helpScreen" component={HelpScreen} title="HelpScreen" hideNavBar={true} />
         <Scene key="loginScreen" component={LoginScreen} title="LoginScreen" hideNavBar={true} />
      </Scene>
   </Router>
  )
}