import type { ReactNode } from "react";
import "./styles/global.css";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import {
    PersistQueryClientProvider,
    type PersistQueryClientProviderProps,
} from "@tanstack/react-query-persist-client";
import { Provider } from "jotai";
import {
    Links,
    type LinksFunction,
    Meta,
    type MetaFunction,
    Scripts,
    ScrollRestoration,
} from "react-router";
import { Outlet } from "react-router";
import { PageContainer } from "~/components/Container";
import { Navigation } from "~/components/Navigation";

export const links: LinksFunction = () => [
    {
        rel: "icon",
        href: "/favicon/favicon.svg",
        type: "image/svg+xml",
    },
    {
        rel: "apple-touch-icon",
        href: "/favicon/favicon.svg",
        type: "image/svg+xml",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
];

export const meta: MetaFunction = () => {
    return [
        { title: "TerroirApp" },
        { name: "application-name", content: "TerroirApp" },
        {
            name: "description",
            content: "TerroirApp",
        },
    ];
};

export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang={"fr"}>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="scrollbars">
                <div>
                    <Navigation />
                    {children}
                </div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

const persistOptions: PersistQueryClientProviderProps["persistOptions"] = {
    persister: createSyncStoragePersister({
        storage:
            typeof window !== "undefined" ? window.localStorage : undefined,
    }),
    maxAge: Number.POSITIVE_INFINITY,
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: Number.POSITIVE_INFINITY,
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});

export default function App() {
    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={persistOptions}
        >
            <Provider>
                <PageContainer>
                    <Outlet />
                </PageContainer>
            </Provider>
        </PersistQueryClientProvider>
    );
}
