import { ReactNode } from 'react';

/**
 * メニューボタンの型
 */
export type MenuItemType = {
  label: string;
  path: string;
  icon?: ReactNode;
};
