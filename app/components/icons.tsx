/**
 * Verified HugeIcons wrappers.
 *
 * EVERY name in this file was checked against
 * `node_modules/@hugeicons/core-free-icons/dist/types/*.d.ts`.
 * Do not add an icon here without verifying the export exists first * a wrong name renders a blank <svg> with zero build errors.
 *
 * @see PLAN.md "Validate icon-name mappings before bulk-renaming"
 */

import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";

import ArrowRight01Icon from "@hugeicons/core-free-icons/ArrowRight01Icon";
import BoltIcon from "@hugeicons/core-free-icons/BoltIcon";
import Book01Icon from "@hugeicons/core-free-icons/Book01Icon";
import Cancel01Icon from "@hugeicons/core-free-icons/Cancel01Icon";
import CheckmarkCircle01Icon from "@hugeicons/core-free-icons/CheckmarkCircle01Icon";
import ChevronDownIcon from "@hugeicons/core-free-icons/ChevronDownIcon";
import Chat01Icon from "@hugeicons/core-free-icons/Chat01Icon";
import Download01Icon from "@hugeicons/core-free-icons/Download01Icon";
import Gamepad01Icon from "@hugeicons/core-free-icons/Gamepad01Icon";
import Globe02Icon from "@hugeicons/core-free-icons/Globe02Icon";
import School01Icon from "@hugeicons/core-free-icons/School01Icon";
import HashIcon from "@hugeicons/core-free-icons/HashIcon";
import Image01Icon from "@hugeicons/core-free-icons/Image01Icon";
import Menu01Icon from "@hugeicons/core-free-icons/Menu01Icon";
import Mic01Icon from "@hugeicons/core-free-icons/Mic01Icon";
import PaintBoardIcon from "@hugeicons/core-free-icons/PaintBoardIcon";
import PinIcon from "@hugeicons/core-free-icons/PinIcon";
import PlusIcon from "@hugeicons/core-free-icons/PlusIcon";
import PuzzleIcon from "@hugeicons/core-free-icons/PuzzleIcon";
import Rocket01Icon from "@hugeicons/core-free-icons/Rocket01Icon";
import Search01Icon from "@hugeicons/core-free-icons/Search01Icon";
import SendIcon from "@hugeicons/core-free-icons/SendIcon";
import ShieldCheckIcon from "@hugeicons/core-free-icons/ShieldCheckIcon";
import SmileIcon from "@hugeicons/core-free-icons/SmileIcon";
import Speaker01Icon from "@hugeicons/core-free-icons/Speaker01Icon";
import SparklesIcon from "@hugeicons/core-free-icons/SparklesIcon";
import StarsIcon from "@hugeicons/core-free-icons/StarsIcon";
import ThreadIcon from "@hugeicons/core-free-icons/ThreadIcon";
import Tick01Icon from "@hugeicons/core-free-icons/Tick01Icon";
import UserGroupIcon from "@hugeicons/core-free-icons/UserGroupIcon";
import Video01Icon from "@hugeicons/core-free-icons/Video01Icon";

/** Compile-time guard: every icon must be a real IconSvgElement. */
type AssertIcon = IconSvgElement;

export const Icons = {
  arrowRight: ArrowRight01Icon,
  bolt: BoltIcon,
  book: Book01Icon,
  cancel: Cancel01Icon,
  checkCircle: CheckmarkCircle01Icon,
  chevronDown: ChevronDownIcon,
  chat: Chat01Icon,
  download: Download01Icon,
  gamepad: Gamepad01Icon,
  globe: Globe02Icon,
  school: School01Icon,
  hash: HashIcon,
  image: Image01Icon,
  menu: Menu01Icon,
  mic: Mic01Icon,
  paint: PaintBoardIcon,
  pin: PinIcon,
  plus: PlusIcon,
  puzzle: PuzzleIcon,
  rocket: Rocket01Icon,
  search: Search01Icon,
  send: SendIcon,
  shield: ShieldCheckIcon,
  smile: SmileIcon,
  speaker: Speaker01Icon,
  sparkle: SparklesIcon,
  stars: StarsIcon,
  thread: ThreadIcon,
  tick: Tick01Icon,
  users: UserGroupIcon,
  video: Video01Icon,
} satisfies Record<string, AssertIcon>;

/** Default stroke weight thin, consistent with the hairline aesthetic. */
const DEFAULT_STROKE = 1.6;

export type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/**
 * Single render entry point. `name` is typed, so a typo is a build error.
 */
export default function Icon({
  name,
  size = 20,
  strokeWidth = DEFAULT_STROKE,
  className = "",
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={Icons[name]}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden
      className={className}
    />
  );
}
