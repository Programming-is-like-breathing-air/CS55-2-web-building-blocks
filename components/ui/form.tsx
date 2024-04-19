import React from 'react';
import Theme from '../layout/componentTheme';

export function LoginForm() {
  return <Theme componentName="form" componentStyle="loginForm" componentReactView="LoginForm"/>;
}

export function SignupForm() {
  return <Theme componentName="form" componentStyle="signupForm" componentReactView="SignUpForm"/>;
}

export function CheckoutForm() {
  return <Theme componentName="form" componentStyle="checkoutForm" componentReactView="CheckoutForm" />;
}

export function ResponsiveForm() {
  return <Theme componentName="form" componentStyle="responsiveForm" componentReactView="ResponsiveForm"/>;
}

export function ContactusForm() {
  return <Theme componentName="form" componentStyle="contactusForm" componentReactView="ContactUsForm" />;
}

export function MultiStepForm() {
  return <Theme componentName="form" componentStyle="multiStepForm" />;
}
