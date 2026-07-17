"use client";

import { useEffect, useState } from "react";

export default function NotificationModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const seen = sessionStorage.getItem("wubcs-notification");

        if (!seen) {
            setOpen(true);
            sessionStorage.setItem("wubcs-notification", "true");
        }
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
                {/* Header */}
                <div className="border-b border-white/10 px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">
                        🎉 Welcome to WUBCS
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">
                        World University of Bangladesh Computer Society
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-4 px-6 py-5">
                    <p className="text-gray-300">
                        Welcome to the official website of the World University of
                        Bangladesh Computer Society.
                    </p>

                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
                        <p className="font-semibold text-blue-400">
                            📢 Latest Announcement
                        </p>

                        <p className="mt-2 text-sm text-gray-300">
                            Membership Registration is now open.
                            Join our community to participate in workshops,
                            programming contests, hackathons, seminars,
                            and many exciting events.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-white/10 px-6 py-4">
                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}