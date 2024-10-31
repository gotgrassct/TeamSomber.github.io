import React from 'react';
import { MusicPlayer } from '../components/MusicPlayer';

export default function Root({ children }) {
  return (
    <>
      {children}
      <MusicPlayer />
    </>
  );
} 