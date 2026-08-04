# e-plantShopping

Paradise Nursery - Where Green Meets Serenity 🌿

A fully responsive, modern e-commerce web application for online plant shopping built with React and Redux Toolkit. Features real-time cart management, product categorization, and an admin panel for inventory management.

![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9.5-764abc?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646cff?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572b6?style=for-the-badge&logo=css3&logoColor=white)

## 📝 Project Origin

This project is forked from [Paradise Nursery](https://github.com/ibm-developer-skills-network/e-plantShopping)
by IBM Developer Skills Network. I extended the original with:

- A full visual redesign implementing a custom "botanical specimen catalog"
  design system across 9+ files (updated color palette, typography, and
  component styling)
- Fixed a CSS grid layout bug affecting the shopping cart display

The sections below describe the app as it stands today, including both the
original scaffolding and my additions.

## 📋 Table of Contents

- [Project Origin](#-project-origin)
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

Paradise Nursery is a comprehensive e-commerce platform specializing in house plants. The application provides a seamless shopping experience with features like real-time cart updates, product management, and a fully responsive design that works perfectly on all devices.

**Key Highlights:**
- 🌱 30+ plants across 5 categories
- 🛒 Real-time shopping cart with Redux state management
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚙️ Admin panel for adding/deleting products
- 💚 Beautiful UI with smooth animations
- ⚡ Fast performance with Vite build tool

## ✨ Features

### Customer Features
- **Landing Page** - Elegant welcome screen with brand introduction
- **Product Catalog** - Browse 30+ plants organized in 5 categories:
  - Air Purifying Plants (6 plants)
  - Aromatic Fragrant Plants (6 plants)
  - Insect Repellent Plants (6 plants)
  - Medicinal Plants (6 plants)
  - Low Maintenance Plants (6 plants)
- **Shopping Cart** - Full CRUD operations:
  - Add items to cart
  - Increment/decrement quantities
  - Remove items
  - Real-time subtotal and total calculations
- **About Us** - Company information and mission
- **Responsive Design** - Works on all screen sizes (320px - 2560px+)

### Technical Features
- **Real-Time Updates** - Cart quantity badge updates across all pages
- **State Management** - Redux Toolkit for global state
- **Button States** - Visual feedback (disabled & grayed out after adding)
- **Form Validation** - Admin panel input validation
- **Image Preview** - Live preview when adding products
- **Smooth Animations** - CSS transitions and hover effects
- **No Horizontal Scroll** - Perfect mobile optimization
- **Touch-Friendly** - 44px minimum touch targets

### Admin Features
- **Add Products** - Add new plants with:
  - Category selection
  - Name, image URL, description, cost
  - Live image preview
- **Delete Products** - Remove plants with confirmation
- **View Inventory** - See all products organized by category

## 🛠️ Technologies Used

### Frontend Framework & Libraries

#### Core
- **React 18.2.0** - JavaScript library for building user interfaces
  - Functional components with hooks
  - useState for local state management
  - useEffect for side effects
  - useSelector & useDispatch for Redux integration

- **Redux Toolkit 1.9.5** - State management
  - createSlice for reducer logic
  - configureStore for store setup
  - Redux DevTools integration

#### Build Tool & Development
- **Vite 4.4.0** - Next-generation frontend build tool
  - Fast HMR (Hot Module Replacement)
  - Optimized production builds
  - ES modules support

#### Styling
- **CSS3** - Modern styling with:
  - Flexbox for layouts
  - CSS Grid for product cards
  - Media queries for responsiveness
  - CSS animations and transitions
  - Custom properties (CSS variables)

#### Language
- **JavaScript (ES6+)** - Modern JavaScript features:
  - Arrow functions
  - Destructuring
  - Spread operators
  - Template literals
  - Async/await
  - Array methods (map, filter, reduce)

### Development Tools

- **ESLint** - Code linting and quality
- **Git** - Version control
- **GitHub** - Code hosting
- **GitHub Pages** - Deployment platform
- **npm** - Package management

### Browser APIs Used
- **LocalStorage** - (Not implemented, session-only)
- **Fetch API** - (Future: For backend integration)

### Design Patterns

- **Component-Based Architecture** - Modular, reusable components
- **Container/Presentational Pattern** - Separation of logic and UI
- **Redux Pattern** - Predictable state container
- **Controlled Components** - Form inputs controlled by React state

## 📦 Installation

### Prerequisites
```bash
Node.js (v14 or higher)
npm (v6 or higher)
Git
```

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/e-plantShopping.git
cd e-plantShopping
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🚀 Usage

### Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Lint code
npm run lint
```

### Environment Setup

No environment variables needed for basic functionality. All data is stored in React state and Redux store.

## 📁 Project Structure

```
e-plantShopping/
├── public/                    # Static assets
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx       # About page component
│   │   ├── AboutUs.css
│   │   ├── AdminPanel.jsx    # Admin panel component
│   │   ├── AdminPanel.css
│   │   ├── CartItem.jsx      # Shopping cart component
│   │   ├── CartItem.css
│   │   ├── ProductList.jsx   # Product listing component
│   │   └── ProductList.css
│   ├── CartSlice.jsx         # Redux slice for cart
│   ├── store.js              # Redux store configuration
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .gitignore
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 📸 Screenshots

### Landing Page
Beautiful welcome screen with greenhouse background and call-to-action.

### Product Catalog
Browse plants with images, descriptions, and prices. One-click add to cart.

### Shopping Cart
Manage quantities, see real-time totals, and proceed to checkout.

### Admin Panel
Add new plants or remove existing ones with a clean interface.

### Mobile View
Fully responsive design that adapts to any screen size.

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install gh-pages --save-dev
```

2. **Update package.json**
```json
{
  "homepage": "https://youssefwerrad.github.io/e-plantShopping",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/e-plantShopping/'
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Configure GitHub Pages**
- Go to repository Settings → Pages
- Source: gh-pages branch
- Save

Your site will be live at: `https://YOUR_USERNAME.github.io/e-plantShopping`

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Desktop | > 1200px | 3 products per row |
| Laptop | 1024-1200px | 3 products per row |
| Tablet | 768-1024px | 2 products per row |
| Mobile | 480-768px | 1 product per row |
| Small | < 480px | 1 product per row |

## 🎨 Design System

### Colors
- **Primary**: #4CAF50 (Green)
- **Hover**: #45a049 (Dark Green)
- **Background**: #f0f0f0 (Light Gray)
- **Text**: #333 (Dark Gray)
- **Accent**: #ff5722 (Red/Orange)

### Typography
- **Font Family**: Arial, sans-serif
- **Headings**: Bold, 24-42px
- **Body**: Regular, 14-18px
- **Buttons**: Bold, 14-18px

### Spacing
- **Desktop**: 20-60px padding
- **Mobile**: 10-20px padding
- **Grid Gap**: 20-50px

## 🔄 State Management

### Redux Store Structure
```javascript
{
  cart: {
    items: [
      {
        name: "Snake Plant",
        image: "https://...",
        cost: "$15",
        quantity: 2
      }
    ]
  }
}
```

### Available Actions
- `addItem(product)` - Add or increment product
- `removeItem(name)` - Remove product from cart
- `updateQuantity({name, quantity})` - Update quantity

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Youssef Werrad**
- GitHub: [@youssefwerrad](https://github.com/youssefwerrad)
- Email: youssefwerrad@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Redux team for state management solution
- Vite team for the blazing fast build tool
- Unsplash & Pixabay for plant images
- IBM Developer Skills Network for the original project (see [Project Origin](#-project-origin))

## 📊 Project Stats

- **Components**: 5 main components
- **Lines of Code**: ~2000+
- **Plants**: 30 products across 5 categories
- **Responsive Breakpoints**: 5
- **Build Time**: ~2 seconds
- **Bundle Size**: ~150KB (gzipped)

---

**Paradise Nursery - Where Green Meets Serenity** 🌿

Made with ❤️ using React & Redux
