import React, { useRef, useState, useEffect } from 'react';

import PlaySVG from './icons/play.svg';
import PauseSVG from './icons/pause.svg';

import * as S from './Voice.styles';
import * as H from './Voice.helpers';

export type VoiceProps = {
  src: string;
  isOwner?: boolean;
};

export function Voice(props: VoiceProps) {
  const { src, isOwner } = props;
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const currentTimeFormated = H.convertCurrentTime(currentTime);

  function togglePlay() {
    if (!audioElem?.current) return;

    if (!isPlaying) {
      audioElem.current.play();
      return;
    }

    audioElem.current.pause();
  }

  useEffect(() => {
    if (!audioElem?.current) return;

    const { current } = audioElem;

    current.volume = '0.1';

    function handelePlayind() {
      setIsPlaying(true);
    }
    function handleEnded() {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }

    function handlePause() {
      setIsPlaying(false);
    }

    function handleTimeupdate() {
      const duration = current?.duration ?? 0;

      setCurrentTime(current.currentTime);
      setProgress((current.currentTime / duration) * 100);
    }

    current.addEventListener('playing', handelePlayind, false);
    current.addEventListener('ended', handleEnded, false);
    current.addEventListener('pause', handlePause, false);
    current.addEventListener('timeupdate', handleTimeupdate);

    return () => {
      current.removeEventListener('playing', handelePlayind);
      current.removeEventListener('ended', handleEnded);
      current.removeEventListener('pause', handlePause);
      current.removeEventListener('timeupdate', handleTimeupdate);
    };
  }, []);

  return (
    <S.Voice isOwner={isOwner}>
      <S.Audio ref={audioElem} src={src} preload="auto" />
      <S.Progress style={{ width: `${progress}%` }} />
      <S.VoiceContainer>
        <S.Button type="button" onClick={togglePlay}>
          {isPlaying ? <PauseSVG /> : <PlaySVG />}
        </S.Button>
        <S.Wave />
        <S.CurrentTime>{currentTimeFormated}</S.CurrentTime>
      </S.VoiceContainer>
    </S.Voice>
  );
}
