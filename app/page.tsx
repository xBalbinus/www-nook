import '@root/animations.scss';
import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import DefaultLayout from '@components/DefaultLayout';
import Package from '@root/package.json';
import Script from 'next/script';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://wireframes.internet.dev';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      icon: '/favicon-32x32.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://wireframes.internet.dev'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png',
          width: 1200,
          height: 628,
        },
      ],
      title,
      type: 'website',
      url,
    },
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      handle,
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png'],
      title,
      url,
    },
    url,
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <div>Accordion</div>
      <div>Action bar</div>
      <div>Action button</div>
      <div>Action list</div>
      <div>Alert banner</div>
      <div>Application bar</div>
      <div>Autocomplete</div>
      <div>Avatar</div>
      <div>Badges</div>
      <div>Bottom sheet</div>
      <div>Breadcrumbs</div>
      <div>Button</div>
      <div>Button group</div>
      <div>Cards</div>
      <div>Checkbox</div>
      <div>Chip</div>
      <div>Code snippet</div>
      <div>Combobox</div>
      <div>Data table</div>
      <div>Date picker</div>
      <div>Dialog</div>
      <div>Divider</div>
      <div>Drawer</div>
      <div>Dropdown</div>
      <div>Empty state</div>
      <div>Filter input</div>
      <div>Form</div>
      <div>Help text</div>
      <div>Icon</div>
      <div>Inline message</div>
      <div>Label</div>
      <div>Link</div>
      <div>List</div>
      <div>Menus</div>
      <div>Modal</div>
      <div>Navigation bar</div>
      <div>Page header</div>
      <div>Pagination</div>
      <div>Popover</div>
      <div>Progress bar</div>
      <div>Progress indicator</div>
      <div>Radio button</div>
      <div>Search</div>
      <div>Segmented Control</div>
      <div>Select</div>
      <div>Sidebar</div>
      <div>Slider</div>
      <div>Snackbar</div>
      <div>Switch</div>
      <div>Tabs</div>
      <div>Tag</div>
      <div>Text area</div>
      <div>Text field</div>
      <div>Tooltip</div>
      <div>Tree view</div>
    </DefaultLayout>
  );
}
