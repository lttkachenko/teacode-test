import React from 'react';

import { Container, Row, Col, ListGroup, InputGroup, InputGroupText, Input, Button } from 'reactstrap';

import { UserData } from "../../types";
import { useAppData } from '../../contexts';
import { UsersListItem } from "./users-list-item";

import search from './button-search.svg';
import clear from './button-clear.svg';
import './users-list.scss';

export const UsersList = () => {
  const { data, setData, isLoading } = useAppData();

  return (
    <Container className="users-list" fluid>
      <Row>
        <Col sm="12">
          <InputGroup className="filter" size="md">
            <InputGroupText>
              <img className="search" src={search} alt="search" />
            </InputGroupText>
            <Input />
            <Button>
              <img className="clear" src={clear} alt="clear" />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <ListGroup className="list" responsive>
            {data && data.map((item: UserData, index: number) => (
              <div key={index}>
                <UsersListItem {...item} />
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
