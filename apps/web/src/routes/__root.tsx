import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "../index.css";

export type RouterAppContext = {};

export const Route = createRootRouteWithContext<RouterAppContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{
				title: "fabryscript",
			},
			{
				name: "description",
				content: "Fullstack Developer based in Sicily, Italy.",
			},
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg",
			},
		],
	}),
});

function RootComponent() {
	return (
		<>
			<HeadContent />
			<div className="grid h-svh grid-rows-[auto_1fr]">
				<Outlet />
			</div>
			<TanStackRouterDevtools position="bottom-left" />
		</>
	);
}
