import NavBar from "@/components/NavBar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body>
        <h1>Header from root</h1>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
