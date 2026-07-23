import { AUTH_KEY } from "./constant";

const COOKIE_OPTIONS = `Path=/; Secure; SameSite=Strict; Max-Age=${1 * 24 * 60 * 60}`;

export const setAuthCookie = (value: unknown) => {
    if (!AUTH_KEY) {
        throw new Error("AUTH_KEY is not defined. Set VITE_AUTH_KEY in your environment.");
    }
    document.cookie = `${AUTH_KEY}=${encodeURIComponent(JSON.stringify(value))}; ${COOKIE_OPTIONS}`;
};

export const getAuthCookie = (): unknown | null => {
    if (!AUTH_KEY) return null;
    const match = document.cookie.match(
        new RegExp("(?:^|; )" + AUTH_KEY.replace(/([.$?*|{}()[\]\\+^])/g, "\\$1") + "=([^;]*)"),
    );
    if (!match) return null;
    try {
        return JSON.parse(decodeURIComponent(match[1] ?? ""));
    } catch {
        return null;
    }
};

export const updateAuthCookie = (partial: Partial<unknown>) => {
    const current = getAuthCookie();
    if (current && typeof current === "object" && !Array.isArray(current)) {
        setAuthCookie({ ...current, ...partial });
    }
};

export const deleteAuthCookie = () => {
    if (!AUTH_KEY) return;
    document.cookie = `${AUTH_KEY}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict`;
};
