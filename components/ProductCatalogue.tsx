import ProductCard from "@/components/ProductCard"

const products = [
  {
    id: "1",
    title: "Dreamy Watercolor",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    price: 4.99,
    description: "Soft watercolor style perfect for romantic messages",
  },
  {
    id: "2",
    title: "Abstract Expressionism",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    price: 5.99,
    description: "Bold abstract art that makes a statement",
  },
  {
    id: "3",
    title: "Mountain Majesty",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    price: 4.99,
    description: "Majestic landscapes that inspire wanderlust",
  },
  {
    id: "4",
    title: "Ocean Dreams",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    price: 4.99,
    description: "Calming ocean scenes for peaceful moments",
  },
  {
    id: "5",
    title: "Urban Sketches",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    price: 5.99,
    description: "City life captured in artistic sketches",
  },
  {
    id: "6",
    title: "Floral Fantasy",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
    price: 4.99,
    description: "Beautiful botanical illustrations",
  },
]

export default function ProductCatalogue() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Styles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most loved AI art styles. Each postcard is unique and personalized just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
