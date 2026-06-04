"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Clock, Leaf, MapPin, Phone, Users, Check, PartyPopper, Heart, Smartphone } from "lucide-react";

export default function LandingPage() {
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
        { name: "Home", id: "hero" },
        { name: "Shop", id: "menu" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Malachi Clothing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "rotated-rays-static-grid" }}
      title="Discover Authentic African Cuisine"
      description="Indulge in the rich flavours of Africa, where tradition meets flair. From breakfast to a la carte, every bite tells a story at Heritage Lifestyle Restaurant."
      buttons={[{ text: "Order Online", href: "#contact" }]}
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/meatballs-with-vegetables-tomato-sauce_1220-7346.jpg", imageAlt: "Authentic Cuisine" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/interior-room-with-festive-easter-table_169016-5096.jpg", imageAlt: "Ambiance" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/assorted-northern-thai-style-food_1150-6329.jpg", imageAlt: "Signature Dishes" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/delicious-iced-coffee-arrangement-high-angle_23-2149600731.jpg", imageAlt: "Refreshing Drinks" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-baby-shower-concept_23-2148731320.jpg", imageAlt: "Events Venue" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/person-holding-bowl-mustard-seed-near-fresh-vegetables-container-black-wooden-table_23-2147944279.jpg", imageAlt: "Fresh Ingredients" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Culinary Heritage"
      metrics={[
        { label: "Fresh Ingredients", value: "100%", icon: Leaf },
        { label: "Traditional Recipes", value: "30+", icon: Award },
        { label: "Satisfied Guests", value: "5k+", icon: Users },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Fresh & Nutritious", description: "We source the finest local ingredients to create wholesome meals.", imageSrc: "http://img.b2bpic.net/free-photo/grated-red-cabbage-greens-carrots-bowl-marble_114579-65086.jpg", buttonIcon: Check },
        { title: "Catering Services", description: "Let us host your birthday celebrations, weddings, or corporate events.", imageSrc: "http://img.b2bpic.net/free-photo/meat-catering-table-event_8353-9847.jpg", buttonIcon: PartyPopper },
        { title: "Warm Atmosphere", description: "Providing a welcoming space that makes you feel right at home.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-people-chatting-indoors_23-2149365810.jpg", buttonIcon: Heart },
        { title: "Easy Ordering", description: "Download our app for convenient mobile ordering and exclusive updates.", imageSrc: "http://img.b2bpic.net/free-photo/still-life-delicious-fried-croquette-composition-with-smartphone_23-2149198994.jpg", buttonIcon: Smartphone },
      ]}
      title="Why Choose Us"
      description="Experience food that is not only delicious but also nutritious."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Traditional Stew", price: "R120", imageSrc: "http://img.b2bpic.net/free-photo/delicious-goulash-ready-dinner_23-2149370843.jpg" },
        { id: "2", name: "Savory Skewers", price: "R95", imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-dish-poutine_23-2149486033.jpg" },
        { id: "3", name: "Garden Salad", price: "R85", imageSrc: "http://img.b2bpic.net/free-photo/man-hands-holding-big-deep-plate-full-healthy-paleo-vegetarian-salad-made-from-fresh-organic-biological-ingredients-vegetables-fruits-berries-other-nutritional-things_346278-1353.jpg" },
        { id: "4", name: "Signature Pasta", price: "R110", imageSrc: "http://img.b2bpic.net/free-photo/rotini-pasta-salad-with-arugula-cherry-tomatoes-healthy-summer-dish_53876-103649.jpg" },
        { id: "5", name: "Fresh Fruit Cooler", price: "R45", imageSrc: "http://img.b2bpic.net/free-photo/two-glasses-refreshing-green-juice-with-ice-mint-leaves_84443-94480.jpg" },
        { id: "6", name: "Traditional Dessert", price: "R60", imageSrc: "http://img.b2bpic.net/free-photo/delicious-sweet-homemade-desserts_140725-114786.jpg" },
      ]}
      title="Our Signature Menu"
      description="Explore a variety of traditional recipes reflecting African culinary roots."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardOne
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "Daily", title: "Mon - Sun", description: "08:00 – 02:00", icon: Clock },
        { id: "2", value: "Arcadia", title: "Location", description: "213 Eastwood St, Pretoria", icon: MapPin },
        { id: "3", value: "Contact", title: "WhatsApp", description: "012 994 4342", icon: Phone },
      ]}
      title="Hours of Operation"
      description="Visit us seven days a week for an unforgettable experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah J.", handle: "@sarahj", testimonial: "The atmosphere is so charming and the food is absolutely authentic!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-playful-woman-acting-childish-while-sitting-with-friends-home-enjoying-leisure-activity-positive-multiracial-group-people-living-room-relaxing-together-while-playing-boardgames_482257-49810.jpg" },
        { id: "2", name: "Michael K.", handle: "@mke", testimonial: "Best African dishes in Pretoria. Highly recommend the signature stew.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517442.jpg" },
        { id: "3", name: "Emily R.", handle: "@emilyr", testimonial: "Such a warm welcoming place, perfect for our birthday celebration.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-having-cocktails_23-2150244939.jpg" },
        { id: "4", name: "David M.", handle: "@dm", testimonial: "Great prices and wonderful service every time we visit.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/small-business-concept-handsome-businessman-cafe-owner-sitting-near-counter-with-laptop-smartphone-working-coffee-shop_1258-314430.jpg" },
        { id: "5", name: "Lisa G.", handle: "@lisag", testimonial: "Authentic flavors that truly taste like home. Fantastic experience.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/boy-having-beer-restaurant_23-2148172694.jpg" },
      ]}
      showRating={true}
      title="Guest Reviews"
      description="See what our cherished guests have to say about their experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Do you accept bookings?", content: "Yes, we accept bookings for all occasions. Please contact us on WhatsApp to secure your table." },
        { id: "2", title: "Do you provide catering?", content: "Absolutely! We cater for birthday celebrations, weddings, and corporate events." },
        { id: "3", title: "Are you open on weekends?", content: "Yes, we are open every day from 08:00 to 02:00 including weekends." },
      ]}
      title="Frequently Asked"
      faqsAnimation="blur-reveal"
      description="Answers to commonly asked questions about our restaurant."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Visit Us"
      title="Get in Touch"
      description="We love our customers, so feel free to visit during normal business hours. Send us an email or message us on WhatsApp."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Malachi Clothing"
      columns={[
        {
          title: "Navigate",          items: [
            { label: "Shop", href: "#menu" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Support",          items: [
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
