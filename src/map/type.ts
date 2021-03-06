export interface MapProps {
    type: string;
    contact: string;
    showLog: boolean;
    onStateClicked: (state: string) => void;
}

export type MapData = {
    data: MapDataEntry[];
    maxValue: number;
};

export type MapDataEntry = [string, MapStateEntry[]]; // [0] = date

export type MapStateEntry = [string, number]; // state, value
