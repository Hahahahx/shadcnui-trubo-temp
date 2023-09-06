'use client'

import {
  Card,
  buttonVariants, cn,
} from 'shadcn-ui'
import Link from 'next/link'

// import logo from '@/assets/images/logo/green.svg'
import Image from 'next/image'
import { UserAuthForm } from '@/components/form/user-auth-form'

export default function AuthenticationPage() {
  // const {
  //   t, i18n,
  // } = useTranslation()

  return (

    <Card className=" w-min-[350px] w-max-[1000px] w-[80%]">

      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8',
          )}
        >
          Setting
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900">
            <Image
              src="/1.jpg"
              width={1280}
              height={843}
              alt="Authentication background"
              className="block dark:hidden h-full object-cover"
            />
            <Image
              src="/2.jpg"
              width={1280}
              height={843}
              alt="Authentication background"
              className="hidden dark:block h-full object-cover"
            />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            {/* <img src={logo} height={30} width={30} /> */}
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {/* {t('login')} */}
                login
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm onSubmit={() => {}} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
