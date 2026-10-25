import { LinkedinIcon } from "@hugeicons/core-free-icons";
import GithubIcon from "@hugeicons/core-free-icons/GithubIcon";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@portfolio-v2/ui/components/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@portfolio-v2/ui/components/card";
import { cn } from "@portfolio-v2/ui/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { GlobeIcon } from "lucide-react";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 30 * 12;
const EXPERIENCES = [
	{
		name: "aweshome.ai",
		description:
			"Played a key role in developing aweshome.ai, a proprietary SaaS platform by nabla.studio, delivering core full-stack features and shaping its AWS infrastructure.",
		src: "/aweshome.png",
		webUrl: "https://aweshome.ai",
		linkedinUrl: "https://www.linkedin.com/company/aweshome",
	},
	{
		name: "osmosis.zone",
		description:
			"Regularly contributed to the Osmosis DEX platform alongside nabla.studio, building new features, optimizing performance, and completing bounty initiatives.",
		src: "/osmosis.png",
		webUrl: "https://osmosis.zone",
		ghUrl: "https://github.com/osmosis-labs/osmosis-frontend",
		linkedinUrl: "https://www.linkedin.com/company/osmosis-dex",
	},
	{
		name: "italianmasterleague.com",
		description:
			"Built the platform powering the Italian Master League circuit from the ground up, currently handling 15K+ tournament entries and 400+ active players with integrated user and tournament management systems.",
		src: "/iml.png",
		webUrl: "https://italianmasterleague.com",
	},
	/* {
		name: "playarias.com",
		description:
			"Built a full-fledged Yu-Gi-Oh! simulator and social network for players worldwide.",
		src: "/iml.png",
		webUrl: "https://playarias.com",
	}, */
	{
		name: "polaris.app",
		description:
			"Contributed to the Polaris app alongside nabla.studio, building features to power cross-chain swaps across multiple blockchain ecosystems.",
		src: "/polaris.png",
		webUrl: "https://x.com/Polaris_App",
	},
];

function HomeComponent() {
	const now = Date.now();
	const start = new Date("2021-01-01").getTime();

	const diff = (now - start) / ONE_YEAR_MS;

	return (
		<div className="relative flex grid-cols-2 flex-col gap-10 px-4 pt-10 lg:grid lg:overflow-hidden">
			<img
				src="/sig.svg"
				width={768}
				height={768}
				alt=""
				className="size-124 max-h-screen select-none lg:size-176 2xl:size-248"
			/>
			<div className="no-scrollbar relative flex flex-col gap-8 overflow-y-scroll py-8">
				<div className="flex w-full flex-col justify-between gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="font-semibold text-3xl">Full-Stack Developer</h1>
						<span>based in Sicily, Italy</span>
						<p className="flex flex-col gap-4 text-muted-foreground">
							<span>
								Hi! I'm Fabrizio, a freelance full-stack developer with{" "}
								{diff.toPrecision(1)} years of experience building SaaS, IMS,
								and booking platforms.
							</span>
							<span>
								My primary stack centers around Node.js and TypeScript,
								complemented by experience with Vue.js, Go, and C#.
							</span>
							<span>
								I have extensive experience working with databases such as
								PostgreSQL, SQLite, MongoDB, and Firestore.
							</span>
							<span>
								Beyond code, I design and maintain scalable infrastructure using
								Infrastructure as Code (IaC), Docker, Cloudflare, and AWS.
							</span>
						</p>
						<div className="flex items-center justify-between pt-4">
							<div className="flex items-center gap-2">
								<a href="mailto:fabrizioemanuelepiperno@gmail.com">
									<Button size="lg">Get in touch</Button>
								</a>
								<a href="/cv.pdf" download>
									<Button size="lg" variant="outline">
										Download CV
									</Button>
								</a>
							</div>
							<div className="flex items-center gap-2">
								<a
									href="https://github.com/fabryscript"
									target="_blank"
									rel="noopener"
								>
									<Button size="lg" variant="outline">
										<HugeiconsIcon icon={GithubIcon} />
									</Button>
								</a>
								<a
									href="https://www.linkedin.com/in/fabryscript/"
									target="_blank"
									rel="noopener"
								>
									<Button size="lg" variant="outline">
										<HugeiconsIcon icon={LinkedinIcon} />
									</Button>
								</a>
							</div>
						</div>
					</div>
					<div />
				</div>
				<div className="flex w-full flex-col gap-2">
					<h2 className="font-semibold text-2xl">Experience</h2>
					<div className="relative flex flex-col gap-4 p-0.5 before:absolute before:top-3 before:bottom-3 before:left-3 before:w-px before:bg-border">
						{EXPERIENCES.map(
							({ name, description, src, webUrl, ghUrl, linkedinUrl }) => (
								<div
									key={name}
									className="relative flex items-stretch gap-4 pl-0.5"
								>
									<div className="z-10 flex w-5 shrink-0 items-start justify-center pt-4">
										<div className="size-6 min-w-6 rounded-full border bg-background" />
									</div>
									<Card className="group/experience relative w-full items-center gap-0 rounded-lg bg-background p-0 lg:flex-row">
										<img
											className="w-full shrink-0 rounded-none! object-cover max-lg:max-h-60 lg:w-40"
											src={src}
											alt={name}
										/>
										<CardHeader className="w-full min-w-0 gap-1 px-4 py-3">
											<CardTitle className="truncate text-lg">{name}</CardTitle>
											<CardDescription className="text-sm">
												{description}
											</CardDescription>
										</CardHeader>
										<CardFooter className="w-full px-1 pb-2 lg:hidden">
											<a
												href={webUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`Website of ${name}`}
												className="rounded-md p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
											>
												<Button variant="ghost">
													<GlobeIcon aria-hidden="true" />
												</Button>
											</a>
											<a
												href={ghUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`GitHub of ${name}`}
												className={cn(
													"rounded-md p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
													{
														"cursor-not-allowed opacity-60": !ghUrl,
													},
												)}
											>
												<Button variant="ghost">
													<HugeiconsIcon icon={GithubIcon} aria-hidden="true" />
												</Button>
											</a>
											<a
												href={linkedinUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`LinkedIn of ${name}`}
												className={cn(
													"rounded-md p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
													{
														"cursor-not-allowed opacity-60": !linkedinUrl,
													},
												)}
											>
												<Button variant="ghost">
													<HugeiconsIcon
														icon={LinkedinIcon}
														aria-hidden="true"
													/>
												</Button>
											</a>
										</CardFooter>
										<div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center gap-6 rounded-lg bg-background/90 opacity-0 backdrop-blur-sm transition-opacity group-focus-within/experience:pointer-events-auto group-focus-within/experience:opacity-100 group-hover/experience:pointer-events-auto group-hover/experience:opacity-100 lg:flex">
											<a
												href={webUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`Website of ${name}`}
												className="rounded-md p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
											>
												<GlobeIcon aria-hidden="true" />
											</a>
											<a
												href={ghUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`GitHub of ${name}`}
												className={cn(
													"rounded-md p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
													{
														"cursor-not-allowed opacity-60": !ghUrl,
													},
												)}
											>
												<HugeiconsIcon icon={GithubIcon} aria-hidden="true" />
											</a>
											<a
												href={linkedinUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`LinkedIn of ${name}`}
												className={cn(
													"rounded-md p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
													{
														"cursor-not-allowed opacity-60": !linkedinUrl,
													},
												)}
											>
												<HugeiconsIcon icon={LinkedinIcon} aria-hidden="true" />
											</a>
										</div>
									</Card>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
