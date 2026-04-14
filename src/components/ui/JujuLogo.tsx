import { cn } from '@/lib/utils';

type Variant = 'stacked' | 'horizontal' | 'circle';
type Color = 'coral' | 'yellow' | 'green' | 'white' | 'black';

const colorMap: Record<Color, string> = {
  coral: '#E69386',
  yellow: '#F6CB46',
  green: '#68B899',
  white: '#FFFFFF',
  black: '#000000',
};

interface Props {
  variant?: Variant;
  color?: Color;
  className?: string;
  title?: string;
}

// Approximation of the JUJU wordmark until the client's vector file is provided.
// TODO: replace with the official SVG from the brand book.
export function JujuLogo({
  variant = 'stacked',
  color = 'coral',
  className,
  title = 'JUJU Asian Kitchen',
}: Props) {
  const fill = colorMap[color];
  const textStyle = {
    fontFamily: 'var(--font-display-variable), DM Sans, system-ui, sans-serif',
    fontWeight: 900,
    letterSpacing: '-0.05em',
  } as const;

  if (variant === 'horizontal') {
    return (
      <svg
        viewBox="0 0 320 110"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
        className={cn('block', className)}
      >
        <text
          x="160"
          y="72"
          textAnchor="middle"
          fill={fill}
          fontSize="84"
          style={textStyle}
        >
          JUJU
        </text>
        <text
          x="160"
          y="100"
          textAnchor="middle"
          fill={fill}
          fontSize="14"
          fontWeight="500"
          style={{ fontFamily: textStyle.fontFamily, letterSpacing: '0.1em' }}
        >
          asian kitchen
        </text>
      </svg>
    );
  }

  if (variant === 'circle') {
    return (
      <svg
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
        className={cn('block', className)}
      >
        <circle cx="120" cy="120" r="120" fill={fill} />
        <text
          x="120"
          y="118"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="88"
          style={textStyle}
        >
          JU
        </text>
        <text
          x="120"
          y="194"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="88"
          style={textStyle}
        >
          JU
        </text>
      </svg>
    );
  }

  // stacked
  return (
    <svg
      viewBox="0 0 220 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn('block', className)}
    >
      <text
        x="110"
        y="115"
        textAnchor="middle"
        fill={fill}
        fontSize="140"
        style={textStyle}
      >
        JU
      </text>
      <text
        x="110"
        y="235"
        textAnchor="middle"
        fill={fill}
        fontSize="140"
        style={textStyle}
      >
        JU
      </text>
      <text
        x="110"
        y="270"
        textAnchor="middle"
        fill={fill}
        fontSize="18"
        fontWeight="500"
        style={{ fontFamily: textStyle.fontFamily, letterSpacing: '0.18em' }}
      >
        asian kitchen
      </text>
    </svg>
  );
}
