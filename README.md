
# USABUILDERS Website

This is a modern ReactJS website for USABUILDERS, serving Leeds, UK. The site showcases building services, a gallery of projects, company information, and contact details. Built with Vite for fast performance and easy development using Tailwind CSS.

## Features
- Home page with hero image and welcome message
- Services page listing building and renovation services
- Gallery page with project images
- About page with company background
- Contact page with email, phone, and address
- Modern, clean, and responsive design

## Usage
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment file and update with your details:
   ```bash
   cp .env.example .env
   ```
3. Update the `.env` file with your company details:
   - `VITE_COMPANY_NAME`: Your company name
   - `VITE_COMPANY_PHONE`: Your contact phone number
   - `VITE_COMPANY_EMAIL`: Your contact email
   - `VITE_COMPANY_ADDRESS`: Your business address
   
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization
- Replace placeholder images in `src/images` with your own project photos.
- Update text content in the `src/pages` components as needed.

## License
This project is for demonstration purposes. All content and images are placeholders.
