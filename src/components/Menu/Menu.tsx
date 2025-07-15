import React, { useState } from 'react';
import './Menu.scss';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 1,
    name: 'Suya',
    description: 'Spicy grilled beef skewers served with onions and pepper sauce.',
    price: 3500,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600',
    spicy: true
  },
  {
    id: 2,
    name: 'Puff-Puff',
    description: 'Sweet, fluffy Nigerian dough balls, deep-fried to golden perfection.',
    price: 2000,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&w=600',
    vegetarian: true
  },
  {
    id: 3,
    name: 'Spring Rolls',
    description: 'Crispy Asian-style spring rolls with a savory vegetable filling.',
    price: 2500,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600',
    vegetarian: true
  },
  {
    id: 4,
    name: 'Chicken Wings',
    description: 'Juicy fried chicken wings tossed in spicy sauce.',
    price: 3500,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/4342589/pexels-photo-4342589.jpeg?auto=compress&cs=tinysrgb&w=600',
    spicy: true
  },

  // Main Courses
  {
    id: 5,
    name: 'Jollof Rice',
    description: 'Classic Nigerian party rice cooked in a rich tomato sauce, served with fried plantains and grilled chicken.',
    price: 6000,
    category: 'mains',
    image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'Egusi Soup',
    description: 'Ground melon seed soup with spinach and assorted meats, served with pounded yam.',
    price: 7000,
    category: 'mains',
    image: 'https://www.allnigerianrecipes.com/wp-content/uploads/egusi-soup.jpg',
  },
  {
    id: 7,
    name: 'Efo Riro',
    description: 'Rich spinach stew cooked with peppers, tomatoes, and assorted meats, served with amala.',
    price: 6500,
    category: 'mains',
    image: 'https://www.seriouseats.com/thmb/1YkYj2Jg4yZ9g2p9T4wK4n1x5uA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220607-efo-riro-vicky-wasik-13-2c3c6f5b8d9e4a9b9f5f7e9c8b8a8a7e.jpg',
  },
  {
    id: 8,
    name: 'Moi Moi',
    description: 'Steamed bean pudding made with ground beans, peppers, and spices.',
    price: 4000,
    category: 'mains',
    image: 'https://www.allnigerianrecipes.com/wp-content/uploads/moi-moi.jpg',
    vegetarian: true
  },
  {
    id: 9,
    name: 'Grilled Salmon',
    description: 'Tender grilled salmon fillet served with sautéed vegetables and mashed potatoes.',
    price: 12000,
    category: 'mains',
    image: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    name: 'Spaghetti Bolognese',
    description: 'Classic Italian pasta with rich beef and tomato sauce.',
    price: 8000,
    category: 'mains',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

  // Desserts
  {
    id: 11,
    name: 'Akara',
    description: 'Crispy fried bean cakes, a popular Nigerian street snack.',
    price: 2000,
    category: 'desserts',
    image: 'https://www.allnigerianrecipes.com/wp-content/uploads/akara.jpg',
    vegetarian: true
  },
  {
    id: 12,
    name: 'Fruit Salad',
    description: 'Assorted fresh tropical fruits, diced and served chilled.',
    price: 2500,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600',
    vegetarian: true
  },
  {
    id: 13,
    name: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake with creamy chocolate frosting.',
    price: 3500,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=600',
    vegetarian: true
  },
  {
    id: 14,
    name: 'Ice Cream',
    description: 'Creamy vanilla or chocolate ice cream, served with toppings.',
    price: 3000,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg?auto=compress&cs=tinysrgb&w=600',
    vegetarian: true
  }
];

  const categories = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' }
];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="menu section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">
          Discover our carefully crafted dishes made with the finest ingredients
        </p>

        <div className="menu__categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`menu__category ${activeCategory === category.id ? 'menu__category--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu__items">
          {filteredItems.map(item => (
            <div key={item.id} className="menu__item">
              <div className="menu__item-image">
                <img src={item.image} alt={item.name} />
                <div className="menu__item-badges">
                  {item.vegetarian && <span className="badge badge--vegetarian">V</span>}
                  {item.spicy && <span className="badge badge--spicy">🌶️</span>}
                </div>
              </div>
              <div className="menu__item-content">
                <div className="menu__item-header">
                  <h3 className="menu__item-name">{item.name}</h3>
                  <span className="menu__item-price">₦{item.price.toLocaleString()}</span>
                </div>
                <p className="menu__item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;