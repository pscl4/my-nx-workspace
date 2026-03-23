import { formatDate } from '@react-demo/shared-utils';
import { Hero } from '@react-demo/ui';

export function App() {
  const today = formatDate(new Date());

  return (
    <div>
      <Hero
        title="Welcome to React Demo"
        subtitle="Build something amazing today"
        cta="Get Started"
      />
      <p>Today is: {today}</p>
    </div>
  );
}

export default App;
