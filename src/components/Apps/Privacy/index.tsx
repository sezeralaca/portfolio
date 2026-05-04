import { FC } from "react";

const LAST_UPDATED = "May 4, 2026";

export const Privacy: FC = () => {
  return (
    <div className="flex h-full flex-col bg-[#efefe7]">
      <div className="border-b border-[#9a9a9a] bg-silver px-3 py-2 text-xs md:text-sm">
        Last updated: {LAST_UPDATED}
      </div>

      <article className="h-full overflow-y-auto px-4 py-4 text-sm leading-relaxed text-black md:px-6 md:py-6 md:text-base">
        <h2 className="mb-2 text-base font-bold md:text-lg">Overview</h2>
        <p className="mb-4">
          This mobile application does not collect, store, process, or share
          personal data.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">
          Information We Collect
        </h2>
        <p className="mb-4">
          We do not collect any personal information, device identifiers,
          analytics data, location data, or usage data.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">Data Storage</h2>
        <p className="mb-4">
          We do not store your personal data on our servers or in any external
          database.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">Data Sharing</h2>
        <p className="mb-4">
          We do not sell, transfer, or share user data with third parties,
          because we do not collect any data.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">Data Security</h2>
        <p className="mb-4">
          Since no personal data is collected or stored, there is no personal
          data retained by this app.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">
          Third-Party Services
        </h2>
        <p className="mb-4">
          This app is designed to operate without third-party analytics,
          advertising SDKs, or tracking tools.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">
          Children&apos;s Privacy
        </h2>
        <p className="mb-4">
          Because no personal data is collected from any users, this app does
          not knowingly collect information from children.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">
          Changes To This Policy
        </h2>
        <p className="mb-4">
          We may update this policy from time to time. Any updates will be
          posted in this window with a revised &quot;Last updated&quot; date.
        </p>

        <h2 className="mb-2 text-base font-bold md:text-lg">Contact</h2>
        <p>
          If you have privacy-related questions, please contact us through the
          communication methods available in the app or website.
        </p>
      </article>
    </div>
  );
};
