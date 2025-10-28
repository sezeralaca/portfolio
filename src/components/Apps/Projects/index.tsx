import Image from "next/image";
import { FC } from "react";

const PROJECTS = [
  {
    title: "Sersim After Sales App",
    image: "/screenshots/sersimssh.png",
    imageAlt: "CloudVault Screenshot",
 
    description: [
  "Developed mobile app from scratch with Ionic Angular and implemented web features based on provided Angular 19 designs.",
  "Handled full native permissions for mobile and integrated push notifications using OneSignal.",
  "Managed full application lifecycle independently, including store deployment, hosting, and end-to-end delivery."
],


  },
  {
    title: "Factory Defect Tracker",
    image: "/screenshots/defect-tracker.png",
    imageAlt: "QuickNotes Screenshot",
     
   description: [
   "Developed a cross-platform mobile application using Expo (React Native) for tracking and managing factory defects in real time.",
   "Implemented JWT-based authentication and secure storage with Expo SecureStore to maintain persistent user sessions.",
   "Built a responsive and modern UI using NativeWind (Tailwind CSS for React Native) and Lucide icons for consistent visual design."
],

  },
  {
    title: "SersimAPI",
   
    description: [
  "Built with .NET API, EF Core with PostgreSQL, and JWT-based authentication.",
  "Integrated Redis caching, AutoMapper, and custom middleware for authorization, error handling, and dynamic jobs.",
  "Documented with Swagger/OpenAPI and configured IP rate limiting for secure and maintainable API endpoints."
],

  },
  {
    title: "Factory Label Designer",
 
    description: [
  "Developed a .NET application for designing product labels with XtraReports.",
  "Integrated with SAP via WSDL services for real-time product and production data synchronization.",
  "Implemented dynamic label templates and printing workflows for factory operations."
],


  },
  {
    title: "Freelance Dynamic Webpages",
     
    href: "#",
    description: [
  "Developed client-specific websites based on Figma designs or verbal requirements.",
  "Created custom UI elements and styles, including Chart.js and Swiper.js integrations.",
  "Delivered maintainable, readable code with clean, reusable frontend design patterns."
],

  },
];

export const Projects: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto flex max-w-4xl flex-col px-6 py-8">
        <h2 className="text-3xl font-bold">Projects</h2>

        {PROJECTS.map((project, i) => (
          <div key={project.title}>
            <div className="my-8 border border-b-white border-t-[#808080]" />

            <div className="space-y-6">
              <h3 className="text-xl font-bold">
                {i + 1}. {project.title}
              </h3>

              {project.image && (
                <a target="_blank" href={project.href}>
                  <Image
                    priority
                    width={project.title === "Costfocus" ? 400 : 950}
                    height={1280}
                    src={project.image}
                    className="mx-auto rounded-lg border border-gray-700"
                    alt={project.imageAlt}
                    unoptimized
                  />
                </a>
              )}

              <ul className="list-inside list-disc space-y-3 pl-1">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
