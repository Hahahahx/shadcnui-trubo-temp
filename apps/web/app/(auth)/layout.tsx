
export default function Layout({ children }: RootLayoutProps) {
  return (
    <main
      className="h-screen w-screen flex justify-center items-center"
    >
      {children}
    </main>
  )
}
