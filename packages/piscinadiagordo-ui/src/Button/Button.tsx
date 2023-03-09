import { ComponentProps, ElementType, ReactNode } from "react";
import { Icon, type IconProps } from "@phosphor-icons/react";
import { cva, type VariantProps } from "cva";

const buttonVariants = cva(["btn"], {
	variants: {
		intent: {
			primary: ["btn-primary"],
			secondary: ["btn-secondary"],
			success: ["btn-success"],
			error: ["btn-error"],
			gray: ["btn-gray"],
		},
		fullWidth: {
			true: ["w-full"],
			false: ["w-fit"],
		},
		disabled: {
			true: ["opacity-50", "pointer-events-none"],
		},
	},
	compoundVariants: [],
	defaultVariants: {
		intent: "primary",
	},
});

export interface ButtonProps<T extends ElementType = "button">
	extends VariantProps<typeof buttonVariants> {
	leftIcon?: ReactNode | Icon;
	rightIcon?: ReactNode | Icon;
	as?: T;
	loading?: boolean;
}

export const Button = <T extends ElementType = "button">({
	children,
	intent,
	loading,
	disabled,
	fullWidth,
	className,
	leftIcon,
	rightIcon,
	as,
	...props
}: ButtonProps<T> & Omit<ComponentProps<T>, keyof ButtonProps<T>>) => {
	const Component = as || "button";
	const LIcon = leftIcon as ElementType;
	const RIcon = rightIcon as ElementType;

	return (
		<Component
			className={buttonVariants({
				intent,
				fullWidth,
				disabled: disabled || loading,
				className,
			})}
			disabled={disabled || loading}
			tabIndex={disabled || loading ? -1 : 0}
			{...props}
		>
			{loading && (
				<svg
					className={`absolute h-5 w-5 motion-safe:animate-spin`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
			<span className={`${loading ? "invisible" : ""} flex items-center`}>
				{leftIcon && <LIcon size={20} weight={"bold"} />}
				<span>{children ?? "Button"}</span>
				{rightIcon && <RIcon size={20} weight={"bold"} />}
			</span>
		</Component>
	);
};

Button.displayName = "Button";
