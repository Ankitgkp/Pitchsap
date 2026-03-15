"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Badge } from './badge';
import { CheckIcon } from 'lucide-react';

function FilledCheck() {
	return (
		<div className="bg-primary text-primary-foreground rounded-full p-0.5">
			<CheckIcon className="size-3" strokeWidth={3} />
		</div>
	);
}

export function BentoCard({
	titleBadge,
	title,
	description,
	features = [],
	cta = 'Learn More',
	className,
	icon: Icon,
}) {
	return (
		<div
			className={cn(
				'bg-background border-foreground/10 relative overflow-hidden rounded-xl border flex flex-col',
				'supports-[backdrop-filter]:bg-background/10 backdrop-blur-md',
				className,
			)}
		>
			<div className="flex items-center gap-3 p-4">
				<Badge variant="secondary" className="uppercase tracking-wider">{titleBadge}</Badge>
				{Icon && (
					<Badge variant="outline" className="hidden lg:flex">
						<Icon className="me-1 size-3" /> Featured
					</Badge>
				)}
				<div className="ml-auto">
					<Button variant="outline" size="sm">{cta}</Button>
				</div>
			</div>

			<div className="px-4 pb-2">
				<h3 className="text-xl font-bold tracking-tight text-white/90">
					{title}
				</h3>
				{description && (
					<p className="text-muted-foreground text-sm mt-1 leading-relaxed">
						{description}
					</p>
				)}
			</div>

			{features.length > 0 && (
				<ul className="text-muted-foreground grid gap-4 p-4 text-sm mt-auto">
					{features.map((f, i) => (
						<li key={i} className="flex items-center gap-3">
							<FilledCheck />
							<span className="leading-relaxed">{f}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export function BentoGridsContent({ children, className }) {
	return (
		<div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8", className)}>
			{children}
		</div>
	);
}
