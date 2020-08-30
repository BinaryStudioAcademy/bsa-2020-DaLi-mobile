import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import {Input, Button} from '../shared';
import styles from './styles';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const LoginView = props => {
  const {onLoginSubmit} = props;

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => onLoginSubmit(values)}
      validationSchema={LoginSchema}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        dirty,
        handleSubmit,
      }) => (
        <View style={styles.loginContainer}>
          <Title style={styles.loginTitle}>Sign in to DaLi</Title>
          <Input
            label="E-mail"
            placeholder="E-mail"
            isError={touched.email && errors.email}
            errors={errors.email}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
          />
          <Input
            label="Password"
            placeholder="Password"
            isError={touched.password && errors.password}
            errors={errors.password}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />
          <Button
            value="Sign In"
            onPress={handleSubmit}
            disabled={!(isValid && dirty)}
          />
        </View>
      )}
    </Formik>
  );
};

LoginView.propTypes = {
  onLoginSubmit: PropTypes.func,
};

export default LoginView;
