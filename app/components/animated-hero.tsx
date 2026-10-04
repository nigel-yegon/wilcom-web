"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import FadeIn from "./fade-in";

/* -------------------------------------------------------------------------- */
/* Animated counter                                                           */
/* -------------------------------------------------------------------------- */

function CountUp({
    to,
    duration = 1.4,
    suffix = "",
}: {
    to: number;
    duration?: number;
    suffix?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let raf = 0;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.round(eased * to));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, to, duration]);

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    );
}

/* -------------------------------------------------------------------------- */
/* Magnetic CTA                                                               */
/* -------------------------------------------------------------------------- */

function MagneticLink({
    href,
    children,
    variant = "primary",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "ghost";
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 250, damping: 18 });
    const sy = useSpring(y, { stiffness: 250, damping: 18 });

    function handleMove(e: React.MouseEvent) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        x.set(relX * 0.15);
        y.set(relY * 0.25);
    }

    function handleLeave() {
        x.set(0);
        y.set(0);
    }

    const base =
        "relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold transition-colors";
    const styles =
        variant === "primary"
            ? "bg-brand-600 hover:bg-brand-700 text-white"
            : "border border-ink-300 dark:border-ink-700 hover:border-brand-500";

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ x: sx, y: sy }}
            className={`${base} ${styles}`}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.a>
    );
}

/* -------------------------------------------------------------------------- */
/* Mouse-parallax hook                                                        */
/* -------------------------------------------------------------------------- */

function useParallax(containerRef: React.RefObject<HTMLElement | null>) {
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
    const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });

    const [enabled, setEnabled] = useState(false);
    const [intensity, setIntensity] = useState(1);

    useEffect(() => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (isTouch || reducedMotion) return;
        setEnabled(true);

        const updateIntensity = () => {
            const w = window.innerWidth;
            if (w < 640) setIntensity(0.4);
            else if (w < 1024) setIntensity(0.7);
            else setIntensity(1);
        };
        updateIntensity();

        const onMove = (e: MouseEvent) => {
            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width;
            const relY = (e.clientY - rect.top) / rect.height;

            rawX.set((relX - 0.5) * 2);
            rawY.set((relY - 0.5) * 2);
        };

        const onLeave = () => {
            rawX.set(0);
            rawY.set(0);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseleave", onLeave);
        window.addEventListener("resize", updateIntensity);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("resize", updateIntensity);
        };
    }, [containerRef, rawX, rawY]);

    return { x, y, enabled, intensity };
}

/* -------------------------------------------------------------------------- */
/* Parallax layer                                                             */
/* -------------------------------------------------------------------------- */

function ParallaxLayer({
    x,
    y,
    intensity,
    depth,
    enabled,
    className,
    children,
}: {
    x: ReturnType<typeof useSpring>;
    y: ReturnType<typeof useSpring>;
    intensity: number;
    depth: number;
    enabled: boolean;
    className?: string;
    children: React.ReactNode;
}) {
    const AMP_X = 24;
    const AMP_Y = 18;

    const tx = useTransform(x, (v) => v * AMP_X * depth * intensity);
    const ty = useTransform(y, (v) => v * AMP_Y * depth * intensity);

    return (
        <motion.div
            style={enabled ? { x: tx, y: ty } : undefined}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* Circuit background                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Generates a set of circuit traces with animated "data pulses" traveling
 * along them. Deterministic seed so the layout doesn't reshuffle on re-render.
 */
function CircuitBackground({ active }: { active: boolean }) {
    // Precomputed paths — one grid of orthogonal traces with right-angle turns,
    // mimicking PCB routing.
    const traces = useMemo(
        () => [
            // Horizontal traces
            { d: "M -20 80 H 320 L 360 120 H 900 L 940 80 H 1200", dur: 6.5, delay: 0 },
            { d: "M -20 220 H 200 L 240 260 H 700 L 740 220 H 1200", dur: 8, delay: 1.2 },
            { d: "M -20 380 H 260 L 300 420 H 900 L 940 380 H 1200", dur: 7.2, delay: 2.4 },
            { d: "M -20 540 H 180 L 220 500 H 640 L 680 540 H 1200", dur: 9, delay: 0.8 },
            { d: "M -20 700 H 320 L 360 660 H 900 L 940 700 H 1200", dur: 7.8, delay: 3.1 },

            // Vertical traces
            { d: "M 140 -20 V 180 L 180 220 V 480 L 140 520 V 900", dur: 8.4, delay: 1.6 },
            { d: "M 400 -20 V 260 L 440 300 V 560 L 400 600 V 900", dur: 6.8, delay: 0.4 },
            { d: "M 660 -20 V 200 L 700 240 V 520 L 660 560 V 900", dur: 9.6, delay: 2.2 },
            { d: "M 920 -20 V 240 L 960 280 V 580 L 920 620 V 900", dur: 7.4, delay: 1.0 },

            // Diagonals
            { d: "M -40 400 L 180 620 L 420 620 L 520 720", dur: 8.8, delay: 2.8 },
            { d: "M 1240 200 L 1000 440 L 760 440 L 680 520", dur: 9.4, delay: 1.4 },
        ],
        [],
    );

    // Nodes: small circles at trace intersections/joints.
    const nodes = useMemo(
        () => [
            { cx: 320, cy: 80, r: 3 },
            { cx: 200, cy: 220, r: 3 },
            { cx: 260, cy: 380, r: 3 },
            { cx: 180, cy: 540, r: 3 },
            { cx: 320, cy: 700, r: 3 },
            { cx: 180, cy: 220, r: 2.5 },
            { cx: 440, cy: 300, r: 2.5 },
            { cx: 700, cy: 240, r: 2.5 },
            { cx: 960, cy: 280, r: 2.5 },
            { cx: 900, cy: 120, r: 3 },
            { cx: 740, cy: 220, r: 3 },
            { cx: 940, cy: 380, r: 3 },
            { cx: 640, cy: 540, r: 3 },
            { cx: 900, cy: 700, r: 3 },
            { cx: 180, cy: 620, r: 3 },
            { cx: 520, cy: 720, r: 3 },
        ],
        [],
    );

    return (
        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
            {/* Base traces — faint strokes */}
            {traces.map((trace, i) => (
                <path
                    key={`base-${i}`}
                    d={trace.d}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-brand-500/10 dark:text-brand-300/15"
                />
            ))}

            {/* Animated pulse traveling along each trace */}
            {active &&
                traces.map((trace, i) => (
                    <motion.path
                        key={`pulse-${i}`}
                        d={trace.d}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="60 4000"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -4000 }}
                        transition={{
                            duration: trace.dur,
                            repeat: Infinity,
                            ease: "linear",
                            delay: trace.delay,
                        }}
                        className="text-brand-500/70 dark:text-brand-300/70"
                        style={{
                            filter: "drop-shadow(0 0 4px currentColor)",
                        }}
                    />
                ))}

            {/* Nodes — pulsing */}
            {nodes.map((node, i) => (
                <motion.circle
                    key={`node-${i}`}
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="currentColor"
                    className="text-brand-500/50 dark:text-brand-300/60"
                    animate={
                        active
                            ? {
                                  opacity: [0.2, 0.9, 0.2],
                                  scale: [1, 1.4, 1],
                              }
                            : { opacity: 0.2 }
                    }
                    transition={{
                        duration: 3 + (i % 4),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i % 6) * 0.4,
                    }}
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                />
            ))}
        </svg>
    );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export default function AnimatedHero() {
    const heroRef = useRef<HTMLElement>(null);
    const { x, y, enabled, intensity } = useParallax(heroRef);

    const rotateX = useTransform(y, (v) => v * -3 * intensity);
    const rotateY = useTransform(x, (v) => v * 3 * intensity);

    // Pause circuit animation when the tab loses focus, to save CPU.
    const [focused, setFocused] = useState(true);
    useEffect(() => {
        const onVis = () => setFocused(!document.hidden);
        document.addEventListener("visibilitychange", onVis);
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);

    const headlineTop = ["Transforming institutions through strategy,"];
    const headlineAccent = "technology & execution";

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative isolate overflow-hidden px-6 py-24 md:py-32 lg:py-36"
        >
            {/* Animated background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Base wash */}
                <div className="absolute inset-0 bg-linear-to-br from-white via-ink-50 to-white dark:from-ink-950 dark:via-ink-950 dark:to-ink-900" />

                {/* Blob 1 — deepest parallax layer */}
                <ParallaxLayer
                    x={x}
                    y={y}
                    intensity={intensity}
                    depth={1.6}
                    enabled={enabled}
                    className="absolute -top-40 -left-40"
                >
                    <motion.div
                        animate={{
                            x: ["-8%", "8%", "-8%"],
                            y: ["-6%", "10%", "-6%"],
                            opacity: [0.35, 0.5, 0.35],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-152 w-152 rounded-full bg-brand-600 blur-3xl dark:bg-brand-500"
                    />
                </ParallaxLayer>

                {/* Blob 2 — deepest parallax layer, opposite direction */}
                <ParallaxLayer
                    x={x}
                    y={y}
                    intensity={intensity}
                    depth={-1.4}
                    enabled={enabled}
                    className="absolute -bottom-40 -right-40"
                >
                    <motion.div
                        animate={{
                            x: ["10%", "-8%", "10%"],
                            y: ["8%", "-10%", "8%"],
                            opacity: [0.3, 0.45, 0.3],
                        }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-136 w-136 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-400/15"
                    />
                </ParallaxLayer>

                {/* Circuit traces + pulses — mid-depth parallax */}
                <ParallaxLayer
                    x={x}
                    y={y}
                    intensity={intensity}
                    depth={0.8}
                    enabled={enabled}
                    className="absolute inset-0 opacity-70 dark:opacity-60"
                >
                    <CircuitBackground active={focused} />
                </ParallaxLayer>

                {/* Grid overlay — mid depth, drifts slightly with cursor */}
                <ParallaxLayer
                    x={x}
                    y={y}
                    intensity={intensity}
                    depth={0.5}
                    enabled={enabled}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                            maskImage:
                                "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                        }}
                    />
                </ParallaxLayer>

                {/* Vignette to keep edges quiet */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/60 dark:to-ink-950/60" />

                {/* Radial fade so circuits don't dominate the center */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, transparent 30%, rgba(255,255,255,0.6) 85%)",
                    }}
                />
                <div
                    className="absolute inset-0 dark:block hidden"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, transparent 30%, rgba(8,10,15,0.75) 85%)",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    style={
                        enabled
                            ? {
                                  rotateX,
                                  rotateY,
                                  transformPerspective: 1200,
                              }
                            : undefined
                    }
                    className="max-w-5xl"
                >
                    {/* Status pill */}
                    <ParallaxLayer
                        x={x}
                        y={y}
                        intensity={intensity}
                        depth={0.3}
                        enabled={enabled}
                    >
                        <FadeIn y={20}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 dark:border-ink-800 bg-white/70 dark:bg-ink-900/70 backdrop-blur px-3.5 py-1.5 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300">
                                    Development | Technology | Management Consulting
                                </span>
                            </div>
                        </FadeIn>
                    </ParallaxLayer>

                    {/* Headline */}
                    <ParallaxLayer
                        x={x}
                        y={y}
                        intensity={intensity}
                        depth={0.6}
                        enabled={enabled}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-7">
                            <span className="inline-block">
                                {headlineTop.map((word, i) => (
                                    <motion.span
                                        key={word}
                                        initial={{
                                            opacity: 0,
                                            y: 24,
                                            filter: "blur(6px)",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.1 + i * 0.09,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="inline-block mr-[0.25em]"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </span>

                            <motion.span
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1 + headlineTop.length * 0.09,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative inline-block"
                            >
                                <motion.span
                                    animate={{
                                        backgroundPosition: [
                                            "0% center",
                                            "200% center",
                                        ],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 1.2,
                                    }}
                                    className="inline-block bg-linear-to-r from-brand-600 via-brand-400 to-brand-600 bg-size-[200%_auto] bg-clip-text text-transparent"
                                >
                                    {headlineAccent}
                                </motion.span>
                            </motion.span>
                        </h1>
                    </ParallaxLayer>

                    {/* Subhead */}
                    <ParallaxLayer
                        x={x}
                        y={y}
                        intensity={intensity}
                        depth={0.35}
                        enabled={enabled}
                    >
                        <FadeIn y={20} delay={0.5}>
                            <p className="max-w-3xl text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed mb-10">
                                We help organizations understand complex
                                challenges, design practical solutions and
                                deliver sustainable results through consulting,
                                digital transformation, systems development, ICT
                                advisory, quality assurance, capacity building
                                and programme delivery.
                            </p>
                        </FadeIn>
                    </ParallaxLayer>

                    {/* CTAs */}
                    <ParallaxLayer
                        x={x}
                        y={y}
                        intensity={intensity}
                        depth={0.2}
                        enabled={enabled}
                    >
                        <FadeIn y={20} delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <MagneticLink
                                    href="/experience"
                                    variant="primary"
                                >
                                    Explore Our Experience
                                </MagneticLink>

                                <MagneticLink
                                    href="/contact"
                                    variant="ghost"
                                >
                                    Discuss an Assignment
                                </MagneticLink>
                            </div>
                        </FadeIn>
                    </ParallaxLayer>
                </motion.div>
            </div>

            {/* Bottom fade to blend into next section */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white dark:to-ink-950" />
        </section>
    );
}