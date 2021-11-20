import React from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import UsersSummary from '../../features/UsersSummary/UsersSummary'
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';
import Section from '../../layout/Section/Section';


const Users = ({users}) =>(
  <Section>
    <Grid>
      <Row beetween="md">
        <PageTitle text='All users' />
        {Object.keys(users).map(item => (
          <UsersSummary key={item} {...users[item]} />
        ))}
      </Row>
    </Grid>
  </Section>
);

Users.propTypes = {
  users: PropTypes.objectOf(PropTypes.object),
};

export default Users;