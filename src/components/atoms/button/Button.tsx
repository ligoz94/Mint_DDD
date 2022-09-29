import { Button } from '@chakra-ui/react'

export interface ButtonProps {
  color?: string
  text: string
  size?: string
  variant?: string
  isLoading?: boolean
  colorScheme?: string
  onClick: () => void
  borderRadius?: string
}

const ButtonComp: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  return (
    <div className="btn">
      <Button
        {...{
          color: 'white',
          size: 'sm',
          variant: 'solid',
          isLoading: false,
          colorScheme: 'blue',
          ...props,
        }}
      >
        {props.text}
      </Button>
    </div>
  )
}

export default ButtonComp
