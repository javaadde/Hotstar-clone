import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})



// module.exports = {
//     // ...
//     theme: {
//       extend: {
//         colors: {
//           primary: 'var(--color-primary)',
//           secondary: 'var(--color-secondary)',
//           background: 'var(--color-background)',
//           text: 'var(--color-text)',
//           // ... more theme colors
//         },
//       },
//     },
//     // ...
//   };