
export interface ButtonProps {
    label: string
    variant: 'primary' | 'secondary' | 'outline' | 'text' | 'rounded' | 'square'
    size: 'small' | 'medium' | 'large'
    type?: 'submit' | 'reset' | 'button'
    onClick?: () => void
    icon?: JSX.Element
    to?: string
}