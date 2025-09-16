import React, { useState, useCallback, ReactNode, createContext, useContext } from 'react';

interface FlyOutContextProps {
  open: boolean;
  toggle: () => void;
  value: string;
  setValue: (value: string) => void;
}

const FlyOutContext = createContext<FlyOutContextProps | undefined>(undefined);

interface FlyOutProps {
  children: ReactNode;
}

const FlyOut: React.FC<FlyOutProps> & {
  Input: React.FC<InputProps>;
  List: React.FC<ListProps>;
  ListItem: React.FC<ListItemProps>;
} = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      <div>{children}</div>
    </FlyOutContext.Provider>
  );
};

interface InputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  const { value, toggle, setValue } = useContext(FlyOutContext)!;

  return (
    <input
      type="text"
      value={value}
      onFocus={toggle}
      onBlur={toggle}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  const { open } = useContext(FlyOutContext)!;

  return open ? <ul>{children}</ul> : null;
};

interface ListItemProps {
  children: ReactNode;
  value: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, value }) => {
  const { setValue } = useContext(FlyOutContext)!;

  return <li onMouseDown={() => setValue(value)}>{children}</li>;
};

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

const SearchInput2: React.FC = () => (
  <FlyOut>
    <FlyOut.Input placeholder="Enter an address, city, or ZIP code" />
    <FlyOut.List>
      <FlyOut.ListItem value="San Francisco, CA">San Francisco, CA</FlyOut.ListItem>
      <FlyOut.ListItem value="Seattle, WA">Seattle, WA</FlyOut.ListItem>
      <FlyOut.ListItem value="Austin, TX">Austin, TX</FlyOut.ListItem>
      <FlyOut.ListItem value="Miami, FL">Miami, FL</FlyOut.ListItem>
      <FlyOut.ListItem value="Boulder, CO">Boulder, CO</FlyOut.ListItem>
    </FlyOut.List>
  </FlyOut>
);

export default SearchInput2;