import React from 'react';
import FilterLink from '../containers/FilterLink';
import { Button, ButtonGroup } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <ButtonGroup className='container'>
    <FilterLink filter="SHOW_ALL">
      <Button className='btn-custom'>Show All</Button>
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      <Button className='btn-custom'>Show Active</Button>
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      <Button className='btn-custom'>Show Completed</Button>
    </FilterLink>
  </ButtonGroup>
)

export default Footer;
