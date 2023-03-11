import React, { PureComponent } from 'react';

type MyPropsButton = {
  text: string;
  classButton: string;
};

export default class Button extends PureComponent<MyPropsButton> {
  render() {
    const { text, classButton } = this.props;
    return (
      <button className={classButton} type="button">
        {text}
      </button>
    );
  }
}
