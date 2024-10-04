import './button.css'

export interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'ktc-color-text-primary' : 'ktc-color-text-secondary'
  return (
    <button
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
