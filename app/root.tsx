import type { ReactNode } from "react";
import "./index.css";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

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
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}