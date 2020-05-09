import { observable, action } from 'mobx';
import mongoApi from "../api/mongoApi";

export default class ApplicationStore {
  // constructor(initialState) {
  //   if (initialState) {
  //     // this.cookie = initialState.cookie;
  //     // this.hasNotification = initialState.hasNotification;
  //     // this.isAdmin = initialState.isAdmin;
  //     // this.systemFeatures = initialState.systemFeatures;
  //     // this.systemFeaturesAdminMode = initialState.systemFeaturesAdminMode;
  //   }
  // }

  @observable formData = {
      title: '',
      director: '',
  };

  @action changeFormData = (input, name) => this.formData[name] = input;

  @action submitData = () => {
      console.log('onSubmit', this.formData);
      mongoApi.sendMovie({ title: this.formData.title, director: this.formData.director });
  }
}
