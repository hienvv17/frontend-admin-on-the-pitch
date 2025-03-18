'use client';
import React from 'react';

import { ThemeProvider } from '@mui/material';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { theme } from '@/styles/theme/lightThemeOptions';

interface ThemeRegistryProps {
    children: React.ReactNode | JSX.Element;
    nonce: string;
}

export default function ThemeRegistry(props: ThemeRegistryProps) {
    const { children, nonce } = props;

    return (
        <AppRouterCacheProvider
            options={{
                key: 'css',
                nonce,
                prepend: true,
            }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
    );
}
