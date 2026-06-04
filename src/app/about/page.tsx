"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import SplitAbout from '@/components/sections/about/SplitAbout';
import { Utensils, ChefHat, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/pricing" },
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ]}
            brandName="Malachi Clothing"
          />
        </div>

        <div id="about-content" data-section="about-content">
          <SplitAbout
            useInvertedBackground={false}
            textboxLayout="default"
            imagePosition="right"
            title="Our Story & Philosophy"
            description="Heritage Lifestyle Restaurant was founded with a passion for authentic African cuisine and a vision to create a welcoming space where culture and flavors intertwine. We believe in celebrating our rich culinary traditions while offering a modern dining experience."
            bulletPoints={[
              { title: "Authentic Recipes", description: "Our chefs meticulously prepare dishes using time-honored family recipes.", icon: Utensils },
              { title: "Fresh Sourcing", description: "We partner with local farmers to ensure the freshest ingredients from farm to table.", icon: Leaf },
              { title: "Culinary Excellence", description: "Dedicated to providing an exceptional dining experience with every dish.", icon: ChefHat },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/chefs-restaurant-kitchen_1303-12828.jpg"
            imageAlt="Chefs in a kitchen"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Malachi Clothing"
            columns={[
              {
                title: "Navigate",                items: [
                  { label: "Shop", href: "/pricing" },
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Support",                items: [
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ],
              },
            ]}
            copyrightText="© 2025 Malachi Clothing - All Rights Reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}