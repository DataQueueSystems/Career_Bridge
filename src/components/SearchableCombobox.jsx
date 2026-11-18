import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check, X, Search } from 'lucide-react';

export default function SearchableCombobox({
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Type or select...',
  label,
  required = false,
  icon: Icon,
  className = '',
  emptyText = 'No matches found. You can keep typing to use your own entry.',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Filter options based on typed input
  const filteredOptions = value
    ? options.filter((opt) => opt.toLowerCase().includes(value.toLowerCase().trim()))
    : options;

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    // If the option is the fallback 'Other College / Institution (Type your college name)', just clear or keep focus
    if (option.startsWith('Other')) {
      onChange('');
      setIsOpen(false);
      inputRef.current?.focus();
      return;
    }
    onChange(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      );
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
        e.preventDefault();
        handleSelect(filteredOptions[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-navy-800">
          <span className="flex items-center gap-1.5">
            {Icon && <Icon size={15} className="text-brand shrink-0" />}
            {label} {required && <span className="text-rose-500">*</span>}
          </span>
        </label>
      )}

      <div className="relative mt-1.5">
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={value}
          required={required}
          autoComplete="off"
          placeholder={placeholder}
          onFocus={() => {
            setIsOpen(true);
            setHighlightedIndex(-1);
          }}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-16 font-normal text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15"
        />

        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 text-slate-400">
          {value && (
            <button
              type="button"
              onClick={() => {
                onChange('');
                setIsOpen(true);
                inputRef.current?.focus();
              }}
              title="Clear entry"
              className="rounded-lg p-1 hover:bg-slate-100 hover:text-slate-600 transition"
            >
              <X size={15} />
            </button>
          )}
          <button
            type="button"
            tabIndex={-1}
            onClick={() => {
              setIsOpen(!isOpen);
              inputRef.current?.focus();
            }}
            title="Toggle dropdown list"
            className="rounded-lg p-1 hover:bg-slate-100 hover:text-slate-600 transition"
          >
            <ChevronDown
              size={17}
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Floating Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <span className="flex items-center gap-1.5">
              <Search size={12} className="text-brand" />
              {filteredOptions.length > 0
                ? `${filteredOptions.length} suggestions found`
                : 'Custom Entry'}
            </span>
            <span className="text-[10px] lowercase text-slate-400 font-normal">
              click to select or keep typing
            </span>
          </div>

          <ul className="max-h-52 overflow-y-auto p-1.5 text-sm text-slate-700 divide-y divide-slate-50">
            {filteredOptions.length > 0 ? (
              filteredOptions.slice(0, 100).map((option, idx) => {
                const isSelected = value.trim().toLowerCase() === option.toLowerCase();
                const isHighlighted = idx === highlightedIndex;

                return (
                  <li key={option}>
                    <button
                      type="button"
                      onMouseEnter={() => setHighlightedIndex(idx)}
                      onClick={() => handleSelect(option)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs sm:text-sm transition ${
                        isHighlighted
                          ? 'bg-brand/10 text-brand font-semibold'
                          : isSelected
                          ? 'bg-amber-50 text-amber-900 font-bold'
                          : 'hover:bg-slate-50 text-navy-900'
                      }`}
                    >
                      <span className="truncate pr-2">{option}</span>
                      {isSelected && (
                        <Check size={16} className="shrink-0 text-brand" />
                      )}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="px-3 py-4 text-center text-xs text-slate-500">
                <p className="font-medium text-navy-800">
                  &ldquo;{value}&rdquo; is not in our list.
                </p>
                <p className="mt-1 text-slate-400">
                  {emptyText}
                </p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
