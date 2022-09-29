import { ButtonGroup } from '@chakra-ui/react'
import React from 'react'

type ButtonVariant = 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled'

interface ButtonGroupProps {
  children: React.ReactElement
  variant?: ButtonVariant
  spacing?: string
}

const ButtonGroupComp: React.FC<ButtonGroupProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="button_group">
      <ButtonGroup {...{ variant: 'outline', spacing: '6', ...props }}>
        {children}
      </ButtonGroup>
    </div>
  )
}

export default ButtonGroupComp
