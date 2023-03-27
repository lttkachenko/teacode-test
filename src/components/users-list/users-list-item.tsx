import React, {SetStateAction} from 'react';

import { ListGroupItem, InputGroup, InputGroupText, Input, Label } from 'reactstrap';

import { UserData } from "../../types";

export interface iUserListItemProps extends UserData {
  onClick: (id: number) => void;
}

export const UsersListItem = ({ id, avatar, first_name, last_name, isSelected, onClick }: iUserListItemProps) => {
const [isActive, setIsActive] = React.useState(false);

  const handleChange = React.useCallback(() => {
    onClick(id);
    setIsActive(!isActive);
  }, [isActive]);

  React.useEffect(() => {
    setIsActive(isSelected as SetStateAction<boolean>);
  }, []);

  return (
    <ListGroupItem className="list-item" tag="button" action>
      <InputGroup size="md">
        <InputGroupText onClick={handleChange}>
          <img src={avatar} className="avatar" alt="avatar" />
        </InputGroupText>
        <Label for={`cb-${id}`} className="form-control names" check>{first_name} {last_name}</Label>
        <InputGroupText>
          <Input id={`cb-${id}`} type="checkbox" checked={isActive} onChange={handleChange} />
        </InputGroupText>
      </InputGroup>
    </ListGroupItem>
  );
};
