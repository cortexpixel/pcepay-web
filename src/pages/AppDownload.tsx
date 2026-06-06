"use client";
import { useEffect } from "react";

const IOS_STORE_DEEPLINK = "itms-apps://apps.apple.com/app/id6745489122";
const IOS_STORE_WEB = "https://apps.apple.com/gb/app/peace-payroll/id6745489122";

const ANDROID_STORE_DEEPLINK = "market://details?id=uk.co.pcepay.mobile";
const ANDROID_STORE_WEB = "https://play.google.com/store/apps/details?id=uk.co.pcepay.mobile";

const WEBSITE_URL = "https://www.pcepay.co.uk";

export default function AppDownload() {
    useEffect(() => {
        const ua = navigator.userAgent || navigator.vendor;

        const isIOS = /iPad|iPhone|iPod/.test(ua);
        const isAndroid = /android/i.test(ua);

        if (isIOS) {
            window.location.href = IOS_STORE_DEEPLINK;

            setTimeout(() => {
                window.location.replace(IOS_STORE_WEB);
            }, 1200);

            return;
        }

        if (isAndroid) {
            window.location.href = ANDROID_STORE_DEEPLINK;

            setTimeout(() => {
                window.location.replace(ANDROID_STORE_WEB);
            }, 1200);

            return;
        }

        // Desktop or unsupported device
        window.location.replace(WEBSITE_URL);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Redirecting to the App Store…</h2>
            <p>If nothing happens, use the links below:</p>

            <a href={IOS_STORE_WEB}>Download on App Store</a>
            <br />
            <a href={ANDROID_STORE_WEB}>Get it on Google Play</a>
        </div>
    );
}
