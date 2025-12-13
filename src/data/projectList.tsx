import { TimelineEntry } from "@/lib/timeline";
import Link from "next/link";

export const projects: TimelineEntry[] = [
  {
    title: "June 2025",
    content: (
      <div>
        <h3 className="text-2xl font-semibold py-1">Quaid Tahir Portfolio</h3>
        <p className="text-sm text-neutral-500">
          This portfolio is a fully modern, production-grade web application
          built with Next.js, React, and TypeScript. It&rsquo;s styled using
          Tailwind CSS for utility-first design, and enhanced with smooth,
          responsive animations powered by Framer Motion. Behind the scenes, the
          project is deployed on Vercel with a continuous integration and
          continuous deployment (CI/CD) pipeline, ensuring that every update is
          automatically tested and delivered with speed and reliability. From
          performance optimization to component-based architecture, every detail
          reflects my focus on building scalable, maintainable, and user-centric
          web experiences.
        </p>
        <Link href="/changelog" className="text-blue-500 hover:underline">Change log</Link>
      </div>
    ),
  },
  {
    title: "July 2025",
    content: (
      <div>
        <h3 className="text-2xl font-semibold">Web Site Builder</h3>
        <div className="py-1">
          <p className="text-sm text-neutral-500">
            This web-based site builder is a dynamic, user-friendly platform
            that enables users to create, customize, and deploy fully responsive
            websites without writing code. Designed for flexibility and
            scalability, it leverages a modern full-stack architecture optimized
            for performance, usability, and developer productivity.
          </p>

          <h3 className="font-bold underline mt-5">Frontend:</h3>
          <p className="text-sm text-neutral-500">
            Built with Next.js and React using TypeScript to ensure type safety
            and maintainability across the codebase. The UI is styled with
            Tailwind CSS, providing a utility-first approach for rapid styling
            and responsive design. Smooth animations and transitions are powered
            by Framer Motion, enhancing user experience with intuitive
            drag-and-drop interactions, live previews, and real-time updates.
          </p>

          <h3 className="font-bold underline mt-5">Backened</h3>
          <p className="text-sm text-neutral-500">
            The backend is implemented using Node.js with an API layer (REST or
            tRPC) to handle content management, user authentication, and site
            deployments. It integrates with a database (such as PostgreSQL or
            MongoDB) via an ORM like Prisma or Mongoose, managing user projects,
            templates, assets, and published site data.
          </p>

          <h3 className="font-bold underline mt-5">Features: </h3>
          <ul>
            <li className="text-sm text-neutral-500">
              <strong>Drag-and-drop page builder:</strong> Users can visually
              design pages with pre-built components and customizable layouts.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Template system:</strong> Provides starter templates that
              users can modify to speed up site creation.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Real-time collaboration:</strong> Optional feature using
              WebSockets (Socket.IO) allowing multiple users to edit
              simultaneously.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Authentication & Authorization:</strong> Managed securely
              with JWT or third-party providers via NextAuth or Clerk.js.
            </li>
            <li className="text-sm text-neutral-500">
              <strong>Media management:</strong> Upload and organize images,
              videos, and other assets using services like UploadThing or
              Cloudinary.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>SEO &amp; Performance:</strong> Automatic generation of
              metadata, sitemap, and optimized loading strategies leveraging
              Next.js&rsquo;s SSR/SSG capabilities.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Deployment:</strong> One-click publishing integrated with
              platforms like Vercel, enabling seamless live site updates.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Extensibility:</strong> Plugin architecture for adding
              custom components and integrations.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "August 2025",
    content: (
      <div>
        <h3 className="text-2xl font-semibold">
          Social Media Manager Platform
        </h3>
        <div className="py-1">
          <p className="text-sm text-neutral-500">
            A full-stack social media management platform built to unify
            Instagram, Facebook, Twitter, and LinkedIn into one dashboard.
            Designed for creators, marketers, and businesses to plan, schedule,
            and analyze posts across all major social networks — all from a
            modern, responsive UI.
          </p>

          <h3 className="font-bold underline mt-5">Frontend:</h3>
          <p className="text-sm text-neutral-500">
            Built using Next.js (App Router) and React with full TypeScript
            support for maintainability and type safety. Styled with Tailwind
            CSS to ensure rapid development and responsive design. Framer Motion
            adds smooth transitions and animations for post previews, dashboard
            elements, and modals. State management is handled with Zustand or
            Context API.
          </p>

          <h3 className="font-bold underline mt-5">Backend:</h3>
          <p className="text-sm text-neutral-500">
            The backend uses Node.js and a scalable API architecture (REST or
            tRPC) to handle post scheduling, account integration, and analytics.
            Supabase is used as the database and auth layer, providing secure
            user management and real-time data sync. All API tokens and social
            integrations are securely stored and encrypted.
          </p>

          <h3 className="font-bold underline mt-5">Features:</h3>
          <ul>
            <li className="text-sm text-neutral-500">
              <strong>Unified dashboard:</strong> Connect multiple social
              platforms (Instagram, Facebook, Twitter, LinkedIn) and manage them
              from one interface.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Scheduled posting:</strong> Users can create and schedule
              posts with media attachments and captions across multiple
              platforms in one go.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Analytics dashboard:</strong> Custom-built charts and
              metrics that display engagement, impressions, reach, and follower
              growth over time.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Auth & Role Management:</strong> Authentication powered by
              Supabase with optional OAuth provider integration and admin/user
              roles.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Drag-and-drop composer:</strong> Post creation page
              supports rich media uploads, emoji insertion, preview, and
              intuitive layout using drag-and-drop.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Real-time updates:</strong> Posts and analytics reflect
              live updates without needing manual refresh thanks to Supabase
              subscriptions.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Dark mode support:</strong> UI supports light and dark
              themes with persistent user preference.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Deployment:</strong> Fully deployed on Vercel with
              environment-aware settings for dev/staging/live environments.
              CI/CD integrated via GitHub.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

];
