import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
    it('renders without crashing', () => {
        render(<Home />);
        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('displays hero section', () => {
        render(<Home />);
        // Check for the main heading in HeroSection
        expect(screen.getByText(/Nông Sản Sạch/i)).toBeInTheDocument();
        expect(screen.getByText(/Từ Tây Nguyên/i)).toBeInTheDocument();
    });
});
