#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

const target = process.argv[2] ?? 'my-app';
const here = dirname(fileURLToPath(import.meta.url));

execSync(`npx degit github:user/react-ts-tailwind-turbo-repo-template ${target}`, {
  stdio: 'inherit'
});
console.log(`\n✔ Template cloned into ${target}`);
