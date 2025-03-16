"use client";
import { useCallback, useEffect, useState } from "react";

const IS_SERVER = typeof window === "undefined";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const getJsonLocalStorage = useCallback(
    (key: string, fallbackValue: T) => {
      if (IS_SERVER) {
        return fallbackValue;
      }

      const stored = localStorage.getItem(key);

      return stored !== "undefined" ? JSON.parse(stored) : fallbackValue;
    },
    [fallbackValue, key]
  );

  const [value, setValue] = useState(() =>
    getJsonLocalStorage(key, fallbackValue)
  );

  useEffect(() => {
    const stored = localStorage.getItem(key);

    setValue(stored !== "undefined" ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

