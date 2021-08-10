import React, { useState } from "react";
import TimeIcon from "./Icons/TimeIcon";

type TimerProps = {
    timerTime?: number;
};

/**
 * A Component that counts down from a given time
 * @param {number} timerTime the time of the timer in seconds
 * @returns {JSX.Element} Countown timer Button
 * @example <Timer timerTime={180} />
 */
const Timer: React.FC<TimerProps> = ({ timerTime = 60 }): JSX.Element => {
    const [time, setTime] = useState<number>(timerTime);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [intervalval, setIntervalVal] = useState<any>();

    /*
    const [audio] = useState(
        typeof Audio !== 'undefined' &&
        new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
    );
    */

    // starts the countdown
    const startTimer = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
        setIsRunning(true);
        let seconds = time;
        let countDown: any = setInterval(() => {
            let newSeconds = handleCountDown(seconds);
            seconds = newSeconds;
        }, 1000);
        setIntervalVal(countDown);
    };

    // counts one second down
    const handleCountDown = (seconds: number): number => {
        seconds -= 1;
        if (seconds >= 0) {
            setTime(seconds);
        }
        if (seconds === -1) {
            //audio.play();
            clearInterval(intervalval);
            setTime(timerTime);
            setIsRunning(false);
            console.log("finished timer");
        }
        return seconds;
    };

    // stops and resets the countdown
    const stopTimer = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
        setIsRunning(false);
        clearInterval(intervalval);
        setTime(timerTime);
    };

    return (
        <>
            <button
                onClick={isRunning ? stopTimer : startTimer}
                className={`${isRunning ? `bg-primary` : `bg-bgHighlight`}
                px-4 py-2 text-headline rounded-md font-headline w-full text-center mb-4 text-sm mx-1 flex justify-center`}
            >
                <div className="flex items-center">
                    <TimeIcon /> <span className="ml-1">{time} s</span>
                </div>
            </button>
        </>
    );
};
export default Timer;
