import React from 'react';

import { ListGroupItem, InputGroup, InputGroupText, Input, Label } from 'reactstrap';

import { UserData } from "../../types";

export const UsersListItem = ({ avatar, first_name, last_name, isSelected }: UserData) => {
  return (
    <ListGroupItem className="list-item" tag="button" active={isSelected} action>
      <InputGroup size="md">
        <InputGroupText>
          <img src={avatar} className="avatar" alt="avatar" />
        </InputGroupText>
        {/*<Input></Input>*/}
        <Label className="form-control" check>{first_name} {last_name}</Label>
        <InputGroupText>
          <Input type="checkbox" checked={isSelected} />
        </InputGroupText>
      </InputGroup>
    </ListGroupItem>
  );
};
