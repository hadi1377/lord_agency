# Lord Agency Frontend

Next.js 16 application with React 19 and modern styling.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit http://localhost:3000

## Scripts

- `pnpm dev` - Development server (localhost:3000)
- `pnpm dev:docker` - Development server for Docker (0.0.0.0:4000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm start:docker` - Start production server in Docker
- `pnpm lint` - Run linter

## Adding New Components

### UI Components

Use Shadcn CLI to add new UI components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

### Custom Components

Create in `components/` directory:

```
components/
  my-component/
    MyComponent.tsx
    MyComponent.module.styl
```

## Styling

- **Tailwind CSS** - Utility classes for layout and common styles
- **Stylus Modules** - Component-specific complex styles

Example:

```tsx
import styles from './MyComponent.module.styl'

function MyComponent() {
  return (
    <div className={`${styles.container} flex items-center gap-4`}>
      <p className={styles.text}>Combining Tailwind and Stylus</p>
    </div>
  )
}
```

## Environment Variables

Create a `.env.local` file for local environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Code Standards

- Functional components only
- Use hooks correctly
- Props validation with prop-types
- 2 space indentation
- Single quotes
- No semicolons
- Early returns for error handling

## Project Structure

```
app/                    # App router pages and layouts
components/            # Reusable components
  ui/                  # Base UI components (Shadcn)
  [feature]/           # Feature-specific components
lib/                   # Utilities and helpers
public/                # Static assets
```
