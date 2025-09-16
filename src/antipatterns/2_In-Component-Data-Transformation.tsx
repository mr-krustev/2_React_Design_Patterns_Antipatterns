/*
  The component-centric approach in React is all about breaking up tasks and concerns into manageable
chunks, enhancing maintainability. One recurrent misstep, however, is when developers introduce
complex data transformation logic directly within components.

  It’s common, especially when dealing with external APIs or backends, to receive data in a shape or
format that isn’t ideal for the frontend. Instead of adjusting this data at a higher level, or in a utility
function, the transformation is defined inside the component.
*/

import { useEffect, useState } from "react";

type User = {
  name: string;
  age: number;
  address: string;
};

type RemoteUser = {
  firstName: string;
  lastName: string;
  age: number;
  addressLine1: string;
  city: string;
  country: string;
};

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data: RemoteUser) => {
        // Transforming data right inside the component
        const transformedUser = {
          name: `${data.firstName} ${data.lastName}`,
          age: data.age,
          address: `${data.addressLine1}, ${data.city}, ${data.country}`,
        };
        setUser(transformedUser);
      });
  }, [userId]);

  return (
    <div>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
        </>
      )}
    </div>
  );
}

export default UserProfile;

/*
Issues:
    • Lack of clarity: Combining data fetching, transformation, and rendering tasks within a single
      component makes it harder to pinpoint the component’s exact purpose
    • Reduced reusability: Should another component require the same or a similar transformation,
      we’d be duplicating logic
    • Testing challenges: Testing this component now requires considering the transformation logic,
      making tests more convoluted

  To combat this anti-pattern, it’s advised to separate data transformation from the component. This
can be achieved using utility functions or custom Hooks, thus ensuring a cleaner and more modular
design. By externalizing these transformations, components remain focused on rendering and business
logic stays centralized, making for a far more maintainable code base.
*/
