import { useEffect, useRef, useState } from 'react';
import { PlayCircle, PauseCircle, Volume, Volume1, Volume2, VolumeX, Clock } from 'lucide-react';
import { LineVertical } from '@phosphor-icons/react';

export default function AudioPlayer({ src }) {
    const audioRef = useRef(null);
    const volumeRangeRef = useRef(null);
    const volumeRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.25);
    const [volumeIcon, setVolumeIcon] = useState(<Volume />);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const clickPlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.pause();
        else {
            audioRef.current.volume = volume;
            audioRef.current.play();
        };
        setIsPlaying(!isPlaying);
    };
    const changeVolume = () => {
        setVolume(volumeRangeRef.current.value);
        if (audioRef.current)
            audioRef.current.volume = volumeRangeRef.current.value;
        if (volumeRangeRef.current.value == 0) setVolumeIcon(<VolumeX />);
        else if (volumeRangeRef.current.value < 0.33) setVolumeIcon(<Volume />);
        else if (volumeRangeRef.current.value < 0.66) setVolumeIcon(<Volume1 />);
        else setVolumeIcon(<Volume2 />);
    };
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onLoaded = () => {
            setDuration(audio.duration);
        };

        const changeTime = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('loadedmetadata', onLoaded);
        audio.addEventListener('timeupdate', changeTime);

        return () => {
            audio.removeEventListener('loadedmetadata', onLoaded);
            audio.removeEventListener('timeupdate', changeTime);
        };
    }, []);
    const changeTime = (e) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
        setCurrentTime(newTime);
    };
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="p-4 bg-[#1e293b] text-white rounded-md">
            <div className='flex items-center justify-center border-b border-gray-300 pb-2'>
                <audio ref={audioRef} src={src} loop />
                <div className='flex items-center gap-2'>
                    <h2 className='text-white fw-bold'>música tema</h2>
                    <button
                        onClick={clickPlay}
                        className={`rounded-full cursor-pointer`}
                    >
                        {isPlaying ? <PauseCircle /> : <PlayCircle />}
                    </button>
                </div>
                <div className="flex items-center">
                    <LineVertical size={32} />
                </div>
                <div className='flex items-center gap-2'>
                    <div ref={volumeRef}>{volumeIcon}</div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        ref={volumeRangeRef}
                        onChange={changeVolume}
                        className="w-fit cursor-pointer"
                        value={volume}
                    />
                </div>
            </div>
            <div className='flex items-center gap-2 pt-2'>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={currentTime}
                    onChange={changeTime}
                    className="w-[65%] cursor-pointer"
                />
                <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>

            </div>
        </div>
    );
}
