import { useMemo } from "react";
import { ramLocations, Location } from "../../shared/locations";

/**
 * Returns a location from the database that rotates daily,
 * using a deterministic seed based on the current date.
 */
export function useDailyLocation(): Location {
    return useMemo(() => {
        const now = new Date();
        const dayOfYear = Math.floor(
            (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) /
            (1000 * 60 * 60 * 24)
        );
        const index = dayOfYear % ramLocations.length;
        return ramLocations[index];
    }, []);
}

/**
 * Returns a suggested "next" location that is different from the current daily location.
 */
export function useNextSuggestion(): Location {
    return useMemo(() => {
        const now = new Date();
        const dayOfYear = Math.floor(
            (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) /
            (1000 * 60 * 60 * 24)
        );
        const index = (dayOfYear + 1) % ramLocations.length;
        return ramLocations[index];
    }, []);
}
