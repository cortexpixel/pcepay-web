"use client";
/**
 * Compatibility shim that maps react-router-dom APIs onto Next.js App Router
 * primitives, so that components migrated from the Vite project can keep
 * using <Link>, <NavLink>, useLocation, useNavigate, useParams.
 */
import NextLink from "next/link";
import { usePathname, useRouter, useSearchParams as useNextSearchParams, useParams as useNextParams } from "next/navigation";
import { forwardRef, AnchorHTMLAttributes, ReactNode, MouseEvent } from "react";

type To = string | { pathname?: string; search?: string; hash?: string };

const toHref = (to: To): string => {
  if (typeof to === "string") return to;
  return `${to.pathname ?? ""}${to.search ?? ""}${to.hash ?? ""}`;
};

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: To;
  replace?: boolean;
  state?: unknown;
  children?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, replace, state, children, ...rest }, ref) => {
    return (
      <NextLink ref={ref} href={toHref(to)} replace={replace} {...rest}>
        {children}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

export interface NavLinkProps extends Omit<LinkProps, "className" | "children" | "style"> {
  className?: string | ((state: { isActive: boolean; isPending: boolean }) => string);
  style?: React.CSSProperties | ((state: { isActive: boolean }) => React.CSSProperties);
  end?: boolean;
  children?: ReactNode | ((state: { isActive: boolean; isPending: boolean }) => ReactNode);
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, end, className, style, children, ...rest }, ref) => {
    const pathname = usePathname() || "/";
    const href = toHref(to);
    const isActive = end ? pathname === href : pathname === href || pathname.startsWith(href + "/");
    const state = { isActive, isPending: false };
    const resolvedClass = typeof className === "function" ? className(state) : className;
    const resolvedStyle = typeof style === "function" ? style(state) : style;
    const resolvedChildren = typeof children === "function" ? children(state) : children;
    return (
      <NextLink ref={ref} href={href} className={resolvedClass} style={resolvedStyle} {...rest}>
        {resolvedChildren}
      </NextLink>
    );
  }
);
NavLink.displayName = "NavLink";

export const useLocation = () => {
  const pathname = usePathname() || "/";
  const search = useNextSearchParams();
  const searchString = search?.toString() ?? "";
  return {
    pathname,
    search: searchString ? `?${searchString}` : "",
    hash: typeof window !== "undefined" ? window.location.hash : "",
    state: null,
    key: pathname,
  };
};

export const useNavigate = () => {
  const router = useRouter();
  return (to: To | number, opts?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to < 0) router.back();
      else router.forward();
      return;
    }
    const href = toHref(to);
    if (opts?.replace) router.replace(href);
    else router.push(href);
  };
};

export const useParams = <T extends Record<string, string> = Record<string, string>>() =>
  (useNextParams() as unknown) as T;

// react-router-dom returns [searchParams, setSearchParams]; mirror that shape.
export const useSearchParams = (): [URLSearchParams, (next: URLSearchParams | Record<string, string>) => void] => {
  const params = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const current = new URLSearchParams(params?.toString() ?? "");
  const setSearchParams = (next: URLSearchParams | Record<string, string>) => {
    const usp = next instanceof URLSearchParams ? next : new URLSearchParams(next);
    const qs = usp.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };
  return [current, setSearchParams];
};

// No-op router components — Next.js App Router handles routing itself.
export const BrowserRouter = ({ children }: { children: ReactNode }) => <>{children}</>;
export const Routes = ({ children }: { children: ReactNode }) => <>{children}</>;
export const Route = (_: unknown) => null;
export const Outlet = () => null;
