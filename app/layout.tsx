import type { Metadata } from "next";
import { ThemeProvider, CssBaseline, Box, LinearProgress } from "@mui/material";
import StoreProvider from "./StoreProvider";
import "../styles/globals.css";
import muiTheme from "@/styles/muiTheme";
import TopAppBar from "@/components/app-bars/TopAppBar";
import BottomAppBar from "@/components/app-bars/BottomAppBar";
import { ROUTES } from "@/utils/constants";

export async function generateMetadata({ params }: { params: { slug?: string } }): Promise<Metadata> {
  const pathname = params?.slug ? `/${params.slug}` : "/home";
  const routeKey = Object.keys(ROUTES).find(
    (key) => ROUTES[key as keyof typeof ROUTES].path === pathname
  );
  const route = routeKey ? ROUTES[routeKey as keyof typeof ROUTES] : null;

  return {
    title: route?.title || "Default Title",
    description: route?.description || "Default description",
    keywords: route?.keywords || "default, keywords",
    openGraph: {
      title: route?.title || "Default OG Title",
      description: route?.ogDescription || "Default OG Description",
      images: "[logo image]",
      url: route?.ogUrl || "https://example.com",
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <StoreProvider>
        <html lang="en">
          <body className="bg-white flex flex-col min-h-screen pb-[56px] sm:pb-[0px]">
            {(() => {
              return (
                <>
                {/* <LinearProgress color="secondary" /> */}
                  <TopAppBar />
                  <div className="flex-grow">{children}</div>
                  <BottomAppBar />
                  <Box
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "white",
                      textAlign: "center",
                      py: 1,
                      mt: "36px",
                    }}
                  >
                    <p>
                      © {new Date().getFullYear()} MyCompany. All rights
                      reserved.
                    </p>
                  </Box>
                </>
              );
            })()}
          </body>
        </html>
      </StoreProvider>
    </ThemeProvider>
  );
}
