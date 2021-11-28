import React from 'react';
import Button from 'react-bootstrap/Button';
import Page from '../../views/Page/Page'
import PropTypes from 'prop-types';

class SortButton extends React.Component{
  render(){

    function Sort() {
      const { post } = this.props;
  let sortedProducts = [...post];
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
Button.propTypes = {
  post: PropTypes.string,
}
export default SortButton;