# POS System

A modern Point of Sale (POS) system built with React and TypeScript, designed to help businesses manage their sales, inventory, and transactions efficiently.

## Features

- 🛍️ **Sales Management**
  - Real-time sales tracking
  - Quick product search and selection
  - Multiple payment method support
  - Sales history and reports

- 📦 **Inventory Management**
  - Product catalog management
  - Stock level tracking
  - Low stock alerts
  - Product categorization

- 👥 **User Management**
  - Role-based access control
  - User authentication
  - Staff performance tracking

- 📊 **Reporting & Analytics**
  - Sales reports
  - Inventory reports
  - Revenue analytics
  - Performance metrics

## How to Use the Application

### Sales Management
1. **Making a Sale**
   - Click "New Sale" to start a new transaction
   - Search for products using the search bar or browse categories
   - Add items to cart by clicking the "+" button
   - Adjust quantities using the +/- buttons
   - Select payment method (Cash, Card, or Digital Payment)
   - Complete the sale by clicking "Process Payment"

2. **Viewing Sales History**
   - Navigate to "Sales History" from the main menu
   - Filter sales by date range, payment method, or staff member
   - View detailed information for each transaction
   - Export sales data to CSV or PDF

### Inventory Management
1. **Managing Products**
   - Access "Products" from the main menu
   - Add new products with details like name, price, and stock level
   - Edit existing product information
   - Set up categories for better organization
   - Enable low stock alerts

2. **Stock Control**
   - Monitor current stock levels in the inventory dashboard
   - Receive notifications for low stock items
   - Update stock quantities manually or through bulk import
   - Track stock movement history

### User Management
1. **Staff Access**
   - Create staff accounts with specific roles (Admin, Manager, Cashier)
   - Set permissions for each role
   - Monitor staff performance and sales
   - Manage staff schedules and shifts

### Reports & Analytics
1. **Viewing Reports**
   - Access various reports from the "Reports" section
   - Generate daily, weekly, or monthly sales reports
   - View inventory status reports
   - Analyze revenue trends and performance metrics
   - Export reports in multiple formats

## Technologies

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/annisacode/POS-system.git
   cd POS-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch. The live version can be accessed at: https://annisacode.github.io/POS-system

## Development

- **Linting**
  ```bash
  npm run lint
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please feel free to reach out through GitHub issues or pull requests. 