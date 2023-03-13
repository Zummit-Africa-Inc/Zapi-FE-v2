import "./styles/spinner-alt.css";

interface Props {
	size: 'small' | 'medium' | 'large'
	thickness: 'thin' | 'medium' | 'thick'
	color?: string
	className?: string
}

const SpinnerAlt = ({ size, thickness, className, color }: Props) => {
	const sizes = {
		small: '',
		medium: 'spinner-size__medium',
		large: 'spinner-size__large',
	}

	const thick = {
		thin: '',
		medium: 'spinner-thickness__medium',
		thick: 'spinner-thickness__medium',
	}

	return (
		<div
			className={`spinner ${sizes[size]} ${thick[thickness]} ${className}`}
			style={{ borderColor: color, borderBottomColor: 'transparent' }}
		/>
	)
}

export default SpinnerAlt
