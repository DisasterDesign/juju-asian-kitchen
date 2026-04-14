export type MenuCategoryId = 'noodles' | 'dimsum' | 'sushi' | 'buns' | 'sides' | 'drinks';
export type CategoryColor = 'coral' | 'yellow' | 'green';

export interface MenuItem {
  id: string;
  nameHe: string;
  nameEn: string;
  descriptionHe: string;
  descriptionEn: string;
  price: number;
  category: MenuCategoryId;
  isNew?: boolean;
  isPopular?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  nameHe: string;
  nameEn: string;
  color: CategoryColor;
  items: MenuItem[];
}
