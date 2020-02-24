import React, { useRef, useState, useEffect } from 'react';

import * as S from './VoiceMessage.styles';

export type VoiceMessageProps = {
  audioSrc: string;
};

const timeDigitalFormat = number => (number < 10 ? `0${number}` : number);
const convertCurrentTime = number => {
  const mins = timeDigitalFormat(Math.floor(number / 60));
  const secs = timeDigitalFormat((number % 60).toFixed());

  return `${mins}:${secs}`;
};

export function VoiceMessage(props: VoiceMessageProps) {
  const { audioSrc } = props;
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
      return;
    }
    audioElem.current.pause();
  };

  useEffect(() => {
    audioElem.current.volume = '0.01';
    audioElem.current.addEventListener(
      'playing',
      () => {
        setIsPlaying(true);
      },
      false
    );
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );
    audioElem.current.addEventListener(
      'pause',
      () => {
        setIsPlaying(false);
      },
      false
    );
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = audioElem?.current?.duration ?? 0;

      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  return (
    <S.VoiceMessage>
      <div className="message__audio">
        <audio ref={audioElem} src={audioSrc} preload="auto" />
        <div
          className="message__audio-progress"
          style={{ width: `${progress}%` }}
        />
        <div className="message__audio-info">
          <div className="message__audio-btn">
            <button type="button" onClick={togglePlay}>
              {isPlaying
                ? {
                    /* todo: pause svg */
                  }
                : {
                    /* todo: play svg */
                  }}
            </button>
          </div>
          <div className="message__audio-wave">{/* todo: wave svg */}</div>
          <span className="message__audio-duration">
            {convertCurrentTime(currentTime)}
          </span>
        </div>
      </div>
    </S.VoiceMessage>
  );
}
