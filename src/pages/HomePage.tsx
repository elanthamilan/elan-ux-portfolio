import React, { useEffect, useState } from 'react';
import HeroWithSkills from '../components/sections/Hero.tsx';
import Footer from '../components/layout/Footer.tsx';
import Header from '../components/layout/Header.tsx';
import ScrollToTop from '@/components/ui/ScrollToTop.tsx';

const HomePage = () => {
	const [isThemeInitialized, setIsThemeInitialized] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Initialize theme
		const initializeTheme = () => {
			try {
				const savedTheme = localStorage.getItem('theme');
				const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
				const initialTheme = savedTheme || systemTheme;
				document.documentElement.classList.toggle('dark', initialTheme === 'dark');
				setIsThemeInitialized(true);
			} catch (error) {
				console.error('Error initializing theme:', error);
				// Fallback to light theme if there's an error
				document.documentElement.classList.remove('dark');
				setIsThemeInitialized(true);
			}
		};

		// Initialize theme and handle loading state
		initializeTheme();
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 500); // Add a small delay to ensure smooth transition

		return () => clearTimeout(timer);
	}, []);

	if (!isThemeInitialized || isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-background">
				<div className="animate-pulse flex flex-col items-center space-y-4">
					<div className="h-12 w-12 rounded-full bg-primary/20"></div>
					<div className="h-4 w-32 bg-primary/20 rounded"></div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
			<Header />
			<main className="flex-1 p-6 mb-6">
				{/* <HeroSection /> */}
				<HeroWithSkills />
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default HomePage;
