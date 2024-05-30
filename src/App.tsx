import { FC } from 'react';
import { ProviderRoot } from './providers/ProviderRoot';
import './global.css';
import { RouterInstance } from './routes/RouterInstance';

export const App: FC = () => {
  return (
    <ProviderRoot>
      <RouterInstance />
    </ProviderRoot>
  );
};
