import { useEffect } from "react";

export function withLogging(
  Component: React.ComponentType
): React.ComponentType {
  return (props: React.ComponentProps<typeof Component>) => {
    useEffect(() => {
      console.log(`${Component.displayName ?? Component.name} mounted`);
    }, []);

    return <Component {...props} />;
  };
}
