# Company Data Management System

A modern, responsive React frontend application for managing and displaying company data with advanced filtering, search, and pagination capabilities.

## 🚀 Features

- **Company Directory**: Browse through a comprehensive database of companies
- **Advanced Filtering**: Filter by industry, location, status, employee count, and revenue
- **Real-time Search**: Search companies by name, description, or CEO
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive Data Table**: Sort companies by various attributes
- **Detailed Company Profiles**: View comprehensive company information in modal dialogs
- **Pagination**: Efficient data navigation with customizable items per page
- **Modern UI**: Built with Material-UI for a professional look and feel

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.2 for fast development and building
- **UI Library**: Material-UI (MUI) v7.3.5
- **State Management**: React Context API with useReducer
- **Styling**: Material-UI's emotion-based CSS-in-JS
- **Icons**: Material-UI Icons
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── CompanyFilters.tsx   # Advanced filtering component
│   ├── CompanyTable.tsx     # Data display table/cards
│   ├── CompanyModal.tsx     # Detailed company view
│   ├── Pagination.tsx       # Pagination controls
│   └── LoadingState.tsx     # Loading skeletons
├── context/             # React Context for state management
│   └── CompanyContext.tsx   # Global company state
├── data/                # Mock data and API functions
│   └── mockCompanies.ts     # Sample company data
├── hooks/               # Custom React hooks
│   └── useCompanies.ts      # Company data management hook
├── types/               # TypeScript type definitions
│   └── Company.ts           # Company interfaces
├── utils/               # Utility functions
│   └── companyUtils.ts      # Filtering, sorting, pagination
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (current: 20.17.0 - upgrade recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or download the project files)
   ```bash
   cd Frontlines-media_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174/` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## 🎯 Usage Guide

### Filtering Companies
- **Search Bar**: Type to search by company name, description, or CEO
- **Industry Filter**: Select specific industries from dropdown
- **Location Filter**: Filter by geographical location
- **Status Filter**: Filter by Active, Inactive, or Acquired status
- **Employee Count**: Use slider to set employee range
- **Revenue Range**: Use slider to set revenue range in crores (₹)

### Sorting Data
- Click any table column header to sort ascending/descending
- Available sort fields: Name, Industry, Location, Employees, Revenue

### Viewing Company Details
- Click the eye icon in any table row to open detailed company information
- Modal includes comprehensive company data, CEO information, and direct website links

### Responsive Design
- **Desktop**: Full table view with all columns visible
- **Mobile**: Card-based layout optimized for smaller screens

## 📊 Sample Data

The application includes 20 sample companies across various industries:
- Technology (TechCorp Solutions, CyberSecure Systems, etc.)
- Healthcare (HealthPlus Medical, BioPharma Research)
- Finance (FinanceFirst Bank)
- Energy (Green Energy Inc)
- And many more...

## 🔧 Customization

### Adding New Companies
Edit `src/data/mockCompanies.ts` to add new company entries following the Company interface.

### Modifying Filters
Update `src/components/CompanyFilters.tsx` to add new filter types or modify existing ones.

### Styling Changes
The application uses Material-UI's theming system. Modify the theme in `src/App.tsx` to customize colors, typography, and component styles.

## 📱 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Known Issues

- Node.js version warning (20.17.0 vs required 20.19+) - application functions normally
- Large bundle size warning - consider implementing code splitting for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is part of a technical assignment for Frontlines Media.

## 🔗 Additional Resources

- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**Built with ❤️ for Frontlines Media Technical Assignment**
