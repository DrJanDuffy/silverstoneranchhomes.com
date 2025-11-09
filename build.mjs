#!/usr/bin/env node

// Set environment variable before any modules are loaded
process.env.TAILWIND_DISABLE_NATIVE = 'true';

// Import and run Next.js build
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

async function build() {
  try {
    console.log('Building with TAILWIND_DISABLE_NATIVE=true...');
    const { stdout, stderr } = await execPromise('next build', {
      env: { ...process.env, TAILWIND_DISABLE_NATIVE: 'true' }
    });

    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
