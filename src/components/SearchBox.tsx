import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from './Button';
import Input from './Input';

type MyProps = {
  value?: string;
};
type MyState = {
  myValue: string;
};

export default class SearchBox extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      myValue: localStorage.getItem('search') || '',
    };
  }

  componentWillUnmount(): void {
    const { myValue } = this.state;
    localStorage.setItem('search', myValue);
  }

  saveInput(data: string): void {
    this.setState({ myValue: data });
  }

  render() {
    const { myValue } = this.state;
    return (
      <div className="wrapper-search-module">
        <div className="wrapper-search">
          <div className="search-icon">
            <FaSearch />
          </div>
          <Input
            valueInput={myValue}
            typeInput="search"
            classInput="search-box"
            placeholder="search ..."
            handleChange={(data) => this.saveInput(data)}
          />
          <Button text="search" classButton="search-btn" />
        </div>
      </div>
    );
  }
}
