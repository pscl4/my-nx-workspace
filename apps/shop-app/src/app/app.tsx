import { formatDate, calculateDiscount } from '@react-demo/shared-utils';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Headphones', price: 149.99 },
];

const SALE_DISCOUNT = 15; // 15% off

export function App() {
  const today = formatDate(new Date());

  return (
    <div>
      <h1>Shop App</h1>
      <p>Sale ends: {today}</p>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            {p.name} — ${calculateDiscount(p.price, SALE_DISCOUNT).toFixed(2)}{' '}
            <small>(was ${p.price})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
