import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx';
import ApplicationStore from '../stores/application';

const StyledForm = styled.form`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  input {
    border: 1px solid #DADADA;
    height: 24px;
    padding: 4px;
    border-radius: 4px;
    outline: none;
    width: 306px;
  }
  button {
    padding-top: 10px;
    padding-bottom: 24px;
    background-color: #03fcd3;
    border: none;
    border-radius: 4px;
    height: 24px;
    width: 316px;
    margin-top: 16px;
    outline: none;
  }
`;

@inject('application')
@observer
class Form extends Component {
    render () {
        const { application } = this.props;
        console.log(mobx.toJS(application.formData));
        return (
            <StyledForm>
              <label htmlFor="title">Movie title</label>
              <input type="text" id="title" onChange={e => application.changeFormData(e.target.value, "title")} />
              <label htmlFor="director">Director</label>
              <input type="text" id="director" onChange={e => application.changeFormData(e.target.value, "director")} />
              <button type="submit" onClick={e => {e.preventDefault(); application.submitData()}}>submit</button>
            </StyledForm>
        )
    }
}

export default Form;

// decorate(Form, {
//     formData: observable,
//     changeFormData: action
// });
