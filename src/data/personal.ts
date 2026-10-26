import type { ComponentType } from 'react';
import {
  Award,
  MapPin,
  Newspaper,
  Palmtree,
  PartyPopper,
  Sailboat,
  Stamp,
  TrendingUp,
} from 'lucide-react';

export type DreamIcon = ComponentType<{ className?: string }>;

export interface BucketDream {
  id: string;
  title: string;
  detail: string;
  /** true → green strikethrough + STAMPED badge. Flip freely. */
  done: boolean;
  Icon: DreamIcon;
}

export const bucketList: BucketDream[] = [
  {
    id: 'north-india',
    title: 'Visited North India for the first time for trying rafting',
    detail: 'Went up north on the rafting mission — first trip, big rivers.',
    done: true,
    Icon: MapPin,
  },
  {
    id: 'rishikesh',
    title: 'Rafting in Rishikesh',
    detail: 'The reason for the trip — rapids, done and dusted.',
    done: true,
    Icon: Sailboat,
  },
  {
    id: 'singapore',
    title: 'Got my passport stamped for the first time at Singapore',
    detail: 'The stamp that starts the collection.',
    done: true,
    Icon: Stamp,
  },
  {
    id: 'padi',
    title: 'Get PADI scuba certified',
    detail: 'Certification before the deep dives.',
    done: false,
    Icon: Award,
  },
  {
    id: 'thailand',
    title: 'Scuba diving in Thailand',
    detail: 'Warm water, coral, and zero gravity.',
    done: false,
    Icon: Palmtree,
  },
  {
    id: 'navaratri',
    title: 'Navaratri in Ahmedabad',
    detail: 'Nine nights of garba where it hits hardest.',
    done: false,
    Icon: PartyPopper,
  },
];

export interface Love {
  title: string;
  blurb: string;
  Icon: DreamIcon;
}

export const loves: Love[] = [
  {
    title: 'Stock market blogs',
    blurb: 'Market structure, investor letters, and the occasional annual-report rabbit hole.',
    Icon: TrendingUp,
  },
  {
    title: 'Tech blogs',
    blurb: 'Engineering deep-dives, release notes, and essays I actually finish.',
    Icon: Newspaper,
  },
];
