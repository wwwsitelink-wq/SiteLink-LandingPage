# SiteLink Audit Website

A modern, responsive audit and verification dashboard for the SiteLink construction platform.

## Features

- **Home Page**: Marketing landing page showcasing SiteLink's audit capabilities
- **Audit Dashboard**: Real-time verification metrics and compliance statistics
- **Workers List**: Browse verified construction professionals with filtering
- **Vendors List**: View approved contractors and construction companies
- **Compliance Reports**: Download detailed audit reports and documentation

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with CSS Variables
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
cd SiteLink_Audit_Website
npm install
```

### Development

```bash
npm run dev
```

The app will run on `http://localhost:3001`

### Build

```bash
npm run build
```

Output will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   └── Footer.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AuditDashboard.jsx
│   ├── WorkersList.jsx
│   ├── VendorsList.jsx
│   └── ComplianceReport.jsx
├── api/
│   └── axios.js
├── App.jsx
├── main.jsx
└── index.css
```

## API Integration

The app connects to your SiteLink backend API. Set the API base URL:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Pages

- **Home** (`/`): Landing page with features and CTA
- **Audit Dashboard** (`/audit`): Verification metrics and compliance overview
- **Workers** (`/workers`): Verified workers listing with filters
- **Vendors** (`/vendors`): Approved contractors and vendors
- **Compliance** (`/compliance`): Audit reports and documentation

## Deployment

### Azure Static Web Apps

```bash
npm run build
# Deploy the dist/ folder to Azure Static Web Apps
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "preview"]
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #2f63db;
  --secondary: #0f1f44;
  --accent: #fbbf24;
  /* ... */
}
```

### Add New Pages

1. Create a new component in `src/pages/`
2. Add route to `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

## License

© 2026 SiteLink. All rights reserved.
