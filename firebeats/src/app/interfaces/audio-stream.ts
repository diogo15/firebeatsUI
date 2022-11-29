export interface AudioStream {
    playing: boolean;
    readableCurrentTime: string;
    readableDuration: string;
    duration: number;
    currentTime: number;
    canplay: boolean;
    error: boolean;
}
