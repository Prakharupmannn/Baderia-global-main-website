"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Users,
  Landmark,
  Images,
  ShieldCheck,
} from "lucide-react";

import { navigationData } from "@/lib/data/navigationData";
import MobileDrawer from "./MobileDrawer";

/* Items that go into the rounded second-row bar (matched by title, case-insensitive) */
const SECOND_ROW_KEYS = ["placement", "campus", "gallery", "mandatory"];

const ICON_MAP = [
  { key: "placement", Icon: Users },
  { key: "campus", Icon: Landmark },
  { key: "gallery", Icon: Images },
  { key: "mandatory", Icon: ShieldCheck },
];

const getIcon = (title = "") => {
  const t = title.toLowerCase();
  const found = ICON_MAP.find((i) => t.includes(i.key));
  return found ? found.Icon : null;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerRef = useRef(null);
  const closeTimer = useRef(null);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click and Escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(closeTimer.current);
    };
  }, []);

  // Mobile body scroll
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openDropdown = (title) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(title);
  };

  const closeDropdown = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const hasDropdown = (item) =>
    item.megaMenu
      ? Array.isArray(item.categories) && item.categories.length > 0
      : Array.isArray(item.items) && item.items.length > 0;

  /* Split navigation into the two rows (data itself is untouched) */
  const matchesSecond = (item) =>
    SECOND_ROW_KEYS.some((k) => (item.title || "").toLowerCase().includes(k));
  const anyMatch = navigationData.some(matchesSecond);

  const topItems = [];
  const secondItems = [];
  navigationData.forEach((item, index) => {
    const second = anyMatch ? matchesSecond(item) : index >= 4;
    (second ? secondItems : topItems).push({ item, index });
  });

  const renderItem = ({ item, index }, { row, position, total }) => {
    const dropdown = hasDropdown(item);
    const isMega = item.megaMenu && Array.isArray(item.categories);
    const isOpen = activeDropdown === item.title;
    const Icon = row === 2 ? getIcon(item.title) : null;
    // keep dropdowns inside the screen: last two items of row 2 open right-aligned
    const alignRight = row === 2 && position >= total - 2 && total > 2;

    return (
      <li
        key={`${item.title || item.href || "item"}-${index}`}
        className={`bgi-nav-item ${row === 2 ? "in-pill" : ""}`}
        onMouseEnter={() => dropdown && openDropdown(item.title)}
      >
        {row === 2 && position > 0 && (
          <span className="bgi-sep" aria-hidden="true" />
        )}

        <Link
          href={item.href || "#"}
          className={`bgi-nav-link ${isOpen ? "is-open" : ""}`}
          aria-haspopup={dropdown ? "true" : undefined}
          aria-expanded={dropdown ? isOpen : undefined}
          onFocus={() => dropdown && openDropdown(item.title)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" && dropdown) {
              e.preventDefault();
              openDropdown(item.title);
            }
          }}
        >
          {Icon && <Icon className="bgi-nav-icon" size={17} />}
          {item.title}
          {dropdown && (
            <ChevronDown className={`bgi-chevron ${isOpen ? "is-open" : ""}`} />
          )}
        </Link>

                {/* MEGA MENU */}
        {isMega && (
          <div
            className={`bgi-dropdown bgi-mega-dropdown ${alignRight ? "align-right" : ""} ${
              isOpen ? "is-open" : ""
            }`}
          >
            <div className="bgi-dropdown-panel bgi-mega-panel">
              <div className="bgi-dd-head">
                <span className="bgi-dd-title">
                  <i className="bgi-dd-dot" />
                  {item.title}
                </span>
                {item.href && item.href !== "#" && (
                  <Link href={item.href} className="bgi-dd-viewall">
                    View all
                    <ArrowRight size={13} />
                  </Link>
                )}
              </div>

              <div className="bgi-mega-grid">
                {item.categories.map((category, catIndex) => (
                  <div
                    key={`${category.heading || "cat"}-${catIndex}`}
                    className="bgi-mega-category"
                  >
                    <h4 className="bgi-mega-heading">
                      <span>{category.heading}</span>
                    </h4>
                    <div className="bgi-mega-list">
                      {category.items.map((sub, subIndex) => (
                        <Link
                          key={`${sub.href || "link"}-${catIndex}-${subIndex}`}
                          href={sub.href}
                          className="bgi-dropdown-link"
                          style={{ "--i": catIndex * 2 + subIndex }}
                        >
                          <span className="bgi-link-label">
                            <i className="bgi-bullet" />
                            {sub.name}
                          </span>
                          {sub.tag ? (
                            <span className="bgi-tag">{sub.tag}</span>
                          ) : (
                            <ArrowRight className="bgi-link-arrow" size={14} />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bgi-mega-footer">
                <div className="bgi-mega-footer-text">
                  <span className="bgi-spark">
                    <Sparkles size={15} />
                  </span>
                  <span>
                    Need assistance with admissions or branch selection?
                  </span>
                </div>
                <Link href="/admissions/apply" className="bgi-footer-cta">
                  Get Free Counseling
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* STANDARD DROPDOWN */}
        {!isMega && dropdown && (
          <div
            className={`bgi-dropdown ${alignRight ? "align-right" : ""} ${
              isOpen ? "is-open" : ""
            }`}
          >
            <div className="bgi-dropdown-panel">
              <div className="bgi-dd-head">
                <span className="bgi-dd-title">
                  <i className="bgi-dd-dot" />
                  {item.title}
                </span>
              </div>

              <div className="bgi-std-list">
                {item.items.map((sub, subIndex) => (
                  <Link
                    key={`${sub.href || "link"}-${subIndex}`}
                    href={sub.href}
                    className="bgi-dropdown-link"
                    style={{ "--i": subIndex }}
                  >
                    <span className="bgi-link-label">
                      <i className="bgi-bullet" />
                      <span>
                        {sub.name}
                        {sub.desc && (
                          <small className="bgi-dropdown-desc">{sub.desc}</small>
                        )}
                      </span>
                    </span>
                    {sub.tag ? (
                      <span className="bgi-tag">{sub.tag}</span>
                    ) : (
                      <ArrowRight className="bgi-link-arrow" size={14} />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </li>
    );
  };

  return (
    <>
      <style jsx global>{`
        .bgi-header {
          --bgi-maroon: #8a0a22;
          --bgi-maroon-dark: #640619;
          --bgi-maroon-soft: #fbeef1;
          --bgi-gold: #e9a820;
          --bgi-ink: #242126;
          --bgi-muted: #77727a;
          --bgi-line: #eadfe2;

          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: #ffffff;
          font-family: inherit;
          box-shadow: 0 10px 30px -18px rgba(100, 6, 25, 0.42);
        }

        .bgi-header *,
        .bgi-header *::before,
        .bgi-header *::after {
          box-sizing: border-box;
        }

        .bgi-header ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .bgi-inner {
          width: 100%;
          max-width: 1540px;
          margin: auto;
          padding: 8px clamp(14px, 2.2vw, 34px);
          display: flex;
          align-items: center;
          gap: clamp(14px, 2vw, 30px);
          transition: padding 0.3s ease;
        }

        .bgi-header.is-scrolled .bgi-inner {
          padding-top: 4px;
          padding-bottom: 4px;
        }

        /* BRAND */
        .bgi-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
          text-decoration: none;
          padding-right: clamp(14px, 1.8vw, 28px);
          border-right: 1px solid var(--bgi-line);
        }

        .bgi-logo-wrap {
          width: 80px;
          height: 68px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          background: #fff;
          box-shadow: 0 4px 12px rgba(138, 10, 34, 0.1);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .bgi-brand:hover .bgi-logo-wrap {
          transform: scale(1.04);
          box-shadow: 0 7px 18px rgba(138, 10, 34, 0.18);
        }

        .bgi-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .bgi-brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
          line-height: 1.1;
        }

        .bgi-brand-top {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 3px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.19em;
          color: var(--bgi-gold);
          text-transform: uppercase;
        }

        .bgi-brand-top i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--bgi-maroon);
        }

        .bgi-brand-name {
          display: flex;
          align-items: baseline;
          gap: 5px;
          white-space: nowrap;
        }

        .bgi-brand-name strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 1.75vw, 28px);
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--bgi-maroon);
        }

        .bgi-brand-name span {
          font-size: clamp(14px, 1.25vw, 19px);
          font-weight: 900;
          letter-spacing: -0.5px;
          color: var(--bgi-ink);
        }

        .bgi-brand-sub {
          margin-top: 5px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.045em;
          color: var(--bgi-muted);
          white-space: nowrap;
        }

        .bgi-brand-affiliation {
          color: var(--bgi-maroon);
          font-weight: 800;
        }

        /* NAVIGATION AREA (two rows) */
        .bgi-nav-area {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 6px;
        }

        .bgi-row1 {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 42px;
        }

        .bgi-nav {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .bgi-spacer {
          flex: 1;
        }

        .bgi-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .bgi-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 40px;
          padding: 0 clamp(10px, 1vw, 16px);
          border-radius: 999px;
          border: none;
          background: transparent;
          color: var(--bgi-ink);
          text-decoration: none;
          font-family: inherit;
          font-size: clamp(13px, 1.05vw, 15px);
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          transition:
            color 0.25s ease,
            background 0.25s ease;
        }

        .bgi-nav-icon {
          color: var(--bgi-maroon);
          flex-shrink: 0;
        }

        .bgi-nav-link::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 18%;
          width: 64%;
          height: 2px;
          border-radius: 5px;
          background: linear-gradient(
            90deg,
            var(--bgi-maroon),
            var(--bgi-gold)
          );
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }

        .bgi-nav-link:hover,
        .bgi-nav-link.is-open {
          color: var(--bgi-maroon);
          background: var(--bgi-maroon-soft);
        }

        .bgi-nav-link:hover::after,
        .bgi-nav-link.is-open::after {
          transform: scaleX(1);
        }

        .bgi-chevron {
          width: 14px;
          height: 14px;
          color: var(--bgi-maroon);
          opacity: 0.8;
          transition: transform 0.25s ease;
        }

        .bgi-chevron.is-open {
          transform: rotate(180deg);
        }

        /* SECOND ROW PILL BAR */
        .bgi-pillbar {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          padding: 3px 8px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid var(--bgi-line);
          box-shadow: 0 10px 24px -12px rgba(100, 6, 25, 0.3);
        }

        .bgi-pillbar .bgi-nav-link {
          min-height: 34px;
          font-size: clamp(12.5px, 1vw, 14.5px);
        }

        .bgi-pillbar .bgi-nav-link::after {
          bottom: 1px;
        }

        .bgi-sep {
          width: 1px;
          height: 20px;
          margin: 0 3px;
          flex-shrink: 0;
          background: var(--bgi-maroon);
          opacity: 0.35;
        }

        /* DROPDOWNS */
        .bgi-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          z-index: 110;
          width: 310px;
          padding-top: 14px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translate(-50%, 12px) scale(0.98);
          transform-origin: top center;
          transition:
            opacity 0.25s ease,
            transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
            visibility 0.25s ease;
        }

        .bgi-dropdown.is-open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translate(-50%, 0) scale(1);
        }

        .bgi-dropdown.align-right {
          left: auto;
          right: 0;
          transform: translate(0, 12px) scale(0.98);
          transform-origin: top right;
        }

        .bgi-dropdown.align-right.is-open {
          transform: translate(0, 0) scale(1);
        }

        .bgi-dropdown-panel {
          position: relative;
          padding: 12px;
          background:
            radial-gradient(
              120% 80% at 100% 0%,
              rgba(233, 168, 32, 0.08),
              transparent 55%
            ),
            radial-gradient(
              90% 70% at 0% 0%,
              rgba(138, 10, 34, 0.05),
              transparent 55%
            ),
            #ffffff;
          border: 1px solid var(--bgi-line);
          border-top: 3px solid var(--bgi-gold);
          border-radius: 18px;
          box-shadow:
            0 30px 60px -18px rgba(65, 10, 25, 0.32),
            0 12px 24px -12px rgba(65, 10, 25, 0.12),
            0 0 0 1px rgba(255, 255, 255, 0.6) inset;
        }

        /* pointer notch */
        .bgi-dropdown-panel::before {
          content: "";
          position: absolute;
          top: -9px;
          left: 50%;
          width: 14px;
          height: 14px;
          margin-left: -7px;
          background: var(--bgi-gold);
          border-radius: 3px 0 0 0;
          transform: rotate(45deg);
          z-index: -1;
        }

        .bgi-dropdown.align-right .bgi-dropdown-panel::before {
          left: auto;
          right: 34px;
          margin-left: 0;
        }

        /* header strip */
        .bgi-dd-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 0 4px 8px;
          padding: 2px 6px 10px;
          border-bottom: 1px dashed #efdfe3;
        }

        .bgi-dd-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--bgi-maroon);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .bgi-dd-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            var(--bgi-gold),
            var(--bgi-maroon)
          );
          box-shadow: 0 0 0 3px rgba(233, 168, 32, 0.2);
        }

        .bgi-dd-viewall {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 999px;
          color: var(--bgi-maroon);
          background: var(--bgi-maroon-soft);
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .bgi-dd-viewall:hover {
          background: #f5dfe4;
          transform: translateX(2px);
        }

        .bgi-std-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* links */
        .bgi-dropdown-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 12px;
          text-decoration: none;
          color: var(--bgi-ink);
          font-size: 13px;
          font-weight: 600;
          overflow: hidden;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .bgi-dropdown-link::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 3px;
          height: 0;
          border-radius: 0 3px 3px 0;
          background: linear-gradient(
            180deg,
            var(--bgi-gold),
            var(--bgi-maroon)
          );
          transform: translateY(-50%);
          transition: height 0.22s ease;
        }

        .bgi-dropdown-link:hover,
        .bgi-dropdown-link:focus-visible {
          color: var(--bgi-maroon);
          background: linear-gradient(90deg, var(--bgi-maroon-soft), #fffaf0);
          transform: translateX(2px);
        }

        .bgi-dropdown-link:hover::before,
        .bgi-dropdown-link:focus-visible::before {
          height: 62%;
        }

        .bgi-link-label {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .bgi-bullet {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #dcc9ce;
          transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .bgi-dropdown-link:hover .bgi-bullet {
          background: var(--bgi-gold);
          transform: scale(1.25);
          box-shadow: 0 0 0 4px rgba(233, 168, 32, 0.2);
        }

        .bgi-link-arrow {
          flex-shrink: 0;
          color: var(--bgi-maroon);
          opacity: 0;
          transform: translateX(-8px);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }

        .bgi-dropdown-link:hover .bgi-link-arrow,
        .bgi-dropdown-link:focus-visible .bgi-link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .bgi-dropdown-desc {
          display: block;
          margin-top: 3px;
          color: var(--bgi-muted);
          font-size: 11px;
          font-weight: 500;
          line-height: 1.4;
        }

        .bgi-tag {
          flex-shrink: 0;
          padding: 3px 8px;
          border-radius: 20px;
          color: #fff;
          background: linear-gradient(
            135deg,
            var(--bgi-maroon),
            var(--bgi-maroon-dark)
          );
          box-shadow: 0 3px 8px -2px rgba(138, 10, 34, 0.45);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* staggered link entrance */
        .bgi-dropdown.is-open .bgi-dropdown-link {
          animation: bgi-item-in 0.38s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: calc(var(--i, 0) * 28ms + 40ms);
        }

        @keyframes bgi-item-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* MEGA MENU */
        .bgi-mega-dropdown {
          width: min(880px, 88vw);
        }

        .bgi-mega-panel {
          padding: 16px 20px 20px;
        }

        .bgi-mega-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
        }

        .bgi-mega-category {
          min-width: 0;
          padding: 4px 14px 6px;
        }

        .bgi-mega-category + .bgi-mega-category {
          border-left: 1px solid #f1e4e7;
        }

        .bgi-mega-heading {
          margin: 0 0 10px;
          padding: 0 0 10px 2px;
          font-size: 11.5px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bgi-maroon);
        }

        .bgi-mega-heading span {
          position: relative;
          display: inline-block;
          padding-bottom: 8px;
        }

        .bgi-mega-heading span::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--bgi-gold), transparent);
        }

        .bgi-mega-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .bgi-mega-list .bgi-dropdown-link {
          padding: 9px 10px;
          font-size: 12.5px;
        }

        .bgi-mega-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 16px;
          padding: 12px 14px 12px 16px;
          border-radius: 14px;
          background: linear-gradient(
            110deg,
            var(--bgi-maroon-dark),
            var(--bgi-maroon) 70%,
            #a31230
          );
          box-shadow: 0 12px 24px -12px rgba(100, 6, 25, 0.6);
          position: relative;
          overflow: hidden;
        }

        .bgi-mega-footer::after {
          content: "";
          position: absolute;
          right: -30px;
          top: -40px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(246, 217, 138, 0.35),
            transparent 70%
          );
          pointer-events: none;
        }

        .bgi-mega-footer-text {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
        }

        .bgi-spark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border-radius: 50%;
          color: var(--bgi-maroon-dark);
          background: linear-gradient(135deg, #f6d98a, var(--bgi-gold));
        }

        .bgi-footer-cta {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
          padding: 8px 14px;
          border-radius: 999px;
          color: var(--bgi-maroon-dark);
          background: linear-gradient(135deg, #f6d98a, var(--bgi-gold));
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .bgi-footer-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 16px -6px rgba(0, 0, 0, 0.35);
        }

        .bgi-footer-cta svg {
          transition: transform 0.2s ease;
        }

        .bgi-footer-cta:hover svg {
          transform: translateX(3px);
        }

        /* ACTION BUTTONS */
        .bgi-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          padding-left: 14px;
          border-left: 1px solid var(--bgi-line);
        }

        .bgi-admission-btn,
        .bgi-apply-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 42px;
          padding: 0 18px;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          font-size: 13px;
          font-weight: 800;
          transition: all 0.25s ease;
        }

        .bgi-admission-btn {
          color: var(--bgi-maroon);
          background: var(--bgi-maroon-soft);
          border: 1px solid #efd5dc;
        }

        .bgi-admission-btn:hover {
          background: #f5dfe4;
          transform: translateY(-2px);
        }

        .bgi-apply-btn {
          color: #fff;
          background: linear-gradient(
            135deg,
            var(--bgi-maroon),
            var(--bgi-maroon-dark)
          );
          box-shadow:
            0 8px 18px -6px rgba(138, 10, 34, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .bgi-apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 22px -6px rgba(138, 10, 34, 0.6);
        }

        .bgi-apply-btn svg {
          color: var(--bgi-gold);
          transition: transform 0.2s ease;
        }

        .bgi-apply-btn:hover svg {
          transform: translateX(3px);
        }

        /* BOTTOM ACCENT */
        .bgi-bottom-bar {
          height: 5px;
          background: linear-gradient(
            90deg,
            var(--bgi-maroon-dark),
            var(--bgi-maroon),
            var(--bgi-gold),
            var(--bgi-maroon)
          );
        }

        /* MOBILE */
        .bgi-mobile-actions {
          display: none;
          align-items: center;
          gap: 9px;
          margin-left: auto;
        }

        .bgi-mobile-apply {
          padding: 9px 15px;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(
            135deg,
            var(--bgi-maroon),
            var(--bgi-maroon-dark)
          );
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
        }

        .bgi-burger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          border: 1px solid var(--bgi-line);
          border-radius: 12px;
          background: #fff;
          color: var(--bgi-maroon);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bgi-burger:hover {
          background: var(--bgi-maroon-soft);
          border-color: #e9c4cd;
        }

        .bgi-mobile-drawer {
          display: none;
        }

        .bgi-header button:focus-visible,
        .bgi-header a:focus-visible {
          outline: 2px solid var(--bgi-gold);
          outline-offset: 3px;
        }

        @media (max-width: 1300px) and (min-width: 1024px) {
          .bgi-inner {
            gap: 12px;
            padding-left: 14px;
            padding-right: 14px;
          }
          .bgi-brand {
            gap: 7px;
            padding-right: 12px;
          }
          .bgi-logo-wrap {
            width: 56px;
            height: 56px;
          }
          .bgi-brand-name strong {
            font-size: 20px;
          }
          .bgi-brand-name span {
            font-size: 13px;
          }
          .bgi-brand-top {
            font-size: 8px;
          }
          .bgi-brand-sub {
            display: none;
          }
          .bgi-nav-link {
            padding-left: 9px;
            padding-right: 9px;
            font-size: 12.5px;
          }
          .bgi-actions {
            padding-left: 8px;
          }
          .bgi-admission-btn {
            display: none;
          }
          .bgi-apply-btn {
            padding: 0 14px;
          }
        }

        @media (max-width: 1023px) {
          .bgi-inner,
          .bgi-header.is-scrolled .bgi-inner {
            min-height: 70px;
            padding: 7px 16px;
          }
          .bgi-brand {
            border-right: 0;
            padding-right: 0;
          }
          .bgi-logo-wrap {
            width: 53px;
            height: 53px;
          }
          .bgi-brand-name strong {
            font-size: 22px;
          }
          .bgi-brand-name span {
            font-size: 15px;
          }
          .bgi-brand-top,
          .bgi-brand-sub {
            font-size: 8px;
          }
          .bgi-nav-area {
            display: none;
          }
          .bgi-mobile-actions {
            display: flex;
          }
          .bgi-mobile-drawer {
            display: block;
          }
        }

        @media (max-width: 520px) {
          .bgi-inner,
          .bgi-header.is-scrolled .bgi-inner {
            min-height: 64px;
            padding: 6px 11px;
            gap: 7px;
          }
          .bgi-logo-wrap {
            width: 43px;
            height: 43px;
            padding: 3px;
          }
          .bgi-brand {
            gap: 7px;
          }
          .bgi-brand-top {
            font-size: 7px;
            letter-spacing: 0.12em;
            margin-bottom: 2px;
          }
          .bgi-brand-name {
            gap: 3px;
          }
          .bgi-brand-name strong {
            font-size: 17px;
          }
          .bgi-brand-name span {
            font-size: 11px;
          }
          .bgi-brand-sub {
            display: none;
          }
          .bgi-mobile-actions {
            gap: 6px;
          }
          .bgi-mobile-apply {
            padding: 8px 10px;
            font-size: 11px;
          }
          .bgi-burger {
            width: 39px;
            height: 39px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bgi-header *,
          .bgi-header *::before,
          .bgi-header *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <header
        ref={headerRef}
        className={`bgi-header ${isScrolled ? "is-scrolled" : ""}`}
        onMouseLeave={closeDropdown}
      >
        <div className="bgi-inner">
          {/* BRAND */}
          <Link href="/" className="bgi-brand">
            <div className="bgi-logo-wrap">
              <Image
                src="/images/logo1.png"
                alt="Baderia Global Engineering College"
                width={65}
                height={65}
                priority
                className="bgi-logo"
              />
            </div>

            <div className="bgi-brand-text">
              <div className="bgi-brand-top">
                BADERIA GROUP
                <i />
                <span style={{ color: "#77727a" }}>Estd. 2002</span>
              </div>

              <div className="bgi-brand-name">
                <strong>GLOBAL</strong>
                <span>ENGINEERING COLLEGE</span>
              </div>

              <div className="bgi-brand-sub">
                Baderia Global Institute of Engg. &amp; Mgmt.
                <span className="bgi-brand-affiliation">
                  {" "}
                  • AICTE • RGPV • RDVV
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="bgi-nav-area">
            {/* Row 1: main items + actions */}
            <div className="bgi-row1">
              <nav aria-label="Main navigation">
                <ul className="bgi-nav">
                  {topItems.map((entry, position) =>
                    renderItem(entry, {
                      row: 1,
                      position,
                      total: topItems.length,
                    }),
                  )}
                </ul>
              </nav>

              <div className="bgi-spacer" />

              <div className="bgi-actions">
                <Link href="/admissions" className="bgi-admission-btn">
                  <GraduationCap size={17} />
                  Admissions 2026
                </Link>

                <Link href="/admissions/apply" className="bgi-apply-btn">
                  Apply Online
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Row 2: rounded pill bar */}
            {secondItems.length > 0 && (
              <nav aria-label="Secondary navigation" className="bgi-pillbar">
                <ul className="bgi-nav">
                  {secondItems.map((entry, position) =>
                    renderItem(entry, {
                      row: 2,
                      position,
                      total: secondItems.length,
                    }),
                  )}
                </ul>
              </nav>
            )}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="bgi-mobile-actions">
            <Link href="/admissions/apply" className="bgi-mobile-apply">
              Apply
            </Link>

            <button
              type="button"
              className="bgi-burger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* BOTTOM GOLD / MAROON ACCENT */}
        <div className="bgi-bottom-bar" />

        {/* EXISTING MOBILE DRAWER */}
        <div className="bgi-mobile-drawer">
          <MobileDrawer isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
        </div>
      </header>
    </>
  );
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   GraduationCap,
//   ArrowRight,
//   Sparkles,
//   Users,
//   Landmark,
//   Images,
//   ShieldCheck,
// } from "lucide-react";

// import { navigationData } from "@/lib/data/navigationData";
// import MobileDrawer from "./MobileDrawer";

// /* Items that go into the rounded second-row bar (matched by title, case-insensitive) */
// const SECOND_ROW_KEYS = ["placement", "campus", "gallery", "mandatory"];

// const ICON_MAP = [
//   { key: "placement", Icon: Users },
//   { key: "campus", Icon: Landmark },
//   { key: "gallery", Icon: Images },
//   { key: "mandatory", Icon: ShieldCheck },
// ];

// const getIcon = (title = "") => {
//   const t = title.toLowerCase();
//   const found = ICON_MAP.find((i) => t.includes(i.key));
//   return found ? found.Icon : null;
// };

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const headerRef = useRef(null);
//   const closeTimer = useRef(null);

//   // Scroll behavior
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Outside click and Escape
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (headerRef.current && !headerRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setActiveDropdown(null);
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleKeyDown);
//       clearTimeout(closeTimer.current);
//     };
//   }, []);

//   // Mobile body scroll
//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileMenuOpen]);

//   const openDropdown = (title) => {
//     clearTimeout(closeTimer.current);
//     setActiveDropdown(title);
//   };

//   const closeDropdown = () => {
//     clearTimeout(closeTimer.current);
//     closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   const hasDropdown = (item) =>
//     item.megaMenu
//       ? Array.isArray(item.categories) && item.categories.length > 0
//       : Array.isArray(item.items) && item.items.length > 0;

//   /* Split navigation into the two rows (data itself is untouched) */
//   const matchesSecond = (item) =>
//     SECOND_ROW_KEYS.some((k) => (item.title || "").toLowerCase().includes(k));
//   const anyMatch = navigationData.some(matchesSecond);

//   const topItems = [];
//   const secondItems = [];
//   navigationData.forEach((item, index) => {
//     const second = anyMatch ? matchesSecond(item) : index >= 4;
//     (second ? secondItems : topItems).push({ item, index });
//   });

//   const renderItem = ({ item, index }, { row, position, total }) => {
//     const dropdown = hasDropdown(item);
//     const isMega = item.megaMenu && Array.isArray(item.categories);
//     const isOpen = activeDropdown === item.title;
//     const Icon = row === 2 ? getIcon(item.title) : null;
//     // keep dropdowns inside the screen: last two items of row 2 open right-aligned
//     const alignRight = row === 2 && position >= total - 2 && total > 2;

//     return (
//       <li
//         key={item.title || item.href || index}
//         className={`bgi-nav-item ${row === 2 ? "in-pill" : ""}`}
//         onMouseEnter={() => dropdown && openDropdown(item.title)}
//       >
//         {row === 2 && position > 0 && <span className="bgi-sep" aria-hidden="true" />}

//         <Link
//           href={item.href || "#"}
//           className={`bgi-nav-link ${isOpen ? "is-open" : ""}`}
//           aria-haspopup={dropdown ? "true" : undefined}
//           aria-expanded={dropdown ? isOpen : undefined}
//           onFocus={() => dropdown && openDropdown(item.title)}
//           onKeyDown={(e) => {
//             if (e.key === "ArrowDown" && dropdown) {
//               e.preventDefault();
//               openDropdown(item.title);
//             }
//           }}
//         >
//           {Icon && <Icon className="bgi-nav-icon" size={17} />}
//           {item.title}
//           {dropdown && (
//             <ChevronDown className={`bgi-chevron ${isOpen ? "is-open" : ""}`} />
//           )}
//         </Link>

//         {/* MEGA MENU */}
//         {isMega && (
//           <div
//             className={`bgi-dropdown bgi-mega-dropdown ${alignRight ? "align-right" : ""} ${
//               isOpen ? "is-open" : ""
//             }`}
//           >
//             <div className="bgi-dropdown-panel bgi-mega-panel">
//               <div className="bgi-mega-grid">
//                 {item.categories.map((category, catIndex) => (
//                   <div key={category.heading || catIndex} className="bgi-mega-category">
//                     <h4 className="bgi-mega-heading">{category.heading}</h4>
//                     <div className="bgi-mega-list">
//                       {category.items.map((sub, subIndex) => (
//                         <Link
//                           key={sub.href || subIndex}
//                           href={sub.href}
//                           className="bgi-dropdown-link"
//                         >
//                           <span>{sub.name}</span>
//                           {sub.tag && <span className="bgi-tag">{sub.tag}</span>}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bgi-mega-footer">
//                 <div className="bgi-mega-footer-text">
//                   <Sparkles size={16} />
//                   <span>Need assistance with admissions or branch selection?</span>
//                 </div>
//                 <Link href="/admissions/apply">
//                   Get Free Counseling
//                   <ArrowRight size={14} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* STANDARD DROPDOWN */}
//         {!isMega && dropdown && (
//           <div
//             className={`bgi-dropdown ${alignRight ? "align-right" : ""} ${
//               isOpen ? "is-open" : ""
//             }`}
//           >
//             <div className="bgi-dropdown-panel">
//               {item.items.map((sub, subIndex) => (
//                 <Link
//                   key={sub.href || subIndex}
//                   href={sub.href}
//                   className="bgi-dropdown-link"
//                 >
//                   <span>
//                     {sub.name}
//                     {sub.desc && <small className="bgi-dropdown-desc">{sub.desc}</small>}
//                   </span>
//                   {sub.tag && <span className="bgi-tag">{sub.tag}</span>}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </li>
//     );
//   };

//   return (
//     <>
//       <style jsx global>{`
//         .bgi-header {
//           --bgi-maroon: #8a0a22;
//           --bgi-maroon-dark: #640619;
//           --bgi-maroon-soft: #fbeef1;
//           --bgi-gold: #e9a820;
//           --bgi-ink: #242126;
//           --bgi-muted: #77727a;
//           --bgi-line: #eadfe2;

//           position: sticky;
//           top: 0;
//           z-index: 100;
//           width: 100%;
//           background: #ffffff;
//           font-family: inherit;
//           box-shadow: 0 10px 30px -18px rgba(100, 6, 25, 0.42);
//         }

//         .bgi-header *,
//         .bgi-header *::before,
//         .bgi-header *::after {
//           box-sizing: border-box;
//         }

//         .bgi-header ul {
//           margin: 0;
//           padding: 0;
//           list-style: none;
//         }

//         .bgi-inner {
//           width: 100%;
//           max-width: 1540px;
//           margin: auto;
//           padding: 8px clamp(14px, 2.2vw, 34px);
//           display: flex;
//           align-items: center;
//           gap: clamp(14px, 2vw, 30px);
//           transition: padding 0.3s ease;
//         }

//         .bgi-header.is-scrolled .bgi-inner {
//           padding-top: 4px;
//           padding-bottom: 4px;
//         }

//         /* BRAND */
//         .bgi-brand {
//           display: flex;
//           align-items: center;
//           gap: 11px;
//           flex-shrink: 0;
//           text-decoration: none;
//           padding-right: clamp(14px, 1.8vw, 28px);
//           border-right: 1px solid var(--bgi-line);
//         }

//         .bgi-logo-wrap {
//           width: 68px;
//           height: 68px;
//           flex-shrink: 0;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 4px;
//           background: #fff;
//           border: 2px solid var(--bgi-gold);
//           box-shadow: 0 4px 12px rgba(138, 10, 34, 0.1);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .bgi-brand:hover .bgi-logo-wrap {
//           transform: scale(1.04);
//           box-shadow: 0 7px 18px rgba(138, 10, 34, 0.18);
//         }

//         .bgi-logo {
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//         }

//         .bgi-brand-text {
//           display: flex;
//           flex-direction: column;
//           min-width: 0;
//           line-height: 1.1;
//         }

//         .bgi-brand-top {
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           margin-bottom: 3px;
//           font-size: 9px;
//           font-weight: 800;
//           letter-spacing: 0.19em;
//           color: var(--bgi-gold);
//           text-transform: uppercase;
//         }

//         .bgi-brand-top i {
//           width: 5px;
//           height: 5px;
//           border-radius: 50%;
//           background: var(--bgi-maroon);
//         }

//         .bgi-brand-name {
//           display: flex;
//           align-items: baseline;
//           gap: 5px;
//           white-space: nowrap;
//         }

//         .bgi-brand-name strong {
//           font-family: Georgia, "Times New Roman", serif;
//           font-size: clamp(20px, 1.75vw, 28px);
//           font-weight: 800;
//           letter-spacing: -0.5px;
//           color: var(--bgi-maroon);
//         }

//         .bgi-brand-name span {
//           font-size: clamp(14px, 1.25vw, 19px);
//           font-weight: 900;
//           letter-spacing: -0.5px;
//           color: var(--bgi-ink);
//         }

//         .bgi-brand-sub {
//           margin-top: 5px;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 0.045em;
//           color: var(--bgi-muted);
//           white-space: nowrap;
//         }

//         .bgi-brand-affiliation {
//           color: var(--bgi-maroon);
//           font-weight: 800;
//         }

//         /* NAVIGATION AREA (two rows) */
//         .bgi-nav-area {
//           flex: 1;
//           min-width: 0;
//           display: flex;
//           flex-direction: column;
//           align-items: stretch;
//           gap: 6px;
//         }

//         .bgi-row1 {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           min-height: 42px;
//         }

//         .bgi-nav {
//           display: flex;
//           align-items: center;
//           gap: 2px;
//         }

//         .bgi-spacer {
//           flex: 1;
//         }

//         .bgi-nav-item {
//           position: relative;
//           display: flex;
//           align-items: center;
//           flex-shrink: 0;
//         }

//         .bgi-nav-link {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 6px;
//           min-height: 40px;
//           padding: 0 clamp(10px, 1vw, 16px);
//           border-radius: 999px;
//           border: none;
//           background: transparent;
//           color: var(--bgi-ink);
//           text-decoration: none;
//           font-family: inherit;
//           font-size: clamp(13px, 1.05vw, 15px);
//           font-weight: 700;
//           white-space: nowrap;
//           cursor: pointer;
//           transition: color 0.25s ease, background 0.25s ease;
//         }

//         .bgi-nav-icon {
//           color: var(--bgi-maroon);
//           flex-shrink: 0;
//         }

//         .bgi-nav-link::after {
//           content: "";
//           position: absolute;
//           bottom: 3px;
//           left: 18%;
//           width: 64%;
//           height: 2px;
//           border-radius: 5px;
//           background: linear-gradient(90deg, var(--bgi-maroon), var(--bgi-gold));
//           transform: scaleX(0);
//           transition: transform 0.25s ease;
//         }

//         .bgi-nav-link:hover,
//         .bgi-nav-link.is-open {
//           color: var(--bgi-maroon);
//           background: var(--bgi-maroon-soft);
//         }

//         .bgi-nav-link:hover::after,
//         .bgi-nav-link.is-open::after {
//           transform: scaleX(1);
//         }

//         .bgi-chevron {
//           width: 14px;
//           height: 14px;
//           color: var(--bgi-maroon);
//           opacity: 0.8;
//           transition: transform 0.25s ease;
//         }

//         .bgi-chevron.is-open {
//           transform: rotate(180deg);
//         }

//         /* SECOND ROW PILL BAR */
//         .bgi-pillbar {
//           align-self: flex-start;
//           display: inline-flex;
//           align-items: center;
//           padding: 3px 8px;
//           border-radius: 999px;
//           background: #fff;
//           border: 1px solid var(--bgi-line);
//           box-shadow: 0 10px 24px -12px rgba(100, 6, 25, 0.3);
//         }

//         .bgi-pillbar .bgi-nav-link {
//           min-height: 34px;
//           font-size: clamp(12.5px, 1vw, 14.5px);
//         }

//         .bgi-pillbar .bgi-nav-link::after {
//           bottom: 1px;
//         }

//         .bgi-sep {
//           width: 1px;
//           height: 20px;
//           margin: 0 3px;
//           flex-shrink: 0;
//           background: var(--bgi-maroon);
//           opacity: 0.35;
//         }

//         /* DROPDOWN */
//         .bgi-dropdown {
//           position: absolute;
//           top: 100%;
//           left: 50%;
//           z-index: 110;
//           width: 300px;
//           padding-top: 12px;
//           opacity: 0;
//           visibility: hidden;
//           pointer-events: none;
//           transform: translate(-50%, 9px);
//           transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
//         }

//         .bgi-dropdown.is-open {
//           opacity: 1;
//           visibility: visible;
//           pointer-events: auto;
//           transform: translate(-50%, 0);
//         }

//         .bgi-dropdown.align-right {
//           left: auto;
//           right: 0;
//           transform: translate(0, 9px);
//         }

//         .bgi-dropdown.align-right.is-open {
//           transform: translate(0, 0);
//         }

//         .bgi-dropdown-panel {
//           padding: 10px;
//           background: #fff;
//           border: 1px solid var(--bgi-line);
//           border-top: 3px solid var(--bgi-gold);
//           border-radius: 16px;
//           box-shadow: 0 24px 55px -15px rgba(65, 10, 25, 0.28),
//             0 5px 15px rgba(0, 0, 0, 0.04);
//         }

//         .bgi-dropdown-link {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 10px;
//           padding: 10px 12px;
//           border-radius: 10px;
//           text-decoration: none;
//           color: var(--bgi-ink);
//           font-size: 13px;
//           font-weight: 600;
//           transition: all 0.2s ease;
//         }

//         .bgi-dropdown-link:hover {
//           padding-left: 17px;
//           color: var(--bgi-maroon);
//           background: var(--bgi-maroon-soft);
//         }

//         .bgi-dropdown-desc {
//           display: block;
//           margin-top: 3px;
//           color: var(--bgi-muted);
//           font-size: 11px;
//           font-weight: 400;
//           line-height: 1.4;
//         }

//         .bgi-tag {
//           flex-shrink: 0;
//           padding: 3px 7px;
//           border-radius: 20px;
//           color: #fff;
//           background: var(--bgi-maroon);
//           font-size: 9px;
//           font-weight: 800;
//         }

//         /* MEGA MENU */
//         .bgi-mega-dropdown {
//           width: min(850px, 88vw);
//         }

//         .bgi-mega-panel {
//           padding: 24px;
//         }

//         .bgi-mega-grid {
//           display: grid;
//           grid-template-columns: repeat(3, minmax(0, 1fr));
//           gap: 24px;
//         }

//         .bgi-mega-category {
//           min-width: 0;
//         }

//         .bgi-mega-heading {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 8px;
//           margin: 0 0 12px;
//           padding-bottom: 10px;
//           border-bottom: 1px solid #f0dfe3;
//           color: var(--bgi-maroon);
//           font-size: 12px;
//           font-weight: 900;
//           letter-spacing: 0.09em;
//           text-transform: uppercase;
//         }

//         .bgi-mega-list {
//           display: flex;
//           flex-direction: column;
//           gap: 3px;
//         }

//         .bgi-mega-list .bgi-dropdown-link {
//           padding: 9px 10px;
//           font-size: 12px;
//         }

//         .bgi-mega-footer {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 15px;
//           margin-top: 22px;
//           padding: 13px 16px;
//           border: 1px solid #f0e1e4;
//           border-radius: 12px;
//           background: linear-gradient(110deg, #fff7f8, #fffaf0);
//         }

//         .bgi-mega-footer-text {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           color: var(--bgi-maroon);
//           font-size: 11px;
//           font-weight: 700;
//         }

//         .bgi-mega-footer-text svg {
//           flex-shrink: 0;
//           color: var(--bgi-gold);
//         }

//         .bgi-mega-footer a {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           flex-shrink: 0;
//           color: var(--bgi-maroon);
//           text-decoration: none;
//           font-size: 11px;
//           font-weight: 900;
//         }

//         .bgi-mega-footer a:hover {
//           color: var(--bgi-maroon-dark);
//         }

//         /* ACTION BUTTONS */
//         .bgi-actions {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           flex-shrink: 0;
//           padding-left: 14px;
//           border-left: 1px solid var(--bgi-line);
//         }

//         .bgi-admission-btn,
//         .bgi-apply-btn {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 7px;
//           min-height: 42px;
//           padding: 0 18px;
//           border-radius: 999px;
//           text-decoration: none;
//           white-space: nowrap;
//           font-size: 13px;
//           font-weight: 800;
//           transition: all 0.25s ease;
//         }

//         .bgi-admission-btn {
//           color: var(--bgi-maroon);
//           background: var(--bgi-maroon-soft);
//           border: 1px solid #efd5dc;
//         }

//         .bgi-admission-btn:hover {
//           background: #f5dfe4;
//           transform: translateY(-2px);
//         }

//         .bgi-apply-btn {
//           color: #fff;
//           background: linear-gradient(135deg, var(--bgi-maroon), var(--bgi-maroon-dark));
//           box-shadow: 0 8px 18px -6px rgba(138, 10, 34, 0.55),
//             inset 0 1px 0 rgba(255, 255, 255, 0.18);
//         }

//         .bgi-apply-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 22px -6px rgba(138, 10, 34, 0.6);
//         }

//         .bgi-apply-btn svg {
//           color: var(--bgi-gold);
//           transition: transform 0.2s ease;
//         }

//         .bgi-apply-btn:hover svg {
//           transform: translateX(3px);
//         }

//         /* BOTTOM ACCENT */
//         .bgi-bottom-bar {
//           height: 5px;
//           background: linear-gradient(
//             90deg,
//             var(--bgi-maroon-dark),
//             var(--bgi-maroon),
//             var(--bgi-gold),
//             var(--bgi-maroon)
//           );
//         }

//         /* MOBILE */
//         .bgi-mobile-actions {
//           display: none;
//           align-items: center;
//           gap: 9px;
//           margin-left: auto;
//         }

//         .bgi-mobile-apply {
//           padding: 9px 15px;
//           border-radius: 999px;
//           color: #fff;
//           background: linear-gradient(135deg, var(--bgi-maroon), var(--bgi-maroon-dark));
//           text-decoration: none;
//           font-size: 12px;
//           font-weight: 800;
//         }

//         .bgi-burger {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 43px;
//           height: 43px;
//           border: 1px solid var(--bgi-line);
//           border-radius: 12px;
//           background: #fff;
//           color: var(--bgi-maroon);
//           cursor: pointer;
//           transition: all 0.2s ease;
//         }

//         .bgi-burger:hover {
//           background: var(--bgi-maroon-soft);
//           border-color: #e9c4cd;
//         }

//         .bgi-mobile-drawer {
//           display: none;
//         }

//         .bgi-header button:focus-visible,
//         .bgi-header a:focus-visible {
//           outline: 2px solid var(--bgi-gold);
//           outline-offset: 3px;
//         }

//         @media (max-width: 1300px) and (min-width: 1024px) {
//           .bgi-inner {
//             gap: 12px;
//             padding-left: 14px;
//             padding-right: 14px;
//           }
//           .bgi-brand {
//             gap: 7px;
//             padding-right: 12px;
//           }
//           .bgi-logo-wrap {
//             width: 56px;
//             height: 56px;
//           }
//           .bgi-brand-name strong {
//             font-size: 20px;
//           }
//           .bgi-brand-name span {
//             font-size: 13px;
//           }
//           .bgi-brand-top {
//             font-size: 8px;
//           }
//           .bgi-brand-sub {
//             display: none;
//           }
//           .bgi-nav-link {
//             padding-left: 9px;
//             padding-right: 9px;
//             font-size: 12.5px;
//           }
//           .bgi-actions {
//             padding-left: 8px;
//           }
//           .bgi-admission-btn {
//             display: none;
//           }
//           .bgi-apply-btn {
//             padding: 0 14px;
//           }
//         }

//         @media (max-width: 1023px) {
//           .bgi-inner,
//           .bgi-header.is-scrolled .bgi-inner {
//             min-height: 70px;
//             padding: 7px 16px;
//           }
//           .bgi-brand {
//             border-right: 0;
//             padding-right: 0;
//           }
//           .bgi-logo-wrap {
//             width: 53px;
//             height: 53px;
//           }
//           .bgi-brand-name strong {
//             font-size: 22px;
//           }
//           .bgi-brand-name span {
//             font-size: 15px;
//           }
//           .bgi-brand-top,
//           .bgi-brand-sub {
//             font-size: 8px;
//           }
//           .bgi-nav-area {
//             display: none;
//           }
//           .bgi-mobile-actions {
//             display: flex;
//           }
//           .bgi-mobile-drawer {
//             display: block;
//           }
//         }

//         @media (max-width: 520px) {
//           .bgi-inner,
//           .bgi-header.is-scrolled .bgi-inner {
//             min-height: 64px;
//             padding: 6px 11px;
//             gap: 7px;
//           }
//           .bgi-logo-wrap {
//             width: 43px;
//             height: 43px;
//             padding: 3px;
//           }
//           .bgi-brand {
//             gap: 7px;
//           }
//           .bgi-brand-top {
//             font-size: 7px;
//             letter-spacing: 0.12em;
//             margin-bottom: 2px;
//           }
//           .bgi-brand-name {
//             gap: 3px;
//           }
//           .bgi-brand-name strong {
//             font-size: 17px;
//           }
//           .bgi-brand-name span {
//             font-size: 11px;
//           }
//           .bgi-brand-sub {
//             display: none;
//           }
//           .bgi-mobile-actions {
//             gap: 6px;
//           }
//           .bgi-mobile-apply {
//             padding: 8px 10px;
//             font-size: 11px;
//           }
//           .bgi-burger {
//             width: 39px;
//             height: 39px;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .bgi-header *,
//           .bgi-header *::before,
//           .bgi-header *::after {
//             animation: none !important;
//             transition: none !important;
//           }
//         }
//       `}</style>

//       <header
//         ref={headerRef}
//         className={`bgi-header ${isScrolled ? "is-scrolled" : ""}`}
//         onMouseLeave={closeDropdown}
//       >
//         <div className="bgi-inner">
//           {/* BRAND */}
//           <Link href="/" className="bgi-brand">
//             <div className="bgi-logo-wrap">
//               <Image
//                 src="/images/logo1.png"
//                 alt="Baderia Global Engineering College"
//                 width={65}
//                 height={65}
//                 priority
//                 className="bgi-logo"
//               />
//             </div>

//             <div className="bgi-brand-text">
//               <div className="bgi-brand-top">
//                 BADERIA GROUP
//                 <i />
//                 <span style={{ color: "#77727a" }}>Estd. 2002</span>
//               </div>

//               <div className="bgi-brand-name">
//                 <strong>GLOBAL</strong>
//                 <span>ENGINEERING COLLEGE</span>
//               </div>

//               <div className="bgi-brand-sub">
//                 Baderia Global Institute of Engg. &amp; Mgmt.
//                 <span className="bgi-brand-affiliation"> • AICTE • RGPV • RDVV</span>
//               </div>
//             </div>
//           </Link>

//           {/* DESKTOP NAVIGATION */}
//           <div className="bgi-nav-area">
//             {/* Row 1: main items + actions */}
//             <div className="bgi-row1">
//               <nav aria-label="Main navigation">
//                 <ul className="bgi-nav">
//                   {topItems.map((entry, position) =>
//                     renderItem(entry, { row: 1, position, total: topItems.length })
//                   )}
//                 </ul>
//               </nav>

//               <div className="bgi-spacer" />

//               <div className="bgi-actions">
//                 <Link href="/admissions" className="bgi-admission-btn">
//                   <GraduationCap size={17} />
//                   Admissions 2026
//                 </Link>

//                 <Link href="/admissions/apply" className="bgi-apply-btn">
//                   Apply Online
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </div>

//             {/* Row 2: rounded pill bar */}
//             {secondItems.length > 0 && (
//               <nav aria-label="Secondary navigation" className="bgi-pillbar">
//                 <ul className="bgi-nav">
//                   {secondItems.map((entry, position) =>
//                     renderItem(entry, { row: 2, position, total: secondItems.length })
//                   )}
//                 </ul>
//               </nav>
//             )}
//           </div>

//           {/* MOBILE ACTIONS */}
//           <div className="bgi-mobile-actions">
//             <Link href="/admissions/apply" className="bgi-mobile-apply">
//               Apply
//             </Link>

//             <button
//               type="button"
//               className="bgi-burger"
//               onClick={() => setMobileMenuOpen(true)}
//               aria-label="Open mobile navigation"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
//             </button>
//           </div>
//         </div>

//         {/* BOTTOM GOLD / MAROON ACCENT */}
//         <div className="bgi-bottom-bar" />

//         {/* EXISTING MOBILE DRAWER */}
//         <div className="bgi-mobile-drawer">
//           <MobileDrawer isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
//         </div>
//       </header>
//     </>
//   );
// }
