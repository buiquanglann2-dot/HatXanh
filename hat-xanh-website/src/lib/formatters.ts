/**
 * Format số tiền VND
 */
export function formatCurrency(price: number): string {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    }).format(price);
}

/**
 * Format số tiền ngắn gọn (450.000đ)
 */
export function formatPriceShort(price: number): string {
    return `${price.toLocaleString('vi-VN')}đ`;
}

/**
 * Format ngày tháng
 */
export function formatDate(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(dateObj);
}

/**
 * Format số điện thoại
 */
export function formatPhone(phone: string): string {
    // +84 123 456 789 -> 0123 456 789
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('84')) {
        return `0${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
    }
    return phone;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(originalPrice: number, currentPrice: number): number {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}
