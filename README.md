# SmileCare Dental - Family Dentist Landing Page

A professional, elegant landing page for a family dental practice built with Next.js and Tailwind CSS.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://smilecare-dental.vercel.app/)

## Features

- Responsive design with mobile optimization
- Blue and white professional color scheme
- Appointment form with email notifications via Resend
- Services and pricing sections
- Testimonials with patient photos
- Static map implementation (no API key required)
- Sticky call bar with phone number

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Email Service**: Resend
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/family-dentist.git
cd family-dentist
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
   - Copy `.env.local.example` to `.env.local`
   - Add your Resend API key for email functionality
   - Configure the email addresses for sending and receiving appointment notifications

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### GitHub

1. Create a new repository on GitHub
2. Initialize Git in your project (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Add your GitHub repository as a remote
```bash
git remote add origin https://github.com/yourusername/family-dentist.git
```

4. Push your code to GitHub
```bash
git push -u origin main
```

### Vercel

1. Sign up or log in to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure the project:
   - Set the framework preset to Next.js
   - Add environment variables from your `.env.local` file
4. Deploy the project

## Resend Setup

1. Create an account on [Resend](https://resend.com)
2. Create a new API key in your Resend dashboard
3. Add your domain for sending emails (optional but recommended for production)
4. Update your `.env.local` file with the Resend API key
5. Configure the email addresses in the `.env.local` file:
   - `FROM_EMAIL`: The email address that will send appointment notifications
   - `TO_EMAIL`: The email address that will receive appointment requests

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: React components
  - `/layout`: Layout components (Header, Footer, CallBar)
  - `/sections`: Page sections (Hero, Services, Pricing, etc.)
  - `/forms`: Form components
- `/public`: Static assets
- `/img`: Image assets

## Customization

- Update content in the component files
- Modify colors in the Tailwind config
- Replace images in the `/img` directory
- Adjust form fields in the `AppointmentForm.tsx` component

## License

This project is licensed under the MIT License - see the LICENSE file for details.
