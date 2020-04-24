import * as React from 'react'
import { withNaming } from '@bem-react/classname'
import './Icon.scss'

const cn = withNaming({ n: '', e: '__', m: '_' })

const icons = {
  calendar: (
    <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.60806 9H3.36264C3.15714 9 2.98901 8.83125 2.98901 8.625V7.375C2.98901 7.16875 3.15714 7 3.36264 7H4.60806C4.81355 7 4.98169 7.16875 4.98169 7.375V8.625C4.98169 8.83125 4.81355 9 4.60806 9ZM7.9707 8.625V7.375C7.9707 7.16875 7.80256 7 7.59707 7H6.35165C6.14615 7 5.97802 7.16875 5.97802 7.375V8.625C5.97802 8.83125 6.14615 9 6.35165 9H7.59707C7.80256 9 7.9707 8.83125 7.9707 8.625ZM10.9597 8.625V7.375C10.9597 7.16875 10.7916 7 10.5861 7H9.34066C9.13517 7 8.96703 7.16875 8.96703 7.375V8.625C8.96703 8.83125 9.13517 9 9.34066 9H10.5861C10.7916 9 10.9597 8.83125 10.9597 8.625ZM7.9707 11.625V10.375C7.9707 10.1687 7.80256 10 7.59707 10H6.35165C6.14615 10 5.97802 10.1687 5.97802 10.375V11.625C5.97802 11.8313 6.14615 12 6.35165 12H7.59707C7.80256 12 7.9707 11.8313 7.9707 11.625ZM4.98169 11.625V10.375C4.98169 10.1687 4.81355 10 4.60806 10H3.36264C3.15714 10 2.98901 10.1687 2.98901 10.375V11.625C2.98901 11.8313 3.15714 12 3.36264 12H4.60806C4.81355 12 4.98169 11.8313 4.98169 11.625ZM10.9597 11.625V10.375C10.9597 10.1687 10.7916 10 10.5861 10H9.34066C9.13517 10 8.96703 10.1687 8.96703 10.375V11.625C8.96703 11.8313 9.13517 12 9.34066 12H10.5861C10.7916 12 10.9597 11.8313 10.9597 11.625ZM13.9487 3.5V14.5C13.9487 15.3281 13.2793 16 12.4542 16H1.49451C0.669414 16 0 15.3281 0 14.5V3.5C0 2.67188 0.669414 2 1.49451 2H2.98901V0.375C2.98901 0.16875 3.15714 0 3.36264 0H4.60806C4.81355 0 4.98169 0.16875 4.98169 0.375V2H8.96703V0.375C8.96703 0.16875 9.13517 0 9.34066 0H10.5861C10.7916 0 10.9597 0.16875 10.9597 0.375V2H12.4542C13.2793 2 13.9487 2.67188 13.9487 3.5ZM12.4542 14.3125V5H1.49451V14.3125C1.49451 14.4156 1.57857 14.5 1.68132 14.5H12.2674C12.3701 14.5 12.4542 14.4156 12.4542 14.3125Z" />
    </svg>
  ),
  clock: (
    <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2789 5.75L12.9834 5.04375C13.1299 4.89687 13.1299 4.65937 12.9834 4.5125L12.4535 3.98125C12.307 3.83438 12.07 3.83438 11.9235 3.98125L11.2783 4.62813C10.3088 3.76875 9.08371 3.19375 7.73082 3.04063V1.5H8.60365C8.80939 1.5 8.97772 1.33125 8.97772 1.125V0.375C8.97772 0.16875 8.80939 0 8.60365 0H5.3617C5.15596 0 4.98763 0.16875 4.98763 0.375V1.125C4.98763 1.33125 5.15596 1.5 5.3617 1.5H6.23454V3.04375C3.00506 3.41563 0.498779 6.1625 0.498779 9.5C0.498779 13.0906 3.40095 16 6.98268 16C10.5644 16 13.4666 13.0906 13.4666 9.5C13.4666 8.10312 13.027 6.80937 12.2789 5.75ZM6.98268 14.5C4.22702 14.5 1.99506 12.2625 1.99506 9.5C1.99506 6.7375 4.22702 4.5 6.98268 4.5C9.73833 4.5 11.9703 6.7375 11.9703 9.5C11.9703 12.2625 9.73833 14.5 6.98268 14.5ZM7.35675 11H6.60861C6.40287 11 6.23454 10.8313 6.23454 10.625V6.375C6.23454 6.16875 6.40287 6 6.60861 6H7.35675C7.56249 6 7.73082 6.16875 7.73082 6.375V10.625C7.73082 10.8313 7.56249 11 7.35675 11Z" />
    </svg>
  ),
  close: (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z" />
    </svg>
  ),
  commit: (
    <svg width="16" height="8" viewBox="0 0 16 8" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.2 4C3.2 4.27 3.2225 4.5375 3.265 4.8H0.3C0.135 4.8 0 4.665 0 4.5V3.5C0 3.335 0.135 3.2 0.3 3.2H3.265C3.2225 3.4625 3.2 3.73 3.2 4ZM15.7 3.2H12.735C12.78 3.4625 12.8 3.73 12.8 4C12.8 4.27 12.7775 4.5375 12.735 4.8H15.7C15.865 4.8 16 4.665 16 4.5V3.5C16 3.335 15.865 3.2 15.7 3.2ZM8 1.2C7.2525 1.2 6.55 1.4925 6.02 2.02C5.49 2.55 5.2 3.2525 5.2 4C5.2 4.7475 5.49 5.45 6.02 5.98C6.55 6.5075 7.2525 6.8 8 6.8C8.7475 6.8 9.45 6.5075 9.98 5.98C10.51 5.45 10.8 4.7475 10.8 4C10.8 3.2525 10.51 2.55 9.98 2.02C9.45 1.4925 8.7475 1.2 8 1.2ZM8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0Z" />
    </svg>
  ),
  error: (
    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0.34375C5.11328 0.34375 0.34375 5.11328 0.34375 11C0.34375 16.8867 5.11328 21.6562 11 21.6562C16.8867 21.6562 21.6562 16.8867 21.6562 11C21.6562 5.11328 16.8867 0.34375 11 0.34375ZM16.225 13.7973C16.427 13.9992 16.427 14.3258 16.225 14.5277L14.5234 16.225C14.3215 16.427 13.9949 16.427 13.793 16.225L11 13.4062L8.20273 16.225C8.00078 16.427 7.67422 16.427 7.47227 16.225L5.775 14.5234C5.57305 14.3215 5.57305 13.9949 5.775 13.793L8.59375 11L5.775 8.20273C5.57305 8.00078 5.57305 7.67422 5.775 7.47227L7.47656 5.7707C7.67852 5.56875 8.00508 5.56875 8.20703 5.7707L11 8.59375L13.7973 5.775C13.9992 5.57305 14.3258 5.57305 14.5277 5.775L16.2293 7.47656C16.4312 7.67852 16.4312 8.00508 16.2293 8.20703L13.4062 11L16.225 13.7973Z" />
    </svg>
  ),
  rebuild: (
    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.77548 3.03097C8.01915 2.32277 7.03761 1.93456 5.99632 1.93548C4.12234 1.93713 2.50452 3.22205 2.05783 5.00444C2.02531 5.13419 1.90972 5.22581 1.77595 5.22581H0.389589C0.208185 5.22581 0.070379 5.06112 0.103935 4.88284C0.627411 2.103 3.06806 0 6 0C7.60761 0 9.06752 0.632322 10.1447 1.66173L11.0088 0.797661C11.3746 0.431879 12 0.690944 12 1.20825V4.45161C12 4.7723 11.74 5.03226 11.4194 5.03226H8.17599C7.65869 5.03226 7.39962 4.40683 7.7654 4.04102L8.77548 3.03097ZM0.580645 6.96774H3.82401C4.34131 6.96774 4.60038 7.59317 4.2346 7.95898L3.22452 8.96906C3.98085 9.67727 4.96246 10.0655 6.00377 10.0645C7.87679 10.0628 9.49527 8.7788 9.94217 6.99561C9.97468 6.86586 10.0903 6.77424 10.224 6.77424H11.6104C11.7918 6.77424 11.9296 6.93893 11.8961 7.11721C11.3726 9.897 8.93194 12 6 12C4.39239 12 2.93248 11.3677 1.85528 10.3383L0.99121 11.2023C0.625427 11.5681 0 11.3091 0 10.7917V7.54839C0 7.2277 0.25996 6.96774 0.580645 6.96774Z" />
    </svg>
  ),
  run: (
    <svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.28873 4.19256L1.41401 0.128275C0.855434 -0.20179 0 0.11851 0 0.934883V9.06151C0 9.7939 0.79489 10.2353 1.41401 9.86811L8.28873 5.80578C8.90198 5.44447 8.90394 4.55388 8.28873 4.19256Z" />
    </svg>
  ),
  settings: (
    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3408 7.44193L10.3102 6.84677C10.4142 6.28548 10.4142 5.70968 10.3102 5.14839L11.3408 4.55323C11.4594 4.48549 11.5126 4.34517 11.4739 4.21452C11.2053 3.35324 10.7481 2.57421 10.1505 1.92582C10.0586 1.82663 9.90858 1.80244 9.79245 1.87018L8.76181 2.46534C8.32874 2.09276 7.83036 1.80485 7.29085 1.61615V0.428247C7.29085 0.292763 7.19649 0.174216 7.06343 0.145183C6.17553 -0.0532029 5.26585 -0.0435256 4.4215 0.145183C4.28844 0.174216 4.19408 0.292763 4.19408 0.428247V1.61856C3.65699 1.80969 3.1586 2.0976 2.72312 2.46776L1.6949 1.8726C1.57635 1.80485 1.42877 1.82663 1.33684 1.92824C0.739258 2.57421 0.282002 3.35324 0.0134545 4.21694C-0.0276744 4.34759 0.0279705 4.48791 0.146518 4.55565L1.17716 5.15081C1.07313 5.7121 1.07313 6.2879 1.17716 6.84919L0.146518 7.44435C0.0279705 7.51209 -0.0252551 7.65241 0.0134545 7.78306C0.282002 8.64434 0.739258 9.42337 1.33684 10.0718C1.42877 10.171 1.57877 10.1951 1.6949 10.1274L2.72554 9.53224C3.1586 9.90482 3.65699 10.1927 4.1965 10.3814V11.5718C4.1965 11.7072 4.29086 11.8258 4.42392 11.8548C5.31182 12.0532 6.2215 12.0435 7.06585 11.8548C7.19891 11.8258 7.29327 11.7072 7.29327 11.5718V10.3814C7.83036 10.1903 8.32874 9.9024 8.76423 9.53224L9.79487 10.1274C9.91342 10.1951 10.061 10.1734 10.1529 10.0718C10.7505 9.42579 11.2078 8.64676 11.4763 7.78306C11.5126 7.64999 11.4594 7.50967 11.3408 7.44193ZM5.74247 7.93306C4.67553 7.93306 3.80699 7.06451 3.80699 5.99758C3.80699 4.93065 4.67553 4.0621 5.74247 4.0621C6.8094 4.0621 7.67794 4.93065 7.67794 5.99758C7.67794 7.06451 6.8094 7.93306 5.74247 7.93306Z" />
    </svg>
  ),
  success: (
    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6562 11C21.6562 16.8853 16.8853 21.6562 11 21.6562C5.1147 21.6562 0.34375 16.8853 0.34375 11C0.34375 5.1147 5.1147 0.34375 11 0.34375C16.8853 0.34375 21.6562 5.1147 21.6562 11ZM9.7674 16.6424L17.6736 8.73615C17.9421 8.46768 17.9421 8.03236 17.6736 7.76389L16.7014 6.79164C16.4329 6.52313 15.9976 6.52313 15.7291 6.79164L9.28125 13.2394L6.2709 10.2291C6.00243 9.96063 5.56712 9.96063 5.29861 10.2291L4.32635 11.2014C4.05788 11.4698 4.05788 11.9051 4.32635 12.1736L8.7951 16.6424C9.06361 16.9109 9.49889 16.9109 9.7674 16.6424Z" />
    </svg>
  ),
  user: (
    <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.125 7C8.0582 7 9.625 5.4332 9.625 3.5C9.625 1.5668 8.0582 0 6.125 0C4.1918 0 2.625 1.5668 2.625 3.5C2.625 5.4332 4.1918 7 6.125 7ZM8.575 7.875H8.11836C7.51133 8.15391 6.83594 8.3125 6.125 8.3125C5.41406 8.3125 4.74141 8.15391 4.13164 7.875H3.675C1.64609 7.875 0 9.52109 0 11.55V12.6875C0 13.4121 0.587891 14 1.3125 14H10.9375C11.6621 14 12.25 13.4121 12.25 12.6875V11.55C12.25 9.52109 10.6039 7.875 8.575 7.875Z" />
    </svg>
  ),
  warning: (
    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C4.92339 0 0 4.92339 0 11C0 17.0766 4.92339 22 11 22C17.0766 22 22 17.0766 22 11C22 4.92339 17.0766 0 11 0ZM15.1024 13.8831L14.2153 14.9919C14.1571 15.0647 14.0851 15.1253 14.0034 15.1703C13.9218 15.2153 13.8321 15.2437 13.7395 15.254C13.6468 15.2643 13.5531 15.2562 13.4636 15.2303C13.3741 15.2044 13.2905 15.161 13.2177 15.1028L10.246 12.8975C10.0383 12.7313 9.87072 12.5204 9.75555 12.2807C9.64039 12.0409 9.58061 11.7783 9.58064 11.5123V4.6129C9.58064 4.42469 9.65541 4.24418 9.7885 4.11109C9.92159 3.978 10.1021 3.90323 10.2903 3.90323H11.7097C11.8979 3.90323 12.0784 3.978 12.2115 4.11109C12.3446 4.24418 12.4194 4.42469 12.4194 4.6129V11L14.9919 12.8851C15.0647 12.9433 15.1254 13.0154 15.1703 13.0971C15.2153 13.1787 15.2437 13.2685 15.254 13.3612C15.2642 13.4539 15.2561 13.5477 15.2301 13.6372C15.2041 13.7268 15.1607 13.8103 15.1024 13.8831Z" />
    </svg>
  ),
}

interface IconProps {
  className?: {
    size?: 'm' | 's'
    view?: 'ghost'
  }
  name:
    | 'settings'
    | 'run'
    | 'rebuild'
    | 'close'
    | 'calendar'
    | 'clock'
    | 'commit'
    | 'error'
    | 'success'
    | 'user'
    | 'warning'
}

const Icon: React.FC<IconProps> = ({ className, name }) => {
  const cnIcon = cn('icon')(className)
  return <span className={cnIcon}>{icons[name]}</span>
}

export default Icon
