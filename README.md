# Postcard-AI - AI-Generated Postcards E-commerce

A modern, responsive e-commerce website for selling AI-generated postcards in the Netherlands. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 **AI-Generated Postcards**: Beautiful, unique postcards created with artificial intelligence
- 🛒 **Full E-commerce Experience**: Shopping cart, checkout, product catalog
- 📱 **Responsive Design**: Optimized for all devices with Tailwind CSS
- 🌙 **Dark Mode Support**: Toggle between light and dark themes
- 🇳🇱 **Netherlands Focus**: EUR pricing, VAT calculation, Dutch shipping
- ⚡ **Performance Optimized**: Next.js App Router, Image optimization, ISR
- 🔒 **GDPR Compliant**: Cookie consent banner and privacy features
- 💳 **Payment Integration**: Stripe and Mollie payment options (stub)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter + Fredoka (Google Fonts)
- **State Management**: React Context + useReducer
- **Image Optimization**: Next.js Image component

## Project Structure

\`\`\`
postcard-ai/
├── app/
│   ├── checkout/page.tsx          # Checkout page
│   ├── product/[id]/page.tsx      # Product detail pages
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── Hero.tsx                   # Hero section
│   ├── HowItWorks.tsx            # Process timeline
│   ├── ProductCatalogue.tsx       # Product grid
│   ├── ProductCard.tsx            # Individual product cards
│   ├── Testimonials.tsx           # Customer reviews
│   ├── PricingTokens.tsx          # Pricing packages
│   ├── FAQ.tsx                    # Frequently asked questions
│   ├── Footer.tsx                 # Site footer
│   ├── GDPRBanner.tsx            # Cookie consent
│   ├── CartProvider.tsx           # Shopping cart context
│   └── ShoppingCart.tsx           # Cart drawer
└── lib/
    └── utils.ts                   # Utility functions
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd postcard-ai
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
# or
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
pnpm dev
# or
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/postcard-ai)

### Build for Production

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## Customization

### Updating Content

Most content uses placeholder tokens that can be easily replaced:

- `{{TOKEN_PRICE}}` - Single postcard price
- `{{FIVE_PACK_PRICE}}` - 5-pack bundle price
- `{{TEN_PACK_PRICE}}` - 10-pack bundle price

### Styling

The design uses a pastel color palette with purple and pink gradients. Key design elements:

- **Colors**: Purple (#7C3AED) to Pink (#EC4899) gradients
- **Typography**: Fredoka for headings, Inter for body text
- **Components**: Rounded corners, subtle shadows, glass-morphism effects
- **Background**: Subtle paper texture with gradient overlays

### Adding New Products

Products are currently stored in component files. To add new products:

1. Update the `products` array in `components/ProductCatalogue.tsx`
2. Add corresponding product data in `app/product/[id]/page.tsx`

For a production app, replace with a proper database and API.

## Features in Detail

### Shopping Cart
- Add/remove items
- Quantity adjustment
- Size and finish options
- Persistent cart state
- Slide-over drawer interface

### Checkout Process
1. Contact information
2. Shipping address
3. Payment method selection
4. Order summary
5. Secure payment processing (stub)

### Product Customization
- Multiple sizes (A6, A5)
- Finish options (matte, glossy)
- Personal message input
- Dynamic pricing

### SEO & Performance
- Optimized meta tags
- Open Graph support
- Image optimization
- Code splitting
- ISR for product pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email hello@postcard-ai.nl or create an issue in the repository.
