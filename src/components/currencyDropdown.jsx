import { useState, useRef, useEffect } from "react";

export default function CurrencyDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("USD");
    const dropdownRef = useRef(null);

    const currencies = ["USD", "NGN", "EUR"];

    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
    };

    // ✅ Detect click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative text-left">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-transparent text-white px-4 py-2 rounded-md flex items-center justify-between w-20 hover:bg-[#046a58] transition-all duration-300"
            >
                {selected}
                <span
                    className={`ml-2 mt-2 text-sm font-bold transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                >
                    ﹀
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute mt-2 w-20 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <ul className="flex flex-col">
                        {currencies.map((currency) => (
                            <li
                                key={currency}
                                onClick={() => handleSelect(currency)}
                                className={`px-4 py-2 cursor-pointer text-gray-600 hover:bg-[#046a58] hover:text-white transition-all ${selected === currency ? "bg-[#046a58] !text-white" : ""
                                    }`}
                            >
                                {currency}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
