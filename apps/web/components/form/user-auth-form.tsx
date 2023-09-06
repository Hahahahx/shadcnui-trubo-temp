'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button, Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard, HoverCardContent, HoverCardTrigger, Icons, Input, cn,
} from 'shadcn-ui'
import {
  useForm,
} from 'react-hook-form'

import * as z from 'zod'

const formSchema = z.object({
  username: z
    .string(),
  password: z
    .string(),
})
type FormValues = z.infer<typeof formSchema>

interface UserAuthFormProps {
  defaultValues?: Partial<FormValues>
  onSubmit: (data: FormValues) => void
}

export function UserAuthForm({
  defaultValues, onSubmit, ...props
}: UserAuthFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  })

  const [
    isLoading, setIsLoading,
  ] = React.useState<boolean>(false)

  return (
    <Form {...form}>
      <div className={cn('grid gap-6')}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="username"
                      autoCapitalize="none"
                      autoCorrect="off" {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name. It can be your real name or a
                    pseudonym. You can only change this once every 30 days.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      autoCapitalize="none"
                      autoCorrect="off" {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name. It can be your real name or a
                    pseudonym. You can only change this once every 30 days.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <div className="w-full">
              <Button variant="outline" type="button" disabled className="w-full">
                {isLoading
                  ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )
                  : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                  )}{' '}
                Github
              </Button>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            尚未开通
          </HoverCardContent>
        </HoverCard>
      </div>
    </Form>
  )
}
