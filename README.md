# WUBCS - World University of Bangladesh Computer Society

A premium full-stack web application for managing and showcasing the computer science society of World University of Bangladesh. Built with Next.js 16, TypeScript, MongoDB, and modern UI components.

## Features

### Public Website
- **Home Page** - Hero section with society highlights and statistics
- **About Page** - Detailed information about WUBCS
- **Events Page** - Showcase of upcoming and past events
- **Members Page** - Directory of all society members
- **Committee Page** - Leadership team and organizational structure
- **Gallery Page** - Photo gallery of society activities
- **Blog Page** - Blog posts and articles
- **Contact Page** - Contact form and information

### Admin Dashboard
Secure admin panel with comprehensive management tools:
- **Dashboard** - Overview with statistics and key metrics
- **Members Management** - CRUD operations for member profiles
- **Committee Management** - Manage committee members and positions
- **Events Management** - Create, edit, and delete events
- **Blog Management** - Write and manage blog posts
- **Gallery Management** - Upload and organize photos
- **Achievements Management** - Track and display society achievements
- **Sponsors Management** - Manage sponsor information
- **Settings** - Site-wide configuration and settings

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion for animations
- **UI Components**: shadcn/ui with custom extensions
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with httpOnly cookies
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization

## Getting Started

### Prerequisites
- Node.js 18+ or pnpm
- MongoDB instance (local or cloud)
- Environment variables configured

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Access the application**
   - Public site: `http://localhost:3000`
   - Admin login: `http://localhost:3000/login`

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── (admin)/                 # Admin routes (protected)
│   │   ├── login/              # Login page
│   │   ├── dashboard/          # Dashboard and management pages
│   │   │   ├── members/
│   │   │   ├── committee/
│   │   │   ├── events/
│   │   │   ├── blogs/
│   │   │   ├── gallery/
│   │   │   ├── achievements/
│   │   │   ├── sponsors/
│   │   │   └── settings/
│   │   └── layout.tsx
│   ├── (public)/                # Public routes
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   ├── events/
│   │   ├── members/
│   │   ├── committee/
│   │   ├── gallery/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── layout.tsx
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── members/            # Members CRUD
│   │   ├── committee/          # Committee CRUD
│   │   ├── events/             # Events CRUD
│   │   ├── blogs/              # Blogs CRUD
│   │   ├── gallery/            # Gallery CRUD
│   │   ├── achievements/       # Achievements CRUD
│   │   ├── sponsors/           # Sponsors CRUD
│   │   └── settings/           # Site settings
│   ├── layout.tsx              # Root layout with Navbar/Footer
│   └── globals.css             # Global styles
├── components/
│   ├── admin/                  # Admin components
│   │   ├── AdminSidebar.tsx
│   │   ├── AdminTopbar.tsx
│   │   ├── DataTable.tsx
│   │   ├── MemberForm.tsx
│   │   ├── CommitteeForm.tsx
│   │   ├── EventForm.tsx
│   │   └── BlogForm.tsx
│   ├── public/                 # Public site components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                     # shadcn/ui components
├── models/                     # Mongoose schemas
│   ├── Admin.ts
│   ├── Member.ts
│   ├── Committee.ts
│   ├── Event.ts
│   ├── Blog.ts
│   ├── Gallery.ts
│   ├── Achievement.ts
│   ├── Sponsor.ts
│   └── Settings.ts
├── lib/
│   ├── db.ts                   # MongoDB connection
│   ├── auth.ts                 # Authentication utilities
│   └── utils.ts                # Utility functions
├── types/
│   └── index.ts                # TypeScript type definitions
├── middleware.ts               # Route protection middleware
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/me` - Get current user

### Data Management
- `GET/POST /api/members` - Member operations
- `GET/PUT/DELETE /api/members/[id]` - Individual member
- `GET/POST /api/committee` - Committee operations
- `GET/POST /api/events` - Event operations
- `GET/POST /api/blogs` - Blog operations
- `GET/POST /api/gallery` - Gallery operations
- `GET/POST /api/achievements` - Achievement operations
- `GET/POST /api/sponsors` - Sponsor operations
- `GET/PUT /api/settings` - Site settings

## Authentication

The admin panel uses JWT-based authentication with httpOnly cookies:

1. Admin logs in with email and password
2. Server validates credentials and issues JWT token
3. Token stored in httpOnly cookie for security
4. Middleware protects admin routes
5. Routes redirect to login if not authenticated

## Development

### Adding New Features

1. **Create Mongoose Model** - Define schema in `models/`
2. **Create API Routes** - Add routes in `app/api/`
3. **Create Components** - Add UI components in `components/admin/`
4. **Create Pages** - Add management pages in `app/(admin)/dashboard/`

### Styling

- Use Tailwind CSS classes
- Reference design tokens from `globals.css`
- Framer Motion for animations
- All components follow dark theme design

### Database

- MongoDB connection via Mongoose
- Models defined with TypeScript
- Validation at API level with Zod
- Automatic timestamps on create/update

## Deployment

Deploy to Vercel for optimal Next.js performance:

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with one click

## Demo Credentials

For testing the admin panel, use:
- **Email**: admin@wubcs.org (or any email)
- **Password**: demo123 (create these in MongoDB)

## License

This project is proprietary and confidential.

## Support

For issues or questions, please contact the development team.
