export interface Category {
    id: string;
    name: string;
    icon: string; // Emoji or Icon Name
    image?: string;
}

export const categories: Category[] = [
    { id: 'macca', name: 'Macca', icon: '🥜', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxC1siL0BEdCQnNWjZv6Kk_M_vl_yDnw2MyULHESi_nahbFOYNcBZyedge7vY8FQPO_wNoEJYEsqWJlaqcU1K56eghyjN7KcyJ3ZPF6R0Y8s858r58IxQwH5Z6jwoS5YdZvBXZeRyBAhrewYx016H1YNw41unwWyzm0gKlqu2cjSyvSBt7cdiOO1Ni9IZ7z9bY4zTcNiYMpWRqaKb3LiGM7YO6DKaqPTYcGoFYzmWlVdQBuZqvBQpP5kG6kiYttkjgv_O7ERmn2DA' },
    { id: 'dieu', name: 'Hạt Điều', icon: '🌰', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLr_vvri8wp6CHqwwQDkS9KitG2fEkOvJrnhhogiobvb7-6aTGxI5G0xAqLtW2nVM_2pbT1EEhY5cq72kb-WN-UuzpOtJI4otg7V0MtmuOMhzfwP-5fMWPQg_80XA019ybSdAicTzxJ3AQaIhzr_OCe6cmF6QgoJyt443FqMPHwZELPfJpzyXWdcvFJ2arOzTEYTSg2XjmXQGHGWJT7mBpgI0GWijZiMoBZ94aj1JcXzuuBvGd5rfIkCZvUm0vhZudbb-QAPZaRJw' },
    { id: 'hanh-nhan', name: 'Hạnh Nhân', icon: '🌰', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcViTh7ay7R0VFLu-KZcRWe_SXaIsIOYIFEvBUX7-DGhbbIXtqWRfqOaKvr8Nv2DTotcL1zF9klJNOHAqCBBiJB0_Dll7hMon5TmuA_JDMKd-Nza_vnlEapD319IDwIhT7FbUe70eCvmxomwJ3vr4GOwYZsgaDhXuxu6QWiLQg2qUo_7ZGHpnnQNy4ahvIT9z8m0LjV3alagvszoUVH6oZxKcxpWoK_L3GSpXEsAnV6ir-VIYV76cMNECuVz7A2f8_DmLGBJI2oUE' },
    { id: 'combo', name: 'Combo Quà', icon: '🎁', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO17ETmX6YAQwfVFKW0hVkTpBoO3ey-LbR25Ciqu6aiAnFPEQTPogYbnBne-ZoCpLURQKORhZhwtsANWlnXmYhXyhzdaWCR2OBgxD9T4OaUe_kVwIEDJljOoI6_VI7d_E8l8un8wb7v0zuvcMnAZibirnOWEYzxNmr5RBkvAmueyni0PlOwaGODIr2S_MYo_fbtyNQXimkraRNk5uTY92LmqbPOhF7--ad-DrFcibL8fxZN6etzT2ZvW66oDc39dKTeWJ_5ItCUEo' },
];
