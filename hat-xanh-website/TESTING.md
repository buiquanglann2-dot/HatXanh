# Testing Guide

## Setup

This project uses Jest and React Testing Library for testing.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Writing Tests

### Component Tests

Create test files next to your components with `.test.tsx` extension:

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Integration Tests

Place integration tests in `__tests__` directories:

```
src/
  app/
    __tests__/
      page.test.tsx
  components/
    common/
      __tests__/
        Button.test.tsx
```

## Best Practices

1. **Test user behavior**, not implementation details
2. **Use semantic queries** (getByRole, getByLabelText)
3. **Keep tests simple** and focused
4. **Mock external dependencies** (API calls, etc.)
5. **Aim for 80%+ coverage** on critical paths

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Next.js Testing](https://nextjs.org/docs/testing)
