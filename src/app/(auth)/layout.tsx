export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
     <div>
        <header style={{backgroundColor:"grey"}}>
            try to connect with us
        </header>
        {children}
        <footer style={{backgroundColor:"cyan"}}>
            naxx_g team
        </footer>
     </div>
    )
  }
  