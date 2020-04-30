import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import axios from 'axios';
import _uniqueId from 'lodash/uniqueId';
import { Input } from 'antd';
import {
  StyledForm,
  Label,
  Wrap,
  StyledButton,
  SkillsButton,
  SkillsWrap,
  SpanBtn,
  SymSpan,
} from '../../styled/FormsStyled';
import Error from '../Error/Error';
import ResponseError from '../Error/ResponseError';
import validationSchema from '../helpers/Yup';

export default class Forms extends Component {
  state = {
    skills: [],
    response: '',
    loading: false,
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

  addSkillsEnter = (skill, setFieldValue) => (event) => {
    if (event.key === 'Enter') {
      this.addSkills(skill, setFieldValue)();
    }
  };

  clearArrSkills = () => {
    this.setState({
      skills: [],
    });
  };

  renderSkills = (values) => {
    const { skills } = this.state;
    return skills.map(({ skill, id }) => {
      return (
        <Field
          key={id}
          defaultValue={skill}
          value={values.skills}
          name="skills"
          id="skills"
          type="text"
          component={Input}
        />
      );
    });
  };

  render() {
    const { response, skills, loading } = this.state;
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
        onSubmit={async (values, { resetForm }) => {
          this.setState({
            loading: true,
          });
          const request = axios.create('/sign-up', {
            baseURL: 'http://localhost:3001',
            method: 'post',
            data: {
              name: values.name,
              password: values.password,
              repeatPassword: values.repeatPassword,
              email: values.email,
              website: values.website,
              age: values.age,
              skills: skills.map((el) => el.skill),
            },
          });
          if (request.statusText === 'OK') {
            this.setState({
              loading: false,
              response: request.data,
            });
          }
          console.log(request);
          if (request.data === 'successfully') {
            this.clearArrSkills();
            resetForm();
          }
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
                Имя<SymSpan>*</SymSpan>
                <Field
                  onChange={(event) => {
                    setFieldTouched('name');
                    handleChange(event);
                  }}
                  value={values.name}
                  name="name"
                  id="name"
                  type="text"
                  component={Input}
                />
              </Label>
              <Error touched={touched.name} message={errors.name} />
              <Label>
                Пароль<SymSpan>*</SymSpan>
                <Field
                  onChange={(event) => {
                    setFieldTouched('password');
                    handleChange(event);
                  }}
                  value={values.password}
                  name="password"
                  id="password"
                  type="password"
                  component={Input}
                />
              </Label>
              <Error touched={touched.password} message={errors.password} />
              <Label>
                Подтверждение пароля<SymSpan>*</SymSpan>
                <Field
                  onChange={(event) => {
                    setFieldTouched('repeatPassword');
                    handleChange(event);
                  }}
                  value={values.repeatPassword}
                  name="repeatPassword"
                  id="repeatPassword"
                  type="password"
                  component={Input}
                />
              </Label>
              <Error touched={touched.repeatPassword} message={errors.repeatPassword} />
              <Label>
                Email<SymSpan>*</SymSpan>
                <Field
                  onChange={(event) => {
                    setFieldTouched('email');
                    handleChange(event);
                  }}
                  value={values.email}
                  name="email"
                  id="email"
                  type="email"
                  component={Input}
                />
              </Label>
              <Error response touched={touched.email} message={errors.email} />
              <Label>
                Сайт
                <Field
                  onChange={(event) => {
                    setFieldTouched('website');
                    handleChange(event);
                  }}
                  value={values.website}
                  name="website"
                  id="website"
                  type="text"
                  component={Input}
                />
              </Label>
              <Error touched={touched.website} message={errors.website} />
              <Label>
                Возраст<SymSpan>*</SymSpan>
                <Field
                  onChange={(event) => {
                    setFieldTouched('age');
                    handleChange(event);
                  }}
                  value={values.age}
                  name="age"
                  id="age"
                  type="text"
                  component={Input}
                />
              </Label>
              <Error touched={touched.age} message={errors.age} />
              <Label>
                Навыки
                <SkillsWrap>
                  <Field
                    onChange={handleChange}
                    onKeyDown={this.addSkillsEnter(values.skills, setFieldValue)}
                    value={values.skills}
                    name="skills"
                    id="skills"
                    type="text"
                    component={Input}
                  />
                  {this.renderSkills(values.skills)}
                </SkillsWrap>
                <SkillsButton onClick={this.addSkills(values.skills, setFieldValue)}>
                  Добавить
                </SkillsButton>
              </Label>
              <Label>
                Принимаю условия
                <Field
                  name="acceptTerms"
                  onChange={handleChange}
                  id="acceptTerms"
                  defaultChecked
                  type="checkbox"
                  component={Input}
                />
              </Label>
              <Error touched message={errors.acceptTerms} />
              <ResponseError response={response} />
              <StyledButton
                type="ghost"
                loading={loading}
                disabled={isSubmitting}
                htmlType="submit"
              >
                <SpanBtn>Отправить</SpanBtn>
              </StyledButton>
            </StyledForm>
          </Wrap>
        )}
      </Formik>
    );
  }
}
