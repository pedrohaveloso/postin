type HeartSvgProps = {
  className?: string;
  filled: boolean;
}

export default function HeartSvg({ className = "", filled }: HeartSvgProps) {

  if (filled) {
    return <svg className={className} height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={className} d="M20.287 36.274C19.8645 36.274 19.4481 36.1993 19.0376 36.0501C18.627 35.9008 18.2685 35.6729 17.962 35.3664L15.3001 32.8924C11.1747 29.083 7.59333 25.4247 4.556 21.9174C1.51867 18.4102 0 14.7247 0 10.8609C0 7.77323 1.03425 5.19117 3.10275 3.1147C5.17122 1.03823 7.73263 0 10.787 0C12.479 0 14.1544 0.396384 15.8131 1.18915C17.4718 1.98192 18.9631 3.29568 20.287 5.13045C21.7776 3.29568 23.3022 1.98192 24.8609 1.18915C26.4196 0.396384 28.0616 0 29.787 0C32.8493 0 35.4187 1.03823 37.4952 3.1147C39.5716 5.19117 40.6099 7.77323 40.6099 10.8609C40.6099 14.7247 39.0852 18.4102 36.0359 21.9174C32.9866 25.4247 29.4033 29.087 25.2859 32.9044L22.624 35.3664C22.3174 35.6729 21.9569 35.9008 21.5425 36.0501C21.128 36.1993 20.7095 36.274 20.287 36.274Z" fill="black" />
    </svg>
  }

  return <svg className={className} height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={className} d="M20.2874 36.274C19.8747 36.274 19.4617 36.2015 19.0485 36.0566C18.6353 35.9117 18.2687 35.6774 17.9486 35.3539L15.3001 32.8924C11.1747 29.083 7.59333 25.4247 4.556 21.9174C1.51867 18.4102 0 14.7247 0 10.8609C0 7.7672 1.03395 5.18364 3.10185 3.1102C5.16968 1.03674 7.7314 0 10.787 0C12.479 0 14.1544 0.396384 15.8131 1.18915C17.4718 1.98192 18.9631 3.29568 20.287 5.13045C21.7776 3.29568 23.3022 1.98192 24.8609 1.18915C26.4196 0.396384 28.0616 0 29.787 0C32.8524 0 35.4225 1.03674 37.4974 3.1102C39.5724 5.18364 40.6099 7.7672 40.6099 10.8609C40.6099 14.7247 39.0852 18.4102 36.0359 21.9174C32.9866 25.4247 29.4033 29.087 25.2859 32.9044L22.624 35.3664C22.3091 35.6856 21.9466 35.9166 21.5366 36.0596C21.1266 36.2025 20.7102 36.274 20.2874 36.274ZM18.9272 8.90875C18.0591 7.30728 16.8877 5.98989 15.4131 4.95655C13.9384 3.92322 12.3975 3.40655 10.7902 3.40655C8.62343 3.40655 6.85113 4.10435 5.4733 5.49995C4.09547 6.89555 3.40655 8.68969 3.40655 10.8824C3.40655 12.7891 4.04942 14.7964 5.33515 16.9043C6.62088 19.0122 8.15855 21.0571 9.94815 23.0389C11.7378 25.0207 13.5944 26.8668 15.518 28.5773C17.4417 30.2878 19.0321 31.7218 20.2893 32.8794C21.5495 31.7461 23.1404 30.3162 25.0618 28.5897C26.9832 26.8633 28.8392 25.0002 30.6296 23.0006C32.42 21.0009 33.9633 18.9485 35.2593 16.8432C36.5553 14.7379 37.2033 12.743 37.2033 10.8584C37.2033 8.68395 36.5035 6.89838 35.1039 5.50165C33.7043 4.10492 31.9339 3.40655 29.7928 3.40655C28.1462 3.40655 26.5939 3.91489 25.1359 4.93155C23.6779 5.94822 22.4856 7.27395 21.5588 8.90875C21.3897 9.19135 21.1958 9.39497 20.9771 9.5196C20.7583 9.64424 20.5096 9.70655 20.231 9.70655C19.9524 9.70655 19.7003 9.64424 19.4748 9.5196C19.2493 9.39497 19.0667 9.19135 18.9272 8.90875Z" fill="black" />
  </svg>
} 