// TooltipWrapper.jsx
import { useState } from 'react'
import { Tooltip } from './Tooltip'

export function TooltipWrapper({ text, children }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className='tooltip-wrapper' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {visible && <Tooltip text={text}>{children}</Tooltip>}
      {!visible && children}
    </div>
  )
}
