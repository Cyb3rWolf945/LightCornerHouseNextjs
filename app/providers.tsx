"use client";
import * as React from "react";
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MUIThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { ThemeProviderProps } from "next-themes/dist/types";
import "./provider.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const muiTheme = createTheme({
  // Customize your Material UI theme here
});

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <NextUIProvider navigate={router.push}>
      <MUIThemeProvider theme={muiTheme}>
        <NextThemesProvider {...themeProps}>
          <CssBaseline /> {/* Material UI baseline */}
          <QueryClientProvider client={queryClient}>
          {children}
          </QueryClientProvider>

        </NextThemesProvider>
      </MUIThemeProvider>
    </NextUIProvider>
  );
}
