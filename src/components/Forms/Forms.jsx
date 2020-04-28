import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import axios from 'axios';
import _uniqueId from 'lodash/uniqueId';
import {
  StyledInput,
  StyledForm,
  Label,
  Wrap,
  StyledButton,
  SkillsButton,
  SkillsWrap,
} from '../../styled/FormsStyled';
import Error from '../Error/Error';
import ResponseError from '../Error/ResponseError';
import validationSchema from '../helpers/Yup';

export default class Forms extends Component {
  state = {
    skills: [],
    response: '',
  };

  addSkills = (skill, setFieldValue) => () => {
    const { skills } = this.state;
    if (skill === '') {
      return;
    }
    this.setState({
      skills: [{ skill, id: _uniqueId() }, ...skills],
    });
    setFieldValue('skills', '');
  };

  clearArrSkills = () => {
    this.setState({
      skills: [],
    });
  };

  renderSkills = (setFieldTouched, handleChange) => {
    const { skills } = this.state;
    return skills.map(({ skill, id }) => {
      return (
        <Field
          key={id}
          onChange={handleChange}
          value={skill}
          name="skills"
          id="skills"
          type="text"
          component={StyledInput}
        />
      );
    });
  };

  render() {
    const { response, skills } = this.state;
    return (
      <Formik
        initialValues={{
          name: '',
          password: '',
          repeatPassword: '',
          email: '',
          website: '',
          age: '',
          skills: '',
          acceptTerms: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const request = await axios({
            url: '/sign-up',
            baseURL: 'http://localhost:3001',
            method: 'post',
            transformRequest: [
              (data) => {
                return JSON.stringify(data);
              },
            ],
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            data: {
              name: values.name,
              password: values.password,
              repeatPassword: values.repeatPassword,
              email: values.email,
              website: values.website,
              age: values.age,
              skills,
            },
          });
          this.setState({
            response: request.data,
          });
          setSubmitting(true);
          setTimeout(() => {
            this.clearArrSkills();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          setFieldValue,
          handleSubmit,
          isSubmitting,
        }) => (
          <Wrap>
            <StyledForm onSubmit={handleSubmit}>
              <Label>
                Имя*:
                <Field
                  onChange={(event) => {
                    setFieldTouched('name');
                    handleChange(event);
                  }}
                  value={values.name}
                  name="name"
                  id="name"
                  type="text"
                  component={StyledInput}
                />
              </Label>
              <Error touched={touched.name} message={errors.name} />
              <Label>
                Пароль*:
                <Field
                  onChange={(event) => {
                    setFieldTouched('password');
                    handleChange(event);
                  }}
                  value={values.password}
                  name="password"
                  id="password"
                  type="password"
                  component={StyledInput}
                />
              </Label>
              <Error touched={touched.password} message={errors.password} />
              <Label>
                Подтвердение пароля*:
                <Field
                  onChange={(event) => {
                    setFieldTouched('repeatPassword');
                    handleChange(event);
                  }}
                  value={values.repeatPassword}
                  name="repeatPassword"
                  id="repeatPassword"
                  type="password"
                  component={StyledInput}
                />
              </Label>
              <Error touched={touched.repeatPassword} message={errors.repeatPassword} />
              <Label>
                Email*:
                <Field
                  onChange={(event) => {
                    setFieldTouched('email');
                    handleChange(event);
                  }}
                  value={values.email}
                  name="email"
                  id="email"
                  type="email"
                  component={StyledInput}
                />
              </Label>
              <Error response touched={touched.email} message={errors.email} />
              <ResponseError response={response} />
              <Label>
                Сайт:
                <Field
                  onChange={(event) => {
                    setFieldTouched('website');
                    handleChange(event);
                  }}
                  value={values.website}
                  name="website"
                  id="website"
                  type="text"
                  component={StyledInput}
                />
              </Label>
              <Error touched={touched.website} message={errors.website} />
              <Label>
                Возраст*:
                <Field
                  onChange={(event) => {
                    setFieldTouched('age');
                    handleChange(event);
                  }}
                  value={values.age}
                  name="age"
                  id="age"
                  type="text"
                  component={StyledInput}
                />
              </Label>
              <Error touched={touched.age} message={errors.age} />
              <Label>
                Навыки:
                <SkillsWrap>
                  <Field
                    onChange={handleChange}
                    value={values.skills}
                    name="skills"
                    id="skills"
                    type="text"
                    component={StyledInput}
                  />
                  {this.renderSkills(setFieldTouched, handleChange)}
                </SkillsWrap>
                <SkillsButton onClick={this.addSkills(values.skills, setFieldValue)}>
                  Добавить
                </SkillsButton>
              </Label>
              <Label>
                Принимаю условия:
                <Field
                  name="acceptTerms"
                  onChange={handleChange}
                  id="acceptTerms"
                  defaultChecked
                  type="checkbox"
                  component={StyledInput}
                />
              </Label>
              <Error touched="acceptTerms" message={errors.acceptTerms} />
              <StyledButton disabled={isSubmitting} htmlType="submit">
                Отправить
              </StyledButton>
            </StyledForm>
          </Wrap>
        )}
      </Formik>
    );
  }
}
