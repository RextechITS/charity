import { useState, useRef, useEffect } from "react";

export default function LanguageDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState({
        name: "English",
        flag: "🇬🇧",
    });

    const dropdownRef = useRef(null);

    const languages = [
        { name: "English", flag: "🇬🇧" },
        { name: "French", flag: "🇫🇷" },
        { name: "Spanish", flag: "🇪🇸" },
        { name: "German", flag: "🇩🇪" },
    ];

    const handleSelect = (lang) => {
        setSelected(lang);
        setIsOpen(false);
    };

    // ✅ Detect click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative text-left">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-transparent text-white px-4 py-2 rounded-md flex items-center justify-between w-36 hover:bg-[#046a58] transition-all duration-300"
            >
                <span className="flex items-center gap-2">
                    <span className="text-xl">{selected.flag}</span>
                    {selected.name}
                </span>
                <span
                    className={`ml-2 mt-2 text-sm font-bold transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                >
                    ﹀
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute mt-2 w-36 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <ul className="flex flex-col">
                        {languages.map((lang) => (
                            <li
                                key={lang.name}
                                onClick={() => handleSelect(lang)}
                                className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-gray-700 hover:bg-[#046a58] hover:text-white transition-all ${selected.name === lang.name ? "bg-[#046a58] !text-white" : ""
                                    }`}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                {lang.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
