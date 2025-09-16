export const withStyles = (
  Component: React.ComponentType
): React.ComponentType => {
  return (props: React.ComponentProps<typeof Component>) => {
    return (
      <div style={{ color: "red", fontSize: "20px" }}>
        <Component {...props} />
      </div>
    );
  };
};
