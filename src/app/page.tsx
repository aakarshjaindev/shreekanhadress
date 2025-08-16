"use client";
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
      <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/WhatsApp Video 2025-07-10 at 22.06.37_35eb764b.mp4"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={heroRef} className="bg-white/80 rounded-xl p-8 shadow-lg">
              <Image
                src="/logo.png"
                alt="Krishna Poshak Logo"
                width={120}
                height={120}
                className="mb-6 rounded-full shadow-lg"
                priority
              />
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 text-center">
                🌟 Roshan ho gaye Kanha Ji 🌟
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Brighten Your Devotion with Handmade LED Dresses for Laddu Gopal Ji</h2>
              <p className="mb-6 text-center text-gray-700">Shop our unique LED light dresses to bring a glow to your Kanha Ji's charm! Each dress includes a beautifully crafted <strong>mukut</strong> (crown) as well.</p>
              <Link
                href="#shop"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get for Free
              </Link>
            </div>
            <div ref={productRef} className="h-[500px] flex flex-col items-center justify-center bg-white/80 rounded-xl p-8 shadow-lg">
              <div className="flex flex-wrap gap-4 justify-center mb-4">
                <Image src="/demopic1.jpg" alt="Featured Product" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/demopic1 (1) (1).jpg" alt="Product 2" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/demopic1 (1) (2).jpg" alt="Product 3" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/demopic1 (1) (1) (1).jpg" alt="Product 4" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/demopic2 (1) (1).jpg" alt="Product 5" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/demopic2 (1) (1) (1).jpg" alt="Product 6" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/demo3 (1).jpg" alt="Product 7" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/demo3 (2).jpg" alt="Product 8" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/logo.jpg" alt="Product 9" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
                <Image src="/photo-collage.png.png" alt="Product 10" width={150} height={150} className="rounded-xl shadow object-cover" style={{ maxHeight: 150 }} />
              </div>
              <Canvas style={{ width: 350, height: 200 }}>
                <Scene />
              </Canvas>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 z-5 pointer-events-none" />
      </section>

      <section id="shop" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700 drop-shadow-md">
            Our Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Golden Glow Dress */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Image src="/demopic1.jpg" alt="Golden Glow Dress" width={220} height={220} className="rounded mb-4 object-cover" />
              <h4 className="text-lg font-semibold text-gray-900">Golden Glow Dress</h4>
              <p className="text-blue-700 font-bold mb-2">Free</p>
              <p className="text-gray-800">Available for free!</p>
            </div>
            {/* Royal Blue Shine */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Image src="/demopic2 (1) (1).jpg" alt="Royal Blue Shine" width={220} height={220} className="rounded mb-4 object-cover" />
              <h4 className="text-lg font-semibold text-gray-900">Royal Blue Shine</h4>
              <p className="text-blue-700 font-bold mb-2">Free</p>
              <p className="text-gray-800">Available for free!</p>
            </div>
            {/* Pink Sparkle Delight */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <Image src="/demopic1 (1) (2).jpg" alt="Pink Sparkle Delight" width={220} height={220} className="rounded mb-4 object-cover" />
              <h4 className="text-lg font-semibold text-gray-900">Pink Sparkle Delight</h4>
              <p className="text-blue-700 font-bold mb-2">Free</p>
              <p className="text-gray-800">Available for free!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-700">
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
                <p className="text-gray-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-10 px-4 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h3>
        <p className="mb-2 text-gray-900">📞 Phone: +91-9560594751</p>
        <p className="mb-2 text-gray-900">📱 WhatsApp: <a href="https://wa.me/919560594751" className="text-blue-700 underline font-semibold">Chat on WhatsApp</a></p>
        <p className="mb-2 text-gray-900">📸 Instagram: <a href="https://instagram.com/shreekanhadress" className="text-blue-700 underline font-semibold">@shreekanhadress</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm">
        © 2025 Shree Kanha Dress. All rights reserved.
      </footer>

    </div>
  );
}
