import 'styles/globals.css'

const RootLayout = ({children}) => {
return (
    <html>
      <body>
        <div className='main'>
        </div>
        <main className='app'>
          {children}

        </main>
      </body>
    </html>
  )
}

export default RootLayout