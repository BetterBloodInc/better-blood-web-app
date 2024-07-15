import { BiomarkerMeasurement } from "~src/types/user-types";

export function sortByTimestampInReverseChronologicalOrder(a: BiomarkerMeasurement, b: BiomarkerMeasurement): number {
    return b.timestamp - a.timestamp;
}