import '../style.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) 
{ return <Component {...pageProps} />
}
