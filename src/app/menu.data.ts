import { MenuItem } from './menu-item.model';

export const MENU_CATEGORIES = [
  'All', 'Starters', 'North Indian', 'Rice & Biryani',
  'Indian Breads', 'Chinese', 'South Indian', 'Fast Food',
  'Beverages', 'Desserts', 'Thali & Combos'
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: 'Paneer Tikka', description: 'Chargrilled cottage cheese, house spices and mint chutney.', price: 260, category: 'Starters', vegetarian: true, badge: 'Bestseller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTw8NVKe8YVBKYcgyXe4358BKjMnPkAtjn4Tch4zNokahTdATHcwWXwlEXXtnOiDxhIezz4obxYi_LSYGglacfzbzrVMNNPVojIQbOQ&s=10?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'Dahi Ke Kebab', description: 'Soft hung-curd kebabs with a delicate crisp finish.', price: 230, category: 'Starters', vegetarian: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'Butter Chicken', description: 'Slow-simmered tomato gravy, cream and fragrant spices.', price: 390, category: 'North Indian', vegetarian: false, badge: 'Chef’s special', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'Paneer Lababdar', description: 'Paneer in a rich, gently spiced onion-tomato gravy.', price: 330, category: 'North Indian', vegetarian: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85' },
  { id: 5, name: 'Dum Vegetable Biryani', description: 'Aromatic basmati rice layered with seasonal vegetables.', price: 290, category: 'Rice & Biryani', vegetarian: true, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85' },
  { id: 6, name: 'Chicken Dum Biryani', description: 'Fragrant dum-cooked rice with tender chicken and herbs.', price: 360, category: 'Rice & Biryani', vegetarian: false, image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85' },
  { id: 7, name: 'Butter Naan', description: 'Tandoor-baked soft bread finished with cultured butter.', price: 55, category: 'Indian Breads', vegetarian: true, image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85' },
  { id: 8, name: 'Masala Dosa', description: 'Golden rice crepe with spiced potato and coconut chutney.', price: 160, category: 'South Indian', vegetarian: true, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85' },
  { id: 9, name: 'Gulab Jamun', description: 'Warm milk dumplings with cardamom-scented syrup.', price: 110, category: 'Desserts', vegetarian: true, image: 'https://images.unsplash.com/photo-1666190092159-3b3b6f4a5b8f?auto=format&fit=crop&w=900&q=85' },
  { id: 10, name: 'Mango Lassi', description: 'Chilled yoghurt blended with ripe mango.', price: 120, category: 'Beverages', vegetarian: true, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=85' }
];
