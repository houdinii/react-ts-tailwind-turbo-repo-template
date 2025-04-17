// apps/web/src/App.tsx
import { Button } from '@{{scope}}/{{lib}}'; // or 'ui'

export default function App() {
  return (
    <main className="space-y-4 p-6">
      <h1 className="text-3xl font-bold">Hello from Web app</h1>
      <Button onClick={() => alert('Clicked!')}>Click me</Button>
    </main>
  );
}
