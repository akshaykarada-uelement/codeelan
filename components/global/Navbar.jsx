"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const [activeLink, setActiveLink] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navItems = [
        {
            name: "Platforms",
            href: "/platforms",
            children: [
                { name: "Omniscientia", href: "/omniscientia" },
                { name: "Perfectus", href: "/perfectus" },
            ],
        },
        {
            name: "About Us",
            href: "/about-us",
            children: [
                { name: "Case Studies", href: "/case-studies" },
                { name: "Partnership", href: "/partnership" },
                { name: "Mission & Vision", href: "/mission-vision" },
            ],
        },
        { name: "Contact Us", href: "/contact-us" },
    ];

    /* ---------- ACTIVE ROUTE ---------- */
    useEffect(() => {
        const matchedItem = navItems.find(
            (item) =>
                item.href === pathname ||
                item.children?.some((child) => child.href === pathname)
        );

        if (matchedItem) setActiveLink(matchedItem.name);
        setMenuOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    const handleNavClick = (item) => {
        router.push(item.href);
        setActiveLink(item.name);
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    const isChildActive = (item) =>
        item.children?.some((child) => child.href === pathname);


    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full bg-white z-[100] shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
            <div className="max-w-[1440px] mx-auto px-6 h-[103px] flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/codeElan-logo.png"
                        alt="CodeElan"
                        width={160}
                        height={48}
                        className="hidden md:block"
                    />
                    <Image
                        src="/codeElan-logo.png"
                        alt="CodeElan"
                        width={120}
                        height={40}
                        className="md:hidden block"
                    />
                </Link>

                {/* ================= DESKTOP MENU ================= */}
                <div className="hidden lg:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button
                                onClick={() => {
                                    if (item.children) {
                                        setOpenDropdown(
                                            openDropdown === item.name ? null : item.name
                                        );
                                    } else {
                                        handleNavClick(item);
                                    }
                                }}
                                className={`flex items-center gap-1 font-medium transition-colors
                  ${activeLink === item.name
                                        ? "text-[#49CF38]"
                                        : "text-[#1E2A5E] hover:text-[#49CF38]"
                                    }
                `}
                            >
                                {item.name}
                                {item.children && (
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </button>

                            {/* Desktop Dropdown */}
                            {item.children && openDropdown === item.name && (
                                <div className="absolute left-0 top-full pt-4">
                                    <div className="w-[260px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                                        {item.children.map((child, index) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={`block px-5 py-4 text-sm font-medium text-[#1E2A5E] hover:text-[#49CF38]
                          ${index !== item.children.length - 1
                                                        ? "border-b border-[#DEDEDE99]"
                                                        : ""
                                                    }
                        `}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ================= HAMBURGER ================= */}
                <button
                    className="lg:hidden flex flex-col gap-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block w-6 h-0.5 bg-[#49CF38]" />
                    <span className="block w-6 h-0.5 bg-[#49CF38]" />
                    <span className="block w-6 h-0.5 bg-[#49CF38]" />
                </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`lg:hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          transition-all duration-300 origin-top
          ${menuOpen
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }
        `}
            >
                <div className="px-6 py-6 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <div
                                className={`flex items-center justify-between font-medium px-3 py-2 rounded-md transition-colors
    ${activeLink === item.name || isChildActive(item)
                                        ? "bg-white text-[#49CF38]"
                                        : "text-[#1E273E]"
                                    }
  `}

                                onClick={() =>
                                    item.children
                                        ? setOpenDropdown(
                                            openDropdown === item.name ? null : item.name
                                        )
                                        : handleNavClick(item)
                                }
                            >
                                <span>{item.name}</span>
                                {item.children && (
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </div>

                            {/* Mobile Dropdown */}
                            {item.children && openDropdown === item.name && (
                                <div className="mt-3 ml-4 flex flex-col gap-3">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`text-sm px-3 py-2 rounded-md transition-colors
  ${pathname === child.href
                                                    ? "bg-white text-[#49CF38]"
                                                    : "text-[#1E273E]"
                                                }
`}

                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
