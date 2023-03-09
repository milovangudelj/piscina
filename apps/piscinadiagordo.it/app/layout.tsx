"use client";

import { Navbar } from "@piscinadiagordo/ui";

import { UseClient } from "../components";

import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
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
