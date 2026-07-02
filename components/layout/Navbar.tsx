"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const LIGHT_PAGES = ["/galeri", "/peta"];

const NAV_ITEMS = [
  { labelKey: "nav.beranda", href: "/" },
  { labelKey: "nav.sejarah", href: "/sejarah" },
  { labelKey: "nav.dombaLukutan", href: "/domba-lukutan" },
  { labelKey: "nav.gunungPatuha", href: "/gunung-patuha" },
  { labelKey: "nav.kisahKaruhun", href: "/kisah-karuhun" },
  { labelKey: "nav.sunanIbu", href: "/sunan-ibu" },
  { labelKey: "nav.galeri", href: "/galeri" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const isLightPage = LIGHT_PAGES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getTextColor = (isActive: boolean) => {
    if (isLightPage || isScrolled) {
      return isActive ? "text-danau-700" : "text-arang-900/70 hover:text-arang-900";
    }
    return isActive ? "text-kabut-50" : "text-kabut-50/80 hover:text-kabut-50";
  };

  const getLogoColor = () => {
    if (isLightPage || isScrolled) {
      return "text-danau-700";
    }
    return "text-kabut-50";
  };

  const getIndicatorColor = () => {
    if (isLightPage || isScrolled) {
      return "bg-danau-500";
    }
    return "bg-kabut-50";
  };

  const getButtonColor = () => {
    if (isOpen) return "text-arang-900";
    if (isLightPage || isScrolled) return "text-arang-900";
    return "text-kabut-50";
  };

  const getToggleBg = () => {
    if (isLightPage || isScrolled) {
      return "bg-kabut-100 hover:bg-kabut-100/80";
    }
    return "bg-kabut-50/20 hover:bg-kabut-50/30";
  };

  const getToggleText = () => {
    if (isLightPage || isScrolled) {
      return "text-arang-900";
    }
    return "text-kabut-50";
  };

  const getToggleActiveBg = () => {
    if (isLightPage || isScrolled) {
      return "bg-danau-500 text-kabut-50";
    }
    return "bg-kabut-50 text-danau-700";
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isLightPage
            ? "bg-kabut-50/95 backdrop-blur-sm shadow-sm"
            : isScrolled
              ? "bg-kabut-50/95 backdrop-blur-sm shadow-sm"
              : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-center gap-2"
            >
              <span
                className={`font-serif text-xl font-semibold transition-colors duration-300 sm:text-2xl ${getLogoColor()}`}
              >
                Kawah Putih
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${getTextColor(isActive)}`}
                    >
                      {t(item.labelKey)}
                      {isActive && (
                        <motion.div
                          className={`absolute bottom-0 left-3 right-3 h-0.5 ${getIndicatorColor()}`}
                          layoutId="navbar-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Language Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <div className={`flex items-center rounded-full p-1 ${getToggleBg()} transition-colors duration-300`}>
                <button
                  onClick={() => setLanguage("id")}
                  className={`relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                    language === "id" ? getToggleActiveBg() : getToggleText()
                  }`}
                  aria-label="Switch to Indonesian"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>ID</span>
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                    language === "en" ? getToggleActiveBg() : getToggleText()
                  }`}
                  aria-label="Switch to English"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>EN</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-200 lg:hidden ${getButtonColor()}`}
                aria-label={isOpen ? t("accessibility.closeMenu") : t("accessibility.openMenu")}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-arang-900/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-kabut-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex h-full flex-col pt-20 pb-6 px-6">
                <nav className="flex-1">
                  <ul className="space-y-1">
                    {NAV_ITEMS.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                          }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                              isActive
                                ? "bg-danau-500/10 text-danau-700"
                                : "text-arang-900/70 hover:bg-kabut-100 hover:text-arang-900"
                            }`}
                          >
                            {t(item.labelKey)}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Language Toggle in Mobile Menu */}
                <motion.div
                  className="mt-auto pt-6 border-t border-kabut-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-caption text-kabut-abu mb-3">
                    {language === "id" ? "Bahasa" : "Language"}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage("id")}
                      className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        language === "id"
                          ? "bg-danau-500 text-kabut-50"
                          : "bg-kabut-100 text-arang-900/70 hover:bg-kabut-100/80"
                      }`}
                    >
                      Indonesia
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        language === "en"
                          ? "bg-danau-500 text-kabut-50"
                          : "bg-kabut-100 text-arang-900/70 hover:bg-kabut-100/80"
                      }`}
                    >
                      English
                    </button>
                  </div>
                  <p className="text-caption text-kabut-abu mt-4">
                    {t("nav.exploreFolklor")}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
