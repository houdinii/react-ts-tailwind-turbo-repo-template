// packages/ui/src/Button.tsx

import { ButtonHTMLAttributes } from 'react';

export const Button = (p: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="rounded-lg bg-accent px-4 py-2 text-white" {...p} />
);
