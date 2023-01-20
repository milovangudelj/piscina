import { ComponentProps, ComponentType, ReactElement, ReactNode } from "react";
import { Icon, type IconProps } from "phosphor-react";
import { cva, type VariantProps } from "cva";

const buttonVariants = cva(
	[
		"text-sans",
		"font-medium",
		"select-none",
		"border-2",
		"rounded",
		"h-fit",
		"inline-flex",
		"items-center",
		"transition",
		"disabled:opacity-50",
		"disabled:pointer-events-none",
	],
	{
		variants: {
			intent: {
				primary: [],
				accent: [],
				blue: [],
				red: [],
				zinc: [],
			},
			variant: {
				filled: ["text-white"],
				outlined: ["bg-transparent", "border-current"],
				text: ["bg-transparent", "border-transparent"],
			},
			size: {
				small: ["text-sm", "py-1", "px-1.5", "leading-4", "gap-1"],
				medium: ["text-base", "py-1.5", "px-2", "leading-5", "gap-1"],
				large: ["text-lg", "py-2", "px-2.5", "leading-6", "gap-1.5"],
			},
		},
		compoundVariants: [
			{
				intent: "primary",
				variant: "filled",
				className: [
					"bg-primary-500",
					"border-primary-500",
					"hover:bg-primary-400",
					"hover:border-primary-400",
					"active:bg-primary-600",
					"active:border-primary-600",
				],
			},
			{
				intent: "primary",
				variant: ["outlined", "text"],
				className: [
					"text-primary-500",
					"hover:bg-primary-500/5",
					"active:bg-primary-500/10",
				],
			},
			{
				intent: "accent",
				variant: "filled",
				className: [
					"bg-accent-500",
					"border-accent-500",
					"hover:bg-accent-400",
					"hover:border-accent-400",
					"active:bg-accent-600",
					"active:border-accent-600",
				],
			},
			{
				intent: "accent",
				variant: ["outlined", "text"],
				className: [
					"text-accent-500",
					"hover:bg-accent-500/5",
					"active:bg-accent-500/10",
				],
			},
			{
				intent: "blue",
				variant: "filled",
				className: [
					"bg-blue-500",
					"border-blue-500",
					"hover:bg-blue-400",
					"hover:border-blue-400",
					"active:bg-blue-600",
					"active:border-blue-600",
				],
			},
			{
				intent: "blue",
				variant: ["outlined", "text"],
				className: [
					"text-blue-500",
					"hover:bg-blue-500/5",
					"active:bg-blue-500/10",
				],
			},
			{
				intent: "red",
				variant: "filled",
				className: [
					"bg-red-500",
					"border-red-500",
					"hover:bg-red-400",
					"hover:border-red-400",
					"active:bg-red-600",
					"active:border-red-600",
				],
			},
			{
				intent: "red",
				variant: ["outlined", "text"],
				className: [
					"text-red-500",
					"hover:bg-red-500/5",
					"active:bg-red-500/10",
				],
			},
			{
				intent: "zinc",
				variant: "filled",
				className: [
					"bg-zinc-500",
					"border-zinc-500",
					"hover:bg-zinc-400",
					"hover:border-zinc-400",
					"active:bg-zinc-600",
					"active:border-zinc-600",
				],
			},
			{
				intent: "zinc",
				variant: ["outlined", "text"],
				className: [
					"text-zinc-500",
					"hover:bg-zinc-500/5",
					"active:bg-zinc-500/10",
				],
			},
		],
		defaultVariants: {
			intent: "primary",
			size: "large",
			variant: "filled",
		},
	}
);

export interface ButtonProps
	extends ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	LeftIcon?: Icon;
	RightIcon?: Icon;
}

export const Button = ({
	children,
	intent,
	size,
	variant,
	className,
	LeftIcon,
	RightIcon,
	...props
}: ButtonProps) => {
	return (
		<button
			className={buttonVariants({ intent, size, variant, className })}
			{...props}
		>
			{LeftIcon && (
				<LeftIcon
					size={size === "small" ? 16 : 20}
					weight={size === "small" ? "regular" : "bold"}
				/>
			)}
			<span>{children ?? "Button"}</span>
			{RightIcon && (
				<RightIcon
					size={size === "small" ? 16 : 20}
					weight={size === "small" ? "regular" : "bold"}
				/>
			)}
		</button>
	);
};

Button.displayName = "Button";
