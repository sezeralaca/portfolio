import { FC } from "react";
import { Icon } from "@iconify/react";

export const Biography: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto w-full max-w-3xl p-6">
        <div>
          <h2 className="text-3xl font-bold">Ahmet Sezer Alaca</h2>
          <p className="pt-3 text-base text-slate-600">Full Stack Developer</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Icon icon="skill-icons:dotnet" className="h-6 w-6" />
          <Icon icon="skill-icons:cs" className="h-6 w-6" />
          <Icon icon="devicon:html5" className="h-6 w-6" />
          <Icon icon="devicon:css3" className="h-6 w-6" />
          <Icon icon="logos:ionic-icon" className="h-6 w-6" />
          <Icon icon="devicon:angular" className="h-6 w-6" />
           <Icon icon="logos:react" className="h-6 w-6" />
          <Icon icon="devicon:typescript" className="h-6 w-6" />
          <Icon icon="devicon:javascript" className="h-6 w-6" />
          <Icon icon="devicon:postgresql" className="h-6 w-6" />
          <Icon icon="devicon:git" className="h-6 w-6" />
          <Icon icon="logos:sap" className="h-6 w-6" />

         </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">About Me</h3>
          <p className="pt-3">
            Full Stack Developer with hands-on experience in web,
            mobile, and desktop application development.
            Over the past two years, managed the full software development
            lifecycle across five affiliated companies, ensuring scalable,
            maintainable, and high-performance solutions.
          </p>
        </div>

        {/* <div className="pt-8">
          <h3 className="text-xl font-bold">Web Developer</h3>
          <p className="pt-3">
            As a web developer, I&apos;ve honed my skills through various
            projects, with extensive experience in backend development and
            database management using SQL or NoSQL solutions. My primary focus
            lies in frontend development using React.js, alongside meticulous
            styling to enhance user interfaces.
          </p>
        </div> */}

        <div className="pt-8">
          <h3 className="text-xl font-bold">Résumé</h3>
          <p className="pt-3">
            <a
              target="_blank"
              href="/documents/sezer_eng.pdf"
              className="text-accent underline"
            >
              Check out my résumé here 👉.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
