import React, { useState, useCallback, ReactNode } from "react";

interface FlyOutProps {
  children: (
    | React.ReactElement<InputProps>
    | React.ReactElement<ListProps>
    | React.ReactElement<ListItemProps>
  )[];
}

interface InputProps {
  value?: string;
  toggle?: () => void;
  setValue?: (value: string) => void;
  placeholder?: string;
}

interface ListProps {
  children: React.ReactElement<ListItemProps>[];
  setValue?: (value: string) => void;
  open?: boolean;
}

interface ListItemProps {
  children: ReactNode;
  value: string;
  setValue?: (value: string) => void;
}

const FlyOut: React.FC<FlyOutProps> & {
  Input: React.FC<InputProps>;
  List: React.FC<ListProps>;
  ListItem: React.FC<ListItemProps>;
} = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement<ListItemProps | InputProps | ListProps>(child, {
              open,
              toggle,
              value,
              setValue,
            })
          : child;
      })}
    </div>
  );
};

const Input: React.FC<InputProps> = ({
  value = "",
  toggle,
  setValue,
  ...props
}) => {
  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      value={value}
      onChange={(e) => setValue?.(e.target?.value)}
      {...props}
    />
  );
};

const List: React.FC<ListProps> = ({ children, open, setValue }) => {
  return open ? (
    <ul>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { setValue })
          : child
      )}
    </ul>
  ) : null;
};

const ListItem: React.FC<ListItemProps> = ({ children, value, setValue }) => {
  return <li onMouseDown={() => setValue?.(value)}>{children}</li>;
};

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

const SearchInput: React.FC = () => {
  return (
    <FlyOut>
      <FlyOut.Input placeholder="Enter an address, city, or ZIP code" />
      <FlyOut.List>
        <FlyOut.ListItem value="San Francisco, CA">
          San Francisco, CA
        </FlyOut.ListItem>
        <FlyOut.ListItem value="Seattle, WA">Seattle, WA</FlyOut.ListItem>
        <FlyOut.ListItem value="Austin, TX"> Austin, TX</FlyOut.ListItem>
        <FlyOut.ListItem value="Miami, FL">Miami, FL</FlyOut.ListItem>
        <FlyOut.ListItem value="Boulder, CO">Boulder, CO</FlyOut.ListItem>
      </FlyOut.List>
    </FlyOut>
  );
};

export default SearchInput;
