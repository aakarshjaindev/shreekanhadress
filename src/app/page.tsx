import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
      <Environment preset="sunset" />
    </>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const productRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(productRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    });
  });

  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={heroRef}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Discover Divine{" "}
                <span className="text-orange-600">Krishna Poshak</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Exquisite traditional clothing crafted with devotion and premium
                materials.
              </p>
              <Link
                href="/products"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Explore Collection
              </Link>
            </div>
            <div ref={productRef} className="h-[500px]">
              <Canvas>
                <Scene />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Dhoti", "Kurta", "Accessories"].map((category) => (
              <div
                key={category}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">
                    Explore our collection of premium{" "}
                    {category.toLowerCase()}
                  </p>
                  <Link
                    href={`/categories/${category.toLowerCase()}`}
                    className="text-orange-600 font-semibold hover:text-orange-700"
                  >
                    View Collection →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Choose Krishna Poshak?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description:
                  "Handcrafted with the finest materials and attention to detail",
              },
              {
                title: "Traditional Design",
                description:
                  "Authentic designs that respect and preserve our cultural heritage",
              },
              {
                title: "Modern Comfort",
                description:
                  "Contemporary comfort meets traditional aesthetics",
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
