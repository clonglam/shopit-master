export interface PromotionCategory {
  id: number
  title: string
  subtitle: string
  href: string
  image: string
}
const promotionCategories: PromotionCategory[] = [
  {
    id: 1,
    title: 'Cosy Spot',
    subtitle: '10% off',
    href: '/products',
    image:
      'https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: 2,
    title: 'Lighting',
    subtitle: 'Enlight your family',
    href: '/collections/lighting',
    image:
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 6,
    title: 'Out Door Furniture',
    subtitle: 'Shop',
    href: '/products',
    image:
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80',
  },
  {
    id: 3,
    title: 'Kitchen & Dinner',
    subtitle: 'Shop',
    href: '/collections/kitchen-dining',
    image:
      'https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=832&q=80',
  },
  {
    id: 4,
    title: 'Emeco Furniture',
    subtitle: 'Shop',
    href: '/collections/kitchen-dining',
    image:
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 5,
    title: 'Scandinavian Style',
    subtitle: 'Shop',
    href: '/collections/outdoor',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80',
  },
]

export default promotionCategories
