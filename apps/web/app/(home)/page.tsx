import {
  PageHeader, PageHeaderDescription, PageHeaderHeading, ThemeCustomizer,
} from 'shadcn-ui'
import { ThemesTabs } from '@/components/theme-tabs'

export default function Home() {
  return (

    <div className="container">
      <PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
        <PageHeaderHeading>Make it yours.</PageHeaderHeading>
        <PageHeaderDescription>
          Hand-picked themes that you can copy and paste into your apps.
        </PageHeaderDescription>
      </PageHeader>
      <div className="px-4 pb-8 md:ml-auto md:pb-0">
        <ThemeCustomizer />
      </div>
      <ThemesTabs />
    </div>
  )
}
