/*
  The beauty of modern frontend frameworks, including React, is the distinct separation of concerns.
By design, components should be oblivious to the intricacies of business logic, focusing instead on
presentation. However, a recurrent pitfall that developers encounter is the infusion of business logic
within view components. This not only disrupts the clean separation but also bloats components and
makes them harder to test and reuse.
*/

type Item = {
  id: string,
  name: string,
  price: number,
};

function PriceListView({ items }: { items: Item[] }) {
  // Business logic within the view
  const filterExpensiveItems = (items: Item[]) => {
    return items.filter((item) => item.price > 100);
  };

  const expensiveItems = filterExpensiveItems(items);

  return (
    <div>
      {expensiveItems.map((item) => (
        <div key={item.id}>
          {item.name}: ${item.price}
        </div>
      ))}
    </div>
  );
}

export default PriceListView;

/*
This approach can become problematic:
    • Reusability: If another component requires a similar filter, the logic would need to be duplicated
    • Testing: Unit testing becomes more complex as you’re not just testing the rendering, but also
      the business logic
    • Maintenance: As the application grows and more logic is added, this component can become
      unwieldy and harder to maintain

  To ensure our components remain reusable and easy to maintain, it’s wise to embrace the separation
of concerns principle. This principle states that each module or function in software should have
responsibility over a single part of the application’s functionality. By separating the business logic
from the presentation layer and adopting a layered architecture, we can ensure each part of our
code handles its own specific responsibility, leading to a more modular and maintainable code base.
*/
