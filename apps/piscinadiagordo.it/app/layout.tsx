"use client";

import { Montserrat, Karla } from "next/font/google";

import { Navbar } from "@piscinadiagordo/ui";

import { UseClient } from "../components";

const montserrat = Montserrat({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["400", "500", "600"],
	preload: true,
	display: "swap",
	variable: "--montserrat-font",
});
const karla = Karla({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["400", "500", "600"],
	preload: true,
	display: "swap",
	variable: "--karla-font",
});

import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${montserrat.variable} ${karla.variable}`}>
			<head />
			<body>
				<UseClient>
					<Navbar />
				</UseClient>
				{children}
			</body>
		</html>
	);
}
