import { PureComponent } from 'react';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <h2>Home</h2>
        <SearchBox />
        <Cards />
      </>
    );
  }
}
