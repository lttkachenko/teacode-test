import React, {SetStateAction} from 'react';

import { Container, Row, Col, ListGroup, InputGroup, InputGroupText, Input, Button } from 'reactstrap';

import { UserData } from "../../types";
import { useAppData } from '../../contexts';
import { Loader } from '../loader';
import { UsersListItem } from "./users-list-item";

import search from './button-search.svg';
import clear from './button-clear.svg';
import './users-list.scss';

export const UsersList = () => {
  const { data, isLoading } = useAppData();
  const [records, setRecords] = React.useState(data?.slice());
  const [filter, setFilter] = React.useState('');
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleClear = React.useCallback(() => {
    setFilter('');
  }, []);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }, []);

  const handleSelect = React.useCallback((id: number) => {
    const selection = selected;
    if (selected.includes(id)) {
      selection.splice(selected.indexOf(id), 1);
    } else {
      selection.push(id);
    }
    setSelected(selection);
    console.log('Current selection: ', selection);
  }, []);

  React.useEffect(() => {
    if (!filter.length) {
      setRecords(data?.slice());
    } else {
      const timer = setTimeout(() => {
        const lcFilter = filter.toLocaleLowerCase();
        const filtered = data && data.filter((item: UserData) => {
          return item.first_name.toLocaleLowerCase().includes(lcFilter) || item.last_name.toLocaleLowerCase().includes(lcFilter);
        });
        setRecords(filtered);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data, filter]);

  return (
    <Container className="users-list" fluid>
      <Row>
        <Col sm="12">
          <InputGroup className="filter" size="md">
            <InputGroupText>
              <img className="search" src={search} alt="search" />
            </InputGroupText>
            <Input type="text" name="search" value={filter} onChange={handleChange} />
            <Button onClick={handleClear}>
              <img className="clear" src={clear} alt="clear" />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          {isLoading ? (
            <Loader count={6} />
          ) : (
            <ListGroup className="list">
              {records?.map((item: UserData, index: number) => (
                <div key={index}>
                  <UsersListItem isSelected={selected.includes(item.id)} onClick={handleSelect} {...item} />
                </div>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};
