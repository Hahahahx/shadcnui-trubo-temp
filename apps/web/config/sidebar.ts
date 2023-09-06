import type { Url } from 'next/dist/shared/lib/router/router'
import { Icons } from '@/components/icon/icons'

export type Playlist = (typeof playlists)[number]

export const playlists = [
  'Recently Added',
  'Recently Played',
  'Top Songs',
  'Top Albums',
  'Top Artists',
  'Logic Discography',
  'Bedtime Beats',
  'Feeling Happy',
  'I miss Y2K Pop',
  'Runtober',
  'Mellow Days',
  'Eminem Essentials',
]

export type Sider = {
  name: string
  child: {
    name: string
    href: Url
    Icon: (props: any) => JSX.Element
  }[]
}[]

export const sider: Sider = [
  {
    name: 'dashboard',
    child: [
      {
        Icon: Icons.cloud,
        name: 'cloud',
        href: '/dashboard/cloud',
      },
      {
        Icon: Icons.physics,
        name: 'physics',
        href: '/dashboard/physics',
      },
    ],
  },
  {
    name: 'server',
    child: [
      {
        Icon: Icons.physics,
        name: 'instance',
        href: '/server/instance',
      },
      {
        Icon: Icons.physics,
        name: 'flavors',
        href: '/server/flavors',
      },
    ],
  },
  {
    name: 'storage',
    child: [
      {
        Icon: Icons.physics,
        name: 'volume',
        href: '/storage/volume',
      },
      {
        Icon: Icons.physics,
        name: 'snapshot',
        href: '/storage/snapshot',
      },
      {
        Icon: Icons.physics,
        name: 'image',
        href: '/storage/image',
      },
    ],
  },
  {
    name: 'network',
    child: [
      {
        Icon: Icons.physics,
        name: 'network',
        href: '/network',
      },
      {
        Icon: Icons.physics,
        name: 'topology',
        href: '/network/topology',
      },
      {
        Icon: Icons.physics,
        name: 'security-group',
        href: '/network/security-group',
      },
      {
        Icon: Icons.physics,
        name: 'route',
        href: '/network/route',
      },
      {
        Icon: Icons.physics,
        name: 'floating-ips',
        href: '/network/floating-ips',
      },
    ],
  },
  {
    name: 'manage',
    child: [
      {
        Icon: Icons.physics,
        name: 'assets',
        href: '/manage/assets',
      },
      {
        Icon: Icons.physics,
        name: 'service',
        href: '/manage/service',
      },
      {
        Icon: Icons.physics,
        name: 'log',
        href: '/manage/log',
      },
      {
        Icon: Icons.physics,
        name: 'setting',
        href: '/manage/setting',
      },
    ],
  },
]
