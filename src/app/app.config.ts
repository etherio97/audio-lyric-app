import { MenuItem } from './core/types/menu-item.type';
import { MimeType } from './core/types/mime-type.enum';

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: 'heroicons_solid:music-note',
    title: 'Add Audio',
    action: 'import-audio',
  },
  {
    icon: 'heroicons_solid:video-camera',
    title: 'Add Video',
    action: 'import-video',
  },
  {
    icon: 'heroicons_solid:annotation',
    title: 'Add Lyric',
    action: 'import-subtitle',
  },
];

export const MIME_TYPES = {
  [MimeType.AUIDO]: ['audio/*'],
  [MimeType.VIDEO]: ['video/*'],
  [MimeType.IMAGE]: ['image/*'],
  [MimeType.LYRIC]: ['plain/text', '.srt'],
};
