import Head from "next/head"
import { NextSeo } from 'next-seo'

function Page({title, description, path, children}) {
    const url = `https://jogajunto.com${path}`;
    return (
        <div>
            <NextSeo
            title={title}
            description={description}
            canonical={url}
            openGraph={{
                url,
                title,
            }}
            />
            {children}
        </div>
    )
}

export default Page