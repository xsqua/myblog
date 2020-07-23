import 'bulma/css/bulma.css'
import Link from "next/link"

export	default function App({Component,pageProps}){
    return (
        <>
            <div>
                <Link href="/"><a>Home</a></Link>
                {" "}
                <Link href="/about"><a>About</a></Link>
            </div>
            <Component {...pageProps} />
        </>
    )
}