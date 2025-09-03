import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, ShoppingBag, Calendar, Search, MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import QuickSearchBar from '../components/QuickSearchBar';
import FeaturedDestinations from '../components/FeaturedDestinations';
import FeatureHighlights from '../components/FeatureHighlights';

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <QuickSearchBar />
      <FeaturedDestinations />
      <FeatureHighlights />
    </div>
  );
}