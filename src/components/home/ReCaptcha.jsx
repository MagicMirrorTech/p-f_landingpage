import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-v3'

class ReCaptchaC extends Component {

  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }

  render() {
    return (
      <div>

        <ReCaptcha
            sitekey="6Lc6M_EUAAAAALMOvYFn6wmWvkApMbFyHHepwEpO"
            action='social'
            verifyCallback={this.verifyCallback}
       />
      </div>
    );
  };
};

export default ReCaptchaC;