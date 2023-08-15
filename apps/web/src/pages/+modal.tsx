import { useLocation } from 'react-router-dom'

import {
  Button,
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from 'shadcn-ui'
import React from 'react'
import { useModals } from '@/router'

export default function Welcome() {
  const location = useLocation()
  const modals = useModals()

  const [
    open, setOpen,
  ] = React.useState(false)

  React.useEffect(() => {
    setOpen(true)
  }, [])

  const handleClose = (params?: any) => {
    setOpen(false)
    // 走完动画，因为没有提供出动画结束的事件操作
    setTimeout(() => {
      modals.close(params)
    }, 100)
  }

  return (
    <Dialog
      defaultOpen open={open} onOpenChange={(v) => {
        console.log(v)
        handleClose()
      }}
    >
      <DialogContent className="gap-0 p-0 outline-none">
        <DialogHeader className="px-4 pb-4 pt-5">
          <DialogTitle>New message</DialogTitle>
          <DialogDescription>
            Invite a user to this thread. This will create a new group
            message.
          </DialogDescription>
        </DialogHeader>

        <h2>Global Modal!</h2>
        <p>Current pathname: {location.pathname}</p>

        <DialogFooter className="flex items-center border-t p-4 sm:justify-between">

          <Button onClick={() => handleClose()}>Close</Button>
          <Button onClick={() => handleClose({ at: '/login' })}>Close and redirect to /login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
