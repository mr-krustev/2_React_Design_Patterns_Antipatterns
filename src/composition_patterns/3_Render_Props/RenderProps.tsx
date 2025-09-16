import React, { useState } from "react";

type ToggleWrapperProps = {
  toggleLabel: string;
  render: (toggled: boolean) => React.ReactNode;
};

const ToggleWrapper: React.FC<ToggleWrapperProps> = ({
  render,
  toggleLabel,
}) => {
  const [on, setOn] = useState(false);

  return (
    <div>
      {render(on)}

      <div>
        {toggleLabel}
        <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
      </div>
    </div>
  );
};

export const LockableInput = () => {
  return (
    <ToggleWrapper
      render={(toggled) => (
        <input
          type="text"
          disabled={toggled}
          placeholder={!toggled ? `Enter your password` : `Locked`}
        />
      )}
      toggleLabel="Lock"
    />
  );
};
