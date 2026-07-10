import { notFound } from "next/navigation";
import { brandsData, BrandSlug } from "../data/brands";
import ProductCard from "../components/ProductsCard";
import { TextParallaxContentExample } from "../components/hero-products";

export default async function BrandProductsPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: brandSlug } = await params;
  const brand = brandsData[brandSlug as BrandSlug];

  if (!brand) notFound();

  return (
    <>
      {/* Hero Section — now uses the parallax component with brand data */}
      <TextParallaxContentExample
        imgUrl={brand.heroImage}
        subheading={brand.name}
        heading={brand.description}
      />

      {/* Products Grid Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-semibold text-[#2E3626] md:text-5xl">
              {brand.name} Products
            </h2>
            <p className="mt-4 text-gray-600">
              Explore our full range of {brand.name} products
            </p>
          </div>

          {brand.products.length === 0 ? (
            <p className="text-center text-gray-500">
              No products found for this brand yet.
            </p>
          ) : (
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {brand.products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  image={product.image}
                  slug={brand.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
