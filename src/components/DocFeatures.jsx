import React from 'react';
import { 
  BlueText, 
  GreenText, 
  PurpleText, 
  GreyText,
  YellowText,
  OrangeText,
  PinkText,
  RedText,
  GenericBlueText,
  GenericGreenText,
  GenericPurpleText,
  GenericGreyText,
  GenericYellowText,
  GenericOrangeText,
  GenericPinkText,
  GenericRedText,
  NewImg,
  Video
} from './DocComponents';

// Create a context to provide all components
const DocContext = React.createContext({});

// Provider component that makes all components available to children
export function DocProvider({ children }) {
  const components = {
    BlueText,
    GreenText,
    PurpleText,
    GreyText,
    YellowText,
    OrangeText,
    PinkText,
    RedText,
    GenericBlueText,
    GenericGreenText,
    GenericPurpleText,
    GenericGreyText,
    GenericYellowText,
    GenericOrangeText,
    GenericPinkText,
    GenericRedText,
    NewImg,
    Video
  };

  return (
    <DocContext.Provider value={components}>
      {children}
    </DocContext.Provider>
  );
}

// Main feature box component
export function DocFeatures({ children }) {
  return (
    <DocProvider>
      <div style={{
        padding: '20px',
        backgroundColor: 'rgba(102, 179, 255, 0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(102, 179, 255, 0.2)',
        margin: '20px 0'
      }}>
        {children}
      </div>
    </DocProvider>
  );
}

// Export all components directly as well
export {
  BlueText,
  GreenText,
  PurpleText,
  GreyText,
  YellowText,
  OrangeText,
  PinkText,
  RedText,
  GenericBlueText,
  GenericGreenText,
  GenericPurpleText,
  GenericGreyText,
  GenericYellowText,
  GenericOrangeText,
  GenericPinkText,
  GenericRedText,
  NewImg,
  Video
};