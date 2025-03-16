import { useRef, useState } from "react";

export const useDebounce = <T>(defaultValue: T, timing = 400): [T, (value: T) => void] => {
    const timingRef = useRef<NodeJS.Timeout | null>(null);
    const [value, _setValue] = useState<T>(defaultValue);

    const setValue = (value: T) => {
        if (timingRef.current) {
            clearTimeout(timingRef.current);
        }
        timingRef.current = setTimeout(() => {
            _setValue(value);
            timingRef.current = null;
        }, timing);
    };

    return [value, setValue];
};
