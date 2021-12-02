import React from 'react';
import Button from 'react-bootstrap/Button';
import Page from '../../views/Page/Page'
import PropTypes from 'prop-types';
import Data from '../../../data/users.json'

class SortButton extends React.Component{
  render(){

    function Sort(props) {
      // const {Data} = props;
      let sortedProducts = [...Data];
      sortedProducts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return (
    <Page>

    </Page>
  )
    }

  return(
    <Button
      variant="primaty"
      onClick={Sort}
    >button</Button>
  )

  }
}
SortButton.propTypes = {
  Data: PropTypes.string,
}
export default SortButton;