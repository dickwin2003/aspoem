import { ThemeProvider } from "~/components/theme-provider";
import "~/styles/themes.css";
import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

import dynamic from "next/dynamic";
import LoadFont from "./load-font";

const MicrosoftClarity = dynamic(() => import("./metrics/microsoft-clarity"), {
  ssr: false,
});

const GoogleAnalytics = dynamic(() => import("./metrics/google-analytics"), {
  ssr: false,
});

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <body className="theme-zinc min-h-screen bg-background font-cursive font-normal text-foreground antialiased">
      <>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>

        <GoogleAnalytics id={process.env.NEXT_PUBLIC_GA_ID!} />
        <MicrosoftClarity id={process.env.NEXT_PUBLIC_MC_ID!} />
        <LoadFont />
      </>
    </body>
  );
}
