import type { LtComponentSize } from '@lite-space/utils'

interface LtButtonProps {
  type: 'text' | 'link' | 'primary' | 'default'
  disabled: boolean
  danger: boolean
  block: boolean
  icon: string
  iconPosition: 'start' | 'end'
  circle: boolean
  autoInsertSpace: boolean
  size: LtComponentSize
}

export type ButtonProps = Partial<LtButtonProps>
export type ButtonInstance = InstanceType<typeof import('./Button.vue')['default']>
